/* Am I working? Test javascript injection, replace all images with an image location.*/
Array.prototype.forEach.call(document.querySelectorAll('img'), function (img) {
  img.src = 'REPLACEME_REPLACEME!';
});
/* END TEST */
