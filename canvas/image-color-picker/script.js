// JavaScript Document
var canvas;
var ctx;

var image=[
	'canvas1.jpg',
	'canvas2.jpg',
	'canvas3.jpg',
	'canvas4.jpg',
	'canvas5.jpg',
	'canvas6.jpg',
	'canvas7.jpg',
	'canvas8.jpg',
	'canvas9.jpg',
	'canvas10.jpg'
];
var iActiveImage=0;

$(function(){
	var image=new Image();
	image.onload=function(){
		ctx.drawImage(image,0,0,image.width,image.height);
		}
	image.src=images[iActiveImage];
	
	canvas=document.getElementById('panel');
	ctx=canvas.getContext('2d');

$('#panel').mousemove(function(e){
	var canvasoffSet=$(canvas).offset();
	var canvasX=Math.floor(e.pageX-canvasoffset.left);
	var canvasY=Math.floor(e.pageY-canvasoffset.top);
	var imageData=ctx.getImageData(canvasX,canvasY,1,1);
	var pixe1=imageData.data;

	$('#rVal').val(pixe1[0]);
	$('#gVal').val(pixe1[1]);
	$('#bVal').val(pixe1[2]);

	$('#rgbVal').val(pixe1[0]+','+pixe1[1]+','+pixe1[2]);
	$('#rgbaVal').val(pixe1[0]+','+pixe1[1]+','+pixe1[2]+','+pixe1[3]);
	var dColor=pixe1[2]+256*pixe1[1]+65536*pixe1[0];
	$('#hexVal').val('#'+dColor.toString(16));
});

$('#swImage').click(function(e){
	iActiveImage++;
	if(iActiveImage>=10)
		iActiveImage=0;
		image.src=image[iActiveImage];
});
});




