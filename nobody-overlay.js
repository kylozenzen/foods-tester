/* ============================================================
   NOBODY STUDIOS — STEADY OVERLAY SCRIPT
   Paste this <script> block into index.html just before </body>
   Also add to <head>: <link rel="stylesheet" href="nobody-overlay.css">
   ============================================================ */

(function() {
  // Skip if user has seen it this session (won't re-flash on navigation)
  if (sessionStorage.getItem('ns_seen')) return;
  sessionStorage.setItem('ns_seen', '1');

  // Build the overlay DOM
  const overlay = document.createElement('div');
  overlay.id = 'nobody-overlay';
  overlay.innerHTML = `
    <div class="ns-content">
      <div class="ns-studio-label">A Nobody Studios App</div>
      <span class="ns-wordmark">NOBODY<br>STUDIOS</span>
      <div class="ns-divider"></div>
      <span class="ns-app-name">STEADY</span>
      <p class="ns-tagline">
        <strong>Protein. Calories. Water.</strong><br>
        That's it. You're welcome.
      </p>
      <div class="ns-progress-track">
        <div class="ns-progress-fill"></div>
      </div>
    </div>
    <div class="ns-badge">built by nobody &middot; trust nobody</div>
    <div class="ns-corner-text">NOBODY</div>
  `;

  document.body.prepend(overlay);

  // Auto-dismiss after 2.8s
  setTimeout(() => {
    overlay.classList.add('ns-exit');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  }, 2800);

  // Also allow tap-to-dismiss early
  overlay.addEventListener('click', () => {
    overlay.classList.add('ns-exit');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  });
})();
