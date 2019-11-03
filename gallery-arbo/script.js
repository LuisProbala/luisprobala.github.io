/*
function getCurrentScroll() {
    return $(window).scrollTop() + $(window).height() - 60;
}
function getItemScroll(item){
  return $(item).offset().top;
}
function fadeIn(){
  var m = document.getElementsByClassName('page');
  var windowBot = getCurrentScroll();

  $(m).each(function() {
    if (windowBot >= getItemScroll(this) ) {
      if(!this.classList.contains('page')){
        this.className.addClass('fade');
       }
	  }
    });
}
*/

$(window).scroll(function()) {
    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
        $(".page").addClass("fade");
    }
};
