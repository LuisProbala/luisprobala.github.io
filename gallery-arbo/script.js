
(function() {
  var elements;
  var windowWidth;

  function init() {
    elements = document.querySelectorAll('.first');
    windowWidth = window.innerWidth;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromLeft = elements[i].getBoundingClientRect().left;

      if (positionFromLeft <= 100) {
        element.classList.add('first-moved')
        element.classList.remove('first');
      }
    }
  }
document.getElementById("map").addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
