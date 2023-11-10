
    // Function to create an Intersection Observer for an element with a given ID
function createIntersectionObserver(elementId, animationName,fadeOutAnimationName) {
  const element = document.getElementById(elementId);

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2, // 20% of the target element must be visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.animation = `${animationName} 2s ease-in-out forwards`;
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
}

// Create Intersection Observers for the specified elements
createIntersectionObserver('container', 'fadeIn');
createIntersectionObserver('gmap-cebu', 'slideInright5');
createIntersectionObserver('title2', 'slideInleft4');
createIntersectionObserver('info2', 'slideInleft5');
createIntersectionObserver('gmap-bohol', 'slideInleft6');
createIntersectionObserver('title3', 'slideInright6');
createIntersectionObserver('info3', 'slideInright7');



