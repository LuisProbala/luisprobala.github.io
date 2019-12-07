/*
Open navigation lines, one for each
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

function open5Function() {
  var element = document.getElementById("content5");

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

// slideshow prev

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow');
},4000);

// observ gif

function hover(element) {
  element.setAttribute('src', '/img/observ2.gif');
}

function unhover(element) {
  element.setAttribute('src', '/img/ciep-prev1.png');
}

$("#slideshow2 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow2 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow2');
},4000);

// word typying


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ 'Escolas públicas.', 'Arborização urbana.', 'Siglas institucionais.', 'Espaço e linguagem.', 'Arte-educação.'];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById('swap').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});



$(document).ready(function(){
$("#logo-front") // select your element (supports CSS selectors)
    .hover(function(){ // trigger the mouseover event
        $("#logo-back") // select the element to show (can be anywhere)
            .addClass('intro-logo-ani'); // show the element
    }, function(){ // trigger the mouseout event
        $("#logo-back") // select the same element
            .removeClass('intro-logo-ani'); // hide it
    });
    })
