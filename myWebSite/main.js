$(document).ready(function(){
var header = $('body');

var backgrounds = new Array(
    'url(/imgs/pexels-adam-krypel.jpg)'
  , 'url(/imgs/pexels-felix-mi1.jpg)'
  , 'url(/imgs/pexels-jeremy.jpg)'
  , 'url(/imgs/pexels-hristo.jpg)'
  , 'url(/imgs/pexels-felix-mi3.jpg)'
  , 'url(/imgs/pexels-pixabay-philippe.jpg)'
  , 'url(/imgs/pexels-pixabay-220201.jpg)'
  , 'url(/imgs/pexels-pixabay-2150.jpg)'
  , 'url(/imgs/pexels-pixabay-207529.jpg)'
);
    
var current = 0;
 


function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 10000);

header.css('background-image', backgrounds[0]);
});


function displayAbout(){
  var arrow = document.getElementById('animation');
  arrow.classList.toggle('rotate');
  var display= document.getElementById('about');
  display.classList.toggle('active');
};