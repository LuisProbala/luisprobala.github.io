
(function() {
  var elements;
  var windowWidth;

  function init() {
    elements = document.querySelectorAll('.mapa');
    windowWidth = window.innerWidth;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromLeft = elements[i].getBoundingClientRect().left;

      if (positionFromLeft <= -600) {
        element.classList.add('mapa-moved')
        element.classList.remove('mapa');
      }
    }
  }
document.getElementById("map").addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
