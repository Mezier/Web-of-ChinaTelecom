
function charge(a){
	for(var i=1;i<5;i++){
			 if(i==a){
			 $("#c"+i).css({'color':'#ff8300'});
			 $("#loginInfo"+i).css({'display':'block'});
			 }else{
				  $("#c"+i).css({'color':'#81878c'});
				  $("#loginInfo"+i).css({'display':'none'});
				 }
		 }
	}
function refreshNotice(){
	document.getElementById("nRight").innerHTML=document.getElementById("nLeft").innerHTML;
	document.getElementById("loginScroll").scrollLeft++;
	if(document.getElementById("loginScroll").scrollLeft==950){
		document.getElementById("loginScroll").scrollLeft=0;
		}
	}
var noticeTimmer=setInterval("refreshNotice()",20)