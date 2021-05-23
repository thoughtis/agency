// Definitions
const toggleShowAtHoverPosition = (e, showOrHide) => {
  const elt = e.target.querySelector('.show-at-hover-position__elt-to-show');

  if (!elt) {
    return
  }

  elt.style.top = `${e.offsetY}px`;
  elt.style.left = `${e.offsetX}px`;

  if (showOrHide === 'show') {
    elt.classList.remove('hidden');
  } else if (showOrHide === 'hide') {
    elt.classList.add('hidden');
  }
}

// Attach event listeners
document.querySelectorAll('.show-at-hover-position__target').forEach((target) => {
  target.addEventListener('mouseover', e => toggleShowAtHoverPosition(e, 'show'))
  target.addEventListener('mouseout', e => toggleShowAtHoverPosition(e, 'hide'))
})