// JavaScript Document
function window_onload(){
	var canvas1=document.getElementById('canvas1');
	if(canvas1==null)
		return false;
	context=canvas1.getContext('2d');
	var image=new Image();
	image.src="p.jpg";
	image.onload=function(){
		context.drawImage(image,0,0);
		}
	canvas1.onmousemove=canvas1_onmouse_move;
	canvas1.onmouseout=canvas1_onmouse_out;
	}
function canvas1_onmouse_move(ev){
	var canvas1,canvas2;
	var x,y;
	var drawWidth,drawHeight;
	canvas1=document.getElementById("canvas1");
	canvas2=document.getElementById("canvas2");
	var context=canvas2.getContext('2d');
	canvas2.style.display="inline";
	context.clearRect(0,0,canvas2.width,canvas2.height);
	x=ev.pageX-canvas1.offsetLeft+2;
	y=ev.pageY-canvas2.offsetTop+2;
	canvas2.style.left=(ev.pageX+2)+"px";
	canvas2.style.top=(ev.pageY+2)+"px";
	var image=new Image();
	image.src="p.jpg";
	if(x+40>canvas1.width)
		drawWidth=canvas1.width-x;
	else
		drawWidth=40;
	if(y+40>canvas1.height)
		drawHeight=canvas.height-y;
	else
		drawHeight=40;
	context.drawImage(image,x,y,drawWidth*2,drawHeight*2);
	}
function canvas1_onmouse_out(){
	var cnavas2=document.getElementById("canvas2");
	canvas2.style.left="0px";
	canvas2.style.top="0px";
	canvas2.style.display="none";
	}
