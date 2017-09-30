

$(function(){
	$("#curtain").slideDown(2000).delay(1000).slideUp(2000,function(){
		$("#adv").css({'display':"block"});
		});
	$("#closeAdv").click(function(){
		$("#curtainadv").css({'display':"none"});
		
		//$("#curtain").css({'display':"none"});
		
		});
		
	$("#rocketImg").click(function(){
		$("#rocketImg").attr({'src':'img/gotoTop2.png'});
		$("#rocket").stop().animate({'top':0},2000,function(){
			$("#rocketImg").attr({'src':'img/gotoTop1.png'});
			$("#rocket").css({'top':'500px'}).hide();
			});
			$("body").animate({'scrollTop':0},1000);
		});
	});  
$(document).scroll(function(){
	if($(document).scrollTop()>100){
		$("#rocket").fadeIn();
		}else{
			$("#rocket").fadeOut();
			}
	
	});