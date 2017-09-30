// JavaScript Document
$(function(){
	$(".pukerBoxImg").hover(function(){
		var str="";
		var id=$(this).attr("id");
		switch(id){
			case "pukerFont1":str="提速降费";break;
			case "pukerFont2":str="三星Galaxy| 4S";break;
			case "pukerFont3":str="电视宽带三年4.4折  ￥2300";break;
			case "pukerFont4":str="电视宽带两年五折 ￥1800";break;
			case "pukerFont5":str="真宽带新电视 ￥每天低至两块钱";break;
			case "pukerFont6":str="100M光钎";break;
			case "pukerFont7":str="高清ITV";break;
			case "pukerFont8":str="送路由";break;
			case "pukerFont9":str="iPhone6S  ￥玫瑰金";break;
			case "pukerFont10":str="20M宽带0元享";break;
			}
		
		$(this).stop().animate({'width':'120px','height':'120px','top':'-50px'},500);
		$("#pukerInfo").text(str);
		},function(){
			$(this).stop().animate({'width':'90px','height':'90px','top':'0px'},300);
			$("#pukerInfo").text("");
			});
		
	})