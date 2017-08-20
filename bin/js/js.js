/* Am I working? Test javascript injection, replace all images with an image location.
Array.prototype.forEach.call(document.querySelectorAll('img'), function (img) {
  img.src = 'https://media0.giphy.com/media/6L015gMEW3pFC/giphy.gif';
});
*/

/*include H*/

init H
window.hypothesisConfig = function () {
  return {
    "showHighlights": true
  };
};
