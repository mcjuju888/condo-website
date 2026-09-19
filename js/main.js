/* Renders the page from js/config.js. No build step, no dependencies. */
(function () {
  'use strict';

  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* ---------- WhatsApp links ---------- */
  var waHref = 'https://wa.me/' + SITE.whatsappNumber +
               '?text=' + encodeURIComponent(SITE.whatsappMessage);

  function wireCta(el, roomName) {
    if (!el) return;
    el.href = roomName
      ? 'https://wa.me/' + SITE.whatsappNumber + '?text=' +
        encodeURIComponent(SITE.whatsappMessage + ' (' + roomName + ')')
      : waHref;
    el.target = '_blank';
    el.rel = 'noopener';
  }
  ['#hero-cta', '#contact-cta', '#dock-cta'].forEach(function (s) { wireCta($(s)); });

  /* ---------- Header ---------- */
  $('#headline').textContent = SITE.headline;
  $('#tagline').textContent = SITE.tagline;
  document.title = SITE.headline;

  var locLine = SITE.neighborhood + ' · ' + SITE.city;
  $('#hero-location').textContent = locLine;
  $('#footer-loc').textContent = locLine;

  $('#stat-util').textContent = SITE.utilities.share;
  $('#stat-park').textContent = SITE.parking.price;

  /* ---------- Rooms ---------- */
  $('#rooms-list').innerHTML = SITE.rooms.map(function (room) {
    var imgs = room.photos.map(function (src, i) {
      return '<img src="' + esc(src) + '" alt="' + esc(room.name) + ' photo ' + (i + 1) +
             '" loading="lazy" data-cap="' + esc(room.name) + '">';
    }).join('');
    var dots = room.photos.length > 1
      ? '<div class="dots">' + room.photos.map(function (_, i) {
          return '<span class="dot' + (i === 0 ? ' on' : '') + '"></span>';
        }).join('') + '</div>'
      : '';
    var chips = (room.features || []).map(function (f) {
      return '<span class="chip">' + esc(f) + '</span>';
    }).join('');

    return '<article class="room" id="' + esc(room.id) + '">' +
             '<div class="gallery">' + imgs + '</div>' + dots +
             '<div class="room-body">' +
               '<h3>' + esc(room.name) + '</h3>' +
               '<p>' + esc(room.blurb) + '</p>' +
               '<div class="chips">' + chips + '</div>' +
               '<a class="room-link" data-room="' + esc(room.name) + '" href="#">' +
                 'Ask about ' + esc(room.name) + ' &rarr;' +
               '</a>' +
             '</div>' +
           '</article>';
  }).join('');

  Array.prototype.forEach.call(document.querySelectorAll('.room-link'), function (a) {
    wireCta(a, a.dataset.room);
  });

  /* Gallery dots follow the scroll position */
  Array.prototype.forEach.call(document.querySelectorAll('.gallery'), function (g) {
    var dots = g.nextElementSibling;
    if (!dots || !dots.classList.contains('dots')) return;
    var marks = dots.children;
    g.addEventListener('scroll', function () {
      var i = Math.round(g.scrollLeft / g.clientWidth);
      for (var n = 0; n < marks.length; n++) marks[n].classList.toggle('on', n === i);
    }, { passive: true });
  });

  /* ---------- Shared spaces ---------- */
  $('#shared-blurb').textContent = SITE.shared.blurb;
  $('#shared-grid').innerHTML = SITE.shared.photos.map(function (p) {
    return '<figure class="tile" style="margin:0">' +
             '<img src="' + esc(p.src) + '" alt="' + esc(p.caption) +
             '" loading="lazy" data-cap="' + esc(p.caption) + '">' +
             '<span>' + esc(p.caption) + '</span>' +
           '</figure>';
  }).join('');

  /* ---------- Map ---------- */
  var q = encodeURIComponent(SITE.mapQuery);
  $('#map').src = 'https://www.google.com/maps?q=' + q + '&z=14&output=embed';
  $('#directions').href = 'https://www.google.com/maps/search/?api=1&query=' + q;
  $('#area-blurb').textContent = SITE.areaBlurb;

  /* ---------- Nearby ---------- */
  var MODE_ICON = {
    walk:    '<svg viewBox="0 0 24 24"><circle cx="13" cy="4" r="1.8"/><path d="M11 21l2-5-2.5-2.5L9 9l4-1.5 3 3 2.5 1"/><path d="M10.5 13.5L7 15l-1 6"/></svg>',
    drive:   '<svg viewBox="0 0 24 24"><path d="M4 16v-3.2l1.8-4.3A2 2 0 0 1 7.6 7h8.8a2 2 0 0 1 1.8 1.5L20 12.8V16"/><path d="M4 16h16v2.5h-3V16M7 18.5V16"/><circle cx="7.6" cy="13.5" r="1"/><circle cx="16.4" cy="13.5" r="1"/></svg>',
    transit: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="12" rx="2.5"/><path d="M5 10h14M7.5 20l1.5-4M16.5 20L15 16"/><circle cx="8.5" cy="13.2" r=".8"/><circle cx="15.5" cy="13.2" r=".8"/></svg>',
    bike:    '<svg viewBox="0 0 24 24"><circle cx="6" cy="16.5" r="3.2"/><circle cx="18" cy="16.5" r="3.2"/><path d="M6 16.5l4-7h5l3 7M9.5 9.5h4"/></svg>'
  };
  var MODE_WORD = { walk: 'walk', drive: 'drive', transit: 'transit', bike: 'bike ride' };

  $('#nearby-list').innerHTML = SITE.nearby.map(function (n) {
    var mode = MODE_ICON[n.mode] ? n.mode : 'drive';
    return '<li>' +
             '<span class="mode">' + MODE_ICON[mode] + '</span>' +
             '<span class="nearby-name">' + esc(n.name) + '</span>' +
             '<span class="nearby-time"><b>' + esc(n.mins) + ' min</b>' +
               '<small>' + MODE_WORD[mode] + '</small></span>' +
           '</li>';
  }).join('');

  /* ---------- Costs ---------- */
  $('#util-share').textContent = SITE.utilities.share;
  $('#util-text').textContent  = SITE.utilities.text;
  $('#split-fill').style.width = SITE.utilities.share;
  $('#park-price').textContent  = SITE.parking.price;
  $('#park-period').textContent = SITE.parking.period;
  $('#park-text').textContent   = SITE.parking.text;

  /* ---------- Rules ---------- */
  var rulesList = $('#rules-list');
  if (SITE.rules && SITE.rules.length) {
    rulesList.innerHTML = SITE.rules.map(function (r) {
      return '<li>' + esc(r) + '</li>';
    }).join('');
  } else {
    $('#rules').remove();
  }

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.gallery img, .tile img');
    if (img) {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = img.dataset.cap || '';
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      return;
    }
    if (e.target === lb || e.target.id === 'lb-close') closeLb();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hidden) closeLb();
  });

  /* ---------- Sticky dock: show once past the hero ---------- */
  var dock = $('.dock'), hero = $('.hero');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle('show', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(hero);
  } else {
    dock.classList.add('show');
  }

  /* ---------- Tab highlighting ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs a'));
  var sections = tabs.map(function (t) { return document.querySelector(t.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var seen = new Map();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { seen.set(en.target, en.intersectionRatio); });
      var best = null, bestRatio = 0;
      seen.forEach(function (ratio, el) {
        if (ratio > bestRatio) { bestRatio = ratio; best = el; }
      });
      tabs.forEach(function (t, i) { t.classList.toggle('on', bestRatio > 0 && sections[i] === best); });
    }, { threshold: [0, .25, .5, .75, 1], rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(function (s) { if (s) obs.observe(s); });
  }
})();
