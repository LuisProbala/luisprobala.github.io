
(function() {
  var elements;
  var windowWidth;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowWidth = window.innerWidth;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromLeft = elements[i].getBoundingClientRect().left;

      if (positionFromLeft - windowWidth <= 0) {
        element.classList.add('position-1')
        element.classList.remove('hidden');
      }
    }
  }
  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
