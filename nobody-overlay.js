(function() {
  if (sessionStorage.getItem('ns_seen')) return;
  sessionStorage.setItem('ns_seen', '1');

  const overlay = document.createElement('div');
  overlay.id = 'nobody-overlay';
  overlay.innerHTML = `
    <div class="ns-corner-label">NOBODY<br>STUDIOS</div>
    <div class="ns-content">
      <div class="ns-studio-label">A Nobody Studios App</div>
      <span class="ns-wordmark">NOBODY<br>STUDIOS</span>
      <div class="ns-divider"></div>
      <span class="ns-app-name">STEADY</span>
      <p class="ns-tagline">
        <strong>Protein. Calories. Water.</strong><br>
        That&rsquo;s it. You&rsquo;re welcome.
      </p>
      <div class="ns-progress-track">
        <div class="ns-progress-fill"></div>
      </div>
      <p class="ns-tap-hint">tap to skip</p>
    </div>
    <div class="ns-badge">built by nobody &middot; trust nobody</div>
    <div class="ns-corner-text">NOBODY</div>
  `;

  document.body.prepend(overlay);

  const dismiss = () => {
    overlay.classList.add('ns-exit');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  };

  setTimeout(dismiss, 2800);
  overlay.addEventListener('click', dismiss);
})();
