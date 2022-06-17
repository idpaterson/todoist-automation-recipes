document.querySelectorAll('img.xhdpi').forEach((el) => {
  // Use srcset to render images no larger than their natural size
  el.setAttribute('srcset', el.src + ' 2x');
  el.removeAttribute('src');
})
