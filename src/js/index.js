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

// Strategy shapes - animate on scroll
ScrollTrigger.create({
  trigger: ".strategy-shapes",
  start: "top bottom",
  onEnter: () => {
    // Fade in the strategy shapes, one by one
    let delay = 0

    document.querySelectorAll('.strategy-shapes > div').forEach(shapeElt => {
      if (shapeElt && shapeElt.classList) {
        setTimeout(() => {
          shapeElt.classList.remove('opacity-0')
          shapeElt.classList.add('opacity-100')
        }, delay) 
        
        delay = delay + 400
      }
    })

    // Now Fade in the dots
    document.querySelectorAll('.strategy-shapes__dotted-line').forEach(dotsElt => {
      if (dotsElt && dotsElt.classList) {
        setTimeout(() => {
          dotsElt.classList.remove('opacity-0')
          dotsElt.classList.add('opacity-100')
        }, delay) 
        
        delay = delay + 100
      }
    })
  }
});


// Line chart line - animate on scroll
ScrollTrigger.create({
  trigger: ".chart-line",
  start: "top bottom",
  onEnter: () => {
    const elt = document.querySelector('.chart-line')
      if (elt && elt.classList) {
        elt.classList.remove('dashoffset-999')
        elt.classList.add('dashoffset-0')
      }
    }
});

// Bg text reveal - animate on scroll
ScrollTrigger.create({
  trigger: ".text-bg",
  start: "top center",
  onEnter: () => {
    const textElt = document.querySelector(".text-bg__inner")
    const quoteBoxElt = document.querySelector(".quote-box")

    if(textElt && textElt.classList) {
      textElt.classList.add("text-bg__inner--animated")
    }

    setTimeout(() => console.log(textElt.style), 3000);

    if(quoteBoxElt && quoteBoxElt.classList) {
      setTimeout(() => {
        quoteBoxElt.classList.add('bubbleIn--top-left--animated')
      }, 2000)
    }
  }
});