
$(function(){
	$("#sProduct").click(function(){
		$("#sProduct").css({'background':'#ff8201','color':'white'});
		$("#sHelp").css({'background':'','color':'#81878c'});
		$(".searchText").attr({'placeholder':'无线上网卡'});
		
		});
		$("#sHelp").click(function(){
			$("#sHelp").css({'background':'#ff8201','color':'white'});
			$("#sProduct").css({'background':'','color':'#81878c'});
			$(".searchText").attr({'placeholder':''});
			});
		$("#eachPro a").click(function(){
			document.getElementById("provinceHTML").innerHTML=$(this).text();
		
		});
		$("#varyMoney font").click(function(){
			
			document.getElementById("chargeMoneyHTML").innerHTML=$(this).text();
		
		});
	});
function happyS(i){
	if(i==1){
		document.getElementById("loginPic1").style.display="block";
		document.getElementById("loginPic2").style.display="none";
		
		
		}
	if(i==2){
		document.getElementById("loginPic2").style.display="block";
		document.getElementById("loginPic1").style.display="none";
		
		}
	}
function changeColor(i){
	if(i==1){
		document.getElementById("cA1").style.color="#ff8201";
		document.getElementById("cA2").style.color="#81878c";
		
		}
	if(i==2){
		document.getElementById("cA2").style.color="#ff8201";
		document.getElementById("cA1").style.color="#81878c";
		}
	}