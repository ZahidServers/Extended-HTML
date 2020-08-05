/*
* @package Extentended HTML 
* @version 1.0.0 
* @author Extentended HTML Mohammed Zahid Wadiwale
* @copyright Copyright (c) 2020 Mohammed Zahid Wadiwale 
* @license - zahidservers.github.io/Extended-HTML/license.md
*/
var slideIndex = 1;
function currentSlide(n) {
  showSlides(slideIndex = n);
}
window.addEventListener('DOMContentLoaded', (event) => {
var slideIndexs = 0;
function showSlidef() {
  var f;
  var slide = document.getElementsByClassName("slider-slides");
  var dot = document.getElementsByClassName("dot");
  for (f = 0; f < slide.length; f++) {
    slide[f].style.display = "none";  
  }
  slideIndexs++;
  if (slideIndexs > slide.length) {slideIndexs = 1}    
  for (f = 0; f < dot.length; f++) {
    dot[f].className = dot[f].className.replace(" active", "");
  }
  slide[slideIndexs-1].style.display = "block";  
  dot[slideIndexs-1].className += " active";
  setTimeout(showSlidef, 8000); // Change image every 8 seconds
}
showSlidef();
});
function showDivs(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  var x = document.getElementsByClassName("slider-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
