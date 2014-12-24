function switchAnswer(){

	var canvas = document.getElementById('answer-canvas');
  	if (canvas.getContext){
    	var context = canvas.getContext('2d');
  	}

	var toggle = document.getElementById('answer-toggle');
	if(toggle.checked){
		drawAnswer(context);
   	}else{
		clearAnswer(context);
   	}
}

function drawAnswer(context){

  	var centerX = Math.floor(canvas.clientWidth/2);
  	var firstY = 100;
  	var length = 200;
  	var lengthDiff = Math.floor(length/10);
  	var marginY = Math.floor((length/4) * 2);
  	context.strokeStyle = 'red';

  	context.beginPath();
  	context.moveTo(centerX-Math.floor(length/2), 50);
  	context.lineTo(centerX-Math.floor(length/2), 550);
  	context.stroke();

  	context.beginPath();
  	context.moveTo(centerX+Math.floor(length/2), 50);
  	context.lineTo(centerX+Math.floor(length/2), 550);
  	context.stroke();
}

function clearAnswer(context){
	context.clearRect(0,0,700,600);
}