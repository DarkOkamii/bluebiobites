"use strict";
(() => {
  var CONSENT_KEY = 'bbb-cookie-consent';
  var GA_ID = 'G-3M2LZXPFL9';

  // Loaded from different depths (root, articulo/<slug>/, privacidad.html),
  // so resolve the privacy-policy link relative to this script's own
  // location rather than assuming a fixed depth.
  var ROOT_PREFIX = (function () {
    try {
      var cur = document.currentScript && document.currentScript.src;
      if (cur) return new URL('.', cur).pathname.replace(/\/$/, '');
    } catch (e) { /* ignore */ }
    return '';
  })();

  function loadGA() {
    if (window.__bbbGaLoaded) return;
    window.__bbbGaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentimiento de cookies');
    banner.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:200;' +
      'background:#0B3D57;color:#fff;padding:16px 20px;display:flex;gap:16px;' +
      'align-items:center;flex-wrap:wrap;font-family:\'DM Sans\',system-ui,sans-serif;' +
      'box-shadow:0 -2px 12px rgba(0,0,0,.2)';
    banner.innerHTML =
      '<p style="margin:0;flex:1;min-width:220px;font-size:14px;line-height:1.5">' +
      'Usamos cookies de analítica para saber qué artículos interesan más. ' +
      'Solo se activan si lo aceptas. ' +
      '<a href="' + ROOT_PREFIX + '/privacidad.html" style="color:#17A398">Más información</a>.</p>' +
      '<div style="display:flex;gap:10px;flex:none">' +
      '<button type="button" data-consent="rejected" style="cursor:pointer;background:transparent;' +
      'border:1px solid rgba(255,255,255,.4);color:#fff;padding:10px 18px;border-radius:6px;font-size:14px">Rechazar</button>' +
      '<button type="button" data-consent="accepted" style="cursor:pointer;background:#F2665E;border:none;' +
      'color:#fff;padding:10px 18px;border-radius:6px;font-size:14px">Aceptar</button>' +
      '</div>';
    document.body.appendChild(banner);
    banner.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consent]');
      if (!btn) return;
      var decision = btn.getAttribute('data-consent');
      try { localStorage.setItem(CONSENT_KEY, decision); } catch (e2) { /* ignore */ }
      if (decision === 'accepted') loadGA();
      banner.remove();
    });
  }

  var consent = null;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch (e) { /* ignore */ }

  if (consent === 'accepted') {
    loadGA();
  } else if (consent !== 'rejected') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }
})();
