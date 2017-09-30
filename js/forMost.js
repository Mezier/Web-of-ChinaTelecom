// JavaScript Document
function moveImg(i,idName){
	if(i=='left'){
		$("#"+idName).stop().animate({'left':'-20px'},1000);
		}else if(i=='right'){
		$("#"+idName).stop().animate({'left':'0px'},1000);	
			}
	
	}
function moveImg2(i,idName){
	if(i=='left'){
		$("#"+idName).stop().animate({'left':'0px'},1000);
		}else if(i=='right'){
		$("#"+idName).stop().animate({'left':'20px'},1000);	
			}
	
	}
function showPro(){
	if(document.getElementById("pInfo").style.overflow=='hidden'){
	document.getElementById("pInfo").style.overflow="visible";
	}else{
		document.getElementById("pInfo").style.overflow="hidden";
		}
}