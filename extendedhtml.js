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
