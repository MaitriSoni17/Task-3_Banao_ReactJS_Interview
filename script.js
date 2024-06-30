// Get all section elements
const sections = document.querySelectorAll('.appear-on-scroll');

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Loop through each section
  sections.forEach((section) => {
    // Check if the section is in view
    if (isInView(section)) {
      // Add the 'in-view' class to show the section
      section.classList.add('in-view');
    } else {
      // Remove the 'in-view' class to hide the section
      section.classList.remove('in-view');
    }
  });
});

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}


gsap.from(".container-fluid .sec1-imgs", {
    delay: 0.2,
  duration: 2,
  translate: "70px 20px",
  scrollTrigger: {
    trigger: ".container-fluid .sec1-imgs",
    scroller: "body",
  }
})



gsap.from("svg text", {
    delay: 0.2,
  duration: 2,
  transform: "translateY(10%)",
  scrollTrigger: {
    trigger: "svg text",
    scroller: "body",
  }
})
