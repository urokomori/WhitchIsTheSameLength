function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }
 
function drawIllusionCloseArrow(centerX, centerY, length, color){
  var arrowSize = Math.floor(length/8);
  var harfLength = Math.floor(length/2);

  context.strokeStyle = color;

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX+harfLength,centerY);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX-harfLength+arrowSize,centerY-arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX-harfLength+arrowSize,centerY+arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX+harfLength,centerY);
  context.lineTo(centerX+harfLength-arrowSize,centerY-arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX+harfLength,centerY);
  context.lineTo(centerX+harfLength-arrowSize,centerY+arrowSize);
  context.stroke();
}

function drawIllusionOpenArrow(centerX, centerY, length, color){
  var arrowSize = Math.floor(length/8);
  var harfLength = Math.floor(length/2);

  context.strokeStyle = color;

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX+harfLength,centerY);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX-harfLength-arrowSize,centerY-arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX-harfLength,centerY);
  context.lineTo(centerX-harfLength-arrowSize,centerY+arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX+harfLength,centerY);
  context.lineTo(centerX+harfLength+arrowSize,centerY-arrowSize);
  context.stroke();

  context.beginPath();
  context.moveTo(centerX+harfLength,centerY);
  context.lineTo(centerX+harfLength+arrowSize,centerY+arrowSize);
  context.stroke();
}

  var white = '#ECEEF1';
  var blue = '#40AAEF';
  var yellow = '#FBA848';
  var red = '#F27398';
  var green = '#58BE89';

  var centerX = Math.floor(canvas.clientWidth/2);
  var firstY = 100;
  var length = 200;
  var lengthDiff = Math.floor(length/10);
  var marginY = Math.floor((length/4) * 2);

  drawIllusionCloseArrow(centerX, firstY , length, white);
  drawIllusionOpenArrow(centerX, firstY + marginY * 1, length - lengthDiff * 2, blue);
  drawIllusionOpenArrow(centerX, firstY + marginY * 2, length - lengthDiff * 1, yellow);
  drawIllusionOpenArrow(centerX, firstY + marginY * 3, length, red);
  drawIllusionOpenArrow(centerX, firstY + marginY * 4, length + lengthDiff * 1, green);
}