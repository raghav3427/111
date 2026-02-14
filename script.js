const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttons = document.getElementById('buttons');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function moveNoButtonAway() {
  const containerRect = buttons.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  const padding = 8;
  const maxX = Math.max(0, containerRect.width - noRect.width - padding);
  const maxY = Math.max(0, containerRect.height - noRect.height - padding);

  // Try random positions until it's not overlapping the Yes button center
  let attempts = 0;
  let x, y;
  do {
    x = Math.floor(Math.random() * (maxX + 1));
    y = Math.floor(Math.random() * (maxY + 1));
    attempts++;
    if (attempts > 30) break;
  } while (Math.hypot((x + noRect.width/2) - (yesRect.left - containerRect.left + yesRect.width/2), (y + noRect.height/2) - (yesRect.top - containerRect.top + yesRect.height/2)) < 80);

  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

// Move when mouse enters the No button
if (noBtn) {
  noBtn.addEventListener('mouseenter', moveNoButtonAway);
  noBtn.addEventListener('focus', moveNoButtonAway);
}

// Also move when the mouse comes near the button (container-level mousemove)
if (buttons) {
  buttons.addEventListener('mousemove', (e) => {
    const b = noBtn.getBoundingClientRect();
    const distX = Math.abs(e.clientX - (b.left + b.width/2));
    const distY = Math.abs(e.clientY - (b.top + b.height/2));
    const threshold = 120;
    if (distX < threshold && distY < threshold) moveNoButtonAway();
  });
}

// Yes click shows overlay with first-person message
if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    overlay.hidden = false;
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    overlay.hidden = true;
  });
}

// Ensure initial placement so No isn't overlapping Yes
window.addEventListener('load', () => {
  if (!noBtn) return;
  noBtn.style.position = 'absolute';
  // ensure container is positioned relative for accurate absolute positioning
  buttons.style.position = 'relative';
  moveNoButtonAway();
});
