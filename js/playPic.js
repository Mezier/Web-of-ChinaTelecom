
// JavaScript Document
var Imgindex=0;
function playImg(){
	for(var a=0;a<7;a++){		
		  if(Imgindex==a){
			  $("#Img"+a).css({'background':'#0F0'});
			  $("#playImg"+a).fadeIn(1000).delay(1500);
			  
			  }else{
				  $("#Img"+a).css({'background':'#ff8300'});
				  $("#playImg"+a).hide();
				   
				  }
			}
			Imgindex++;
			if(Imgindex>6){
				Imgindex=0;
				}
			
	
	}
function clickIcon(i){
	clearInterval(t2);
	Imgindex=i;
	
	var t3=setTimeout("playImg()",100);
	t2=setInterval("playImg()",3000);
	}
var t2=setInterval("playImg()",3000);