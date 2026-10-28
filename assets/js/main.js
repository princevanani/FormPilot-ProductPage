/**
 * FormPilot Product Website Configuration & Interactive Logic
 */
var SITE_CONFIG = {
  storeUrl: '', // Add Chrome Web Store listing link when live (e.g. 'https://chromewebstore.google.com/detail/...')
  supportEmail: 'verify.formpilot@gmail.com',
  lastUpdated: 'October 2026',
  launchBanner: 'FormPilot — 30-Day Free Trial Available Now! Intelligent Cross-Tab Form Autofill'
};

function getHomePrefix() {
  var path = window.location.pathname.replace(/\\/g, '/');
  if (path.indexOf('/privacy/') !== -1 || path.indexOf('/terms/') !== -1) {
    return '../index.html';
  }
  return 'index.html';
}

function goPage(name) {
  var isHome = document.getElementById('page-home');
  if (!isHome && name !== 'privacy' && name !== 'terms') {
    window.location.href = getHomePrefix() + '#' + name;
    return;
  }

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  var el = document.getElementById('page-' + name);
  if (el) el.classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });
  var nv = document.querySelector('.nav-links a[data-nav="' + name + '"]');
  if (nv) nv.classList.add('active');

  window.scrollTo(0, 0);
  if (history.pushState) {
    history.pushState(null, '', '#' + name);
  } else {
    location.hash = name;
  }
}

function goHash(id) {
  var isHome = document.getElementById('page-home');
  if (!isHome) {
    window.location.href = getHomePrefix() + '#' + id;
    return;
  }

  if (['home', 'privacy', 'terms', 'faq', 'contact'].indexOf(id) === -1 && isHome) {
    goPage('home');
  }
  setTimeout(function() {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

function toggleMobileNav(open) {
  var nav = document.getElementById('mobileNav');
  if (!nav) return;
  if (open) {
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function toggleFaq(el) {
  var item = el.parentElement;
  var wasOpen = item.classList.contains('open');
  item.classList.toggle('open', !wasOpen);
}

function toast(msg) {
  var t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(function() {
    t.classList.remove('show');
  }, 3800);
}

function scrollToId(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyConfig() {
  document.querySelectorAll('.js-date').forEach(function(el) {
    if (SITE_CONFIG.lastUpdated) el.textContent = SITE_CONFIG.lastUpdated;
  });

  document.querySelectorAll('.js-email').forEach(function(el) {
    if (SITE_CONFIG.supportEmail) el.textContent = SITE_CONFIG.supportEmail;
  });

  document.querySelectorAll('.js-store').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      if (SITE_CONFIG.storeUrl) {
        window.open(SITE_CONFIG.storeUrl, '_blank', 'noopener');
      } else {
        toast('FormPilot is currently pending Chrome Web Store review. Extension will be available soon!');
      }
    });
  });

  document.querySelectorAll('.js-mailto').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      if (SITE_CONFIG.supportEmail) {
        var sub = el.getAttribute('data-subject');
        window.location.href =
          'mailto:' +
          SITE_CONFIG.supportEmail +
          (sub ? '?subject=' + encodeURIComponent(sub) : '');
      } else {
        toast('Support email: verify.formpilot@gmail.com');
      }
    });
  });

  if (SITE_CONFIG.launchBanner) {
    var b = document.getElementById('announce');
    var bt = document.getElementById('announceText');
    if (b && bt) {
      bt.textContent = SITE_CONFIG.launchBanner;
      b.style.display = 'flex';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  applyConfig();

  var isHome = document.getElementById('page-home');
  if (isHome) {
    var known = ['home', 'privacy', 'terms', 'faq', 'contact'];
    var h = (location.hash || '').replace('#', '');
    if (known.indexOf(h) !== -1) {
      goPage(h);
    } else {
      goPage('home');
    }

    window.addEventListener('hashchange', function() {
      var hh = (location.hash || '').replace('#', '');
      if (known.indexOf(hh) !== -1) goPage(hh);
    });
  }
});
