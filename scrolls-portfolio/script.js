/*
 window.addEventListener('load', function() {

       scroll into view
    document.querySelector('.js-scroll-into-hello').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });
      });

    });
*/

/*  if (location.hash) {
    window.location = location.href.replace(location.hash, '');
  }
*/

// filter handling for a /dir/ OR /indexordefault.page

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



$(".mini-nav ul li").click(function(){ // don't need each (click does this internally)
 $(this).children().addClass('activeElem') //add cell-selected class to a
 .parent() //go back to li
 .siblings() //look at siblings
 .find('.activeElem') //find cell-selected elements
 .removeClass('activeElem'); //remove the class
});



/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var button1 = document.getElementById("button1");

// Get the offset position of the navbar
var sticky = button1.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageXOffset >= sticky) {
    button1.classList.add("sticky")
  } else {
    button1.classList.remove("sticky");
  }
}
*/
