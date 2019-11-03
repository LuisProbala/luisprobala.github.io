/*()
$(".nav-item").on("click", function() {
        var $this = $(this);
        var $target = $(this).parent().find(".dropdown-inside").first();
        if ($target.length != 0) {
            if (!$target.is(":visible"))
                $this.find("i").addClass("rotate");
            else
                $this.find("i").removeClass("rotate");
            $target.toggle(400)
        }
    });

    function changeSize(id) {
        var el = document.getElementByClassName(id);
        if (el) {
            el.style.height = "200px";
            el.style.width = "200px";
        }
    }
*/

function openFunction() {
  var element = document.getElementById("content1");

if (element.classList) {
  element.classList.toggle("open-item");
}
else {
  // For IE9
  var classes = element.className.split(" ");
  var i = classes.indexOf("open-item");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("open-item");
    element.className = classes.join(" ");
}
}



function open2Function() {
  var element = document.getElementById("content2");

if (element.classList) {
  element.classList.toggle("open-item");
}
else {
  // For IE9
  var classes = element.className.split(" ");
  var i = classes.indexOf("open-item");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("open-item");
    element.className = classes.join(" ");
}
}



function open3Function() {
  var element = document.getElementById("content3");

if (element.classList) {
  element.classList.toggle("open-item");
}
else {
  // For IE9
  var classes = element.className.split(" ");
  var i = classes.indexOf("open-item");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("open-item");
    element.className = classes.join(" ");
}
}




/*
jQuery(function ($) {
    $('.nav-item-1, .nav-item-2, .nav-item-3, .nav-item-4').hover(function () {
        $(this).find('ul').stop(true, true).slideToggle("fast", "linear")
    }).find('ul').hide("slow")
})

$(function () {
        $(".subnav-item").on('click',function(){
            $(".subnav-content-text").slideUp();
            var divno =  $(this).attr('id');
            $("#div_dom" + divno).slideToggle();
        });
    });

$(function () {
        $(".subnav-item").on('click',function(){
            $(".subnav-content-img").slideUp();
            var divno =  $(this).attr('id');
            $("#div_img" + divno).slideToggle();
        });
    });

$(function () {
        $(".subnav-item").on('click',function(){
            $(".material-icons").slideUp();
            var divno =  $(this).attr('id');
            $("#div_lnk" + divno).slideToggle();
        });
    });

$(function () {
        $(".subnav-item").on('click',function(){
            $("figcaption").slideUp();
            var divno =  $(this).attr('id');
            $("#div_cap" + divno).slideToggle();
        });
    });



*/
