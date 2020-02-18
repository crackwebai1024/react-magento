function getFitDims(image, canvas) {
  //fits image inside box canvas so that it has room to rotate
  const R = image.width / image.height;
  const fitHeight = Math.floor(
    Math.sqrt(Math.pow(canvas.width, 2) / (1 + Math.pow(R, 2)))
  );
  const fitWidth = Math.floor(fitHeight * R);
  var dx = Math.floor(canvas.width / 2 - fitWidth / 2);
  var dy = Math.floor(canvas.height / 2 - fitHeight / 2);

  return { fitWidth, fitHeight, dx, dy };
}

function drawImgParams(window, image, canvas, canvasWindowRatio = 0.5) {
  //provides canvas and image dimensions based on window size.
  canvas.width = canvas.height =
    window.innerHeight >= window.innerWidth
      ? window.innerWidth * canvasWindowRatio
      : window.innerHeight * canvasWindowRatio;
  const { fitWidth, fitHeight, dx, dy } = getFitDims(image, canvas);

  return [0, 0, image.width, image.height, dx, dy, fitWidth, fitHeight];
}

module.exports.drawImgParams = drawImgParams;
