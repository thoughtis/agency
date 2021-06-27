// Definitions
const setDisplay = (elt, showOrHide) => {
  if (showOrHide === 'show') {
    elt.classList.remove('hidden');
  } else if (showOrHide === 'hide') {
    elt.classList.add('hidden');
  }
};

const toggleClass = (elt, classStr) => {
  if (elt.classList.contains(classStr)) {
    elt.classList.remove(classStr)
  } else {
    elt.classList.add(classStr)
  }
}

const putEltAtMousePosition = (e, elt) => {
  elt.style.top = `${e.offsetY}px`;
  elt.style.left = `${e.offsetX}px`;
}

const toggleModal = (openOrClose) => {
  const modalElt = document.querySelector(".contact__wrap");

  if (openOrClose === "open") {
    modalElt.classList.remove('hidden');
  } else if (openOrClose === "close") {
    modalElt.classList.add('hidden');
  }
}

// Attach event listeners
document.querySelectorAll('.show-at-hover-position__target').forEach((containerElt) => {
  const eltToShow = containerElt.querySelector('.show-at-hover-position__elt-to-show')
  containerElt.addEventListener('mouseover', () => {
    setDisplay(eltToShow, 'show');
    toggleClass(containerElt, "z-0");
    toggleClass(containerElt, "z-10");
  })
  containerElt.addEventListener('mouseout', () => {
    setDisplay(eltToShow, 'hide')
    toggleClass(containerElt, "z-0");
    toggleClass(containerElt, "z-10");
  })
  containerElt.addEventListener('mousemove', (e) => putEltAtMousePosition(e, eltToShow))
})

document.querySelectorAll('.contact-button').forEach((btnElt) => {
  btnElt.addEventListener('click', () => {
    scrollTo(0,0)
    toggleModal('open')
  })
})

document.querySelectorAll('.contact__close').forEach((btnElt) => {
  btnElt.addEventListener('click', () => toggleModal('close'))
})

document.querySelectorAll('form[name="contact"]').forEach((formElt) => {
  formElt.addEventListener('submit', e => {
    e.preventDefault();

    // Validate
    const nameElt = formElt.querySelector('input[name="full-name"');
    const emailElt = formElt.querySelector('input[name="email"');
    const phoneEltWrapper = formElt.querySelector('.iti');
    const phoneElt = formElt.querySelector('input[name="phone"');

    if (!nameElt?.value) {
      nameElt.parentNode.classList.add('invalid')
    } else {
      nameElt.parentNode.classList.remove('invalid')
    }

    if (!emailElt?.value) {
      emailElt.parentNode.classList.add('invalid')
    } else {
      emailElt.parentNode.classList.remove('invalid')
    }

    if (!phoneElt?.value) {
      phoneEltWrapper .parentNode.classList.add('invalid')
    } else {
      phoneEltWrapper .parentNode.classList.remove('invalid')
    }

    if (nameElt?.value && emailElt?.value && phoneElt?.value) {
      formElt.submit()
    }
  });
});

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
        
        delay = delay + 800
      }
    })

    // Now Fade in the dots
    document.querySelectorAll('.strategy-shapes__dotted-line').forEach(dotsElt => {
      if (dotsElt && dotsElt.classList) {
        setTimeout(() => {
          dotsElt.classList.remove('opacity-0')
          dotsElt.classList.add('opacity-100')
        }, delay) 
        
        delay = delay + 500
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

    if(quoteBoxElt && quoteBoxElt.classList) {
      setTimeout(() => {
        quoteBoxElt.classList.add('bubbleIn--top-left--animated')
      }, 800)
    }
  }
});

// Intl tel input
const inputs = document.querySelectorAll("input[type=\"tel\"");

inputs.forEach(input => intlTelInput(input, {
  autoPlaceholder: "polite",
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js"
}));

// Lottie globe spin
const globeContainer = document.querySelector('.lottie-globe');

bodymovin.loadAnimation({
  wrapper: globeContainer,
  animType: 'svg',
  loop: true,
  path: './assets/lottie-globe.json'
});