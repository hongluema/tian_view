//	解决窗口缩放导致页面排版错乱
function setBodyWidth(){  
	var barWidthHelper=document.createElement('div');  
	barWidthHelper.style.cssText="overflow:scroll; width:100px; height:100px;";  
	document.body.appendChild(barWidthHelper);  
	var barWidth=barWidthHelper.offsetWidth-barWidthHelper.clientWidth;  
	document.body.removeChild(barWidthHelper);  
	var bodyWidth=window.screen.availWidth-barWidth;  
	return bodyWidth;  
}  
$(document).ready(  
	function(){
		var bodyWidth=setBodyWidth()+"px"; 
		$("body").css("width",bodyWidth);  
	}  
); 

$(document).ready(function(){
	
	//	导航条隐藏板块的展示
	$('.nav-item').hover(
		function(){
		$(this).children('div.nav-hd').slideDown();
		},
		function(){
		$(this).children('div.nav-hd').slideUp();
		}
	);
	
	
	
//	登录请求的实现
	$('#btnSubmit').click(function(){
		var params = {
			'txtUserName' : $('#txtUserName').val(),
			'txtPassword' : $('#txtPassword').val()
		};
		$.ajax({
			type:"post",
			url:"http://106.15.177.204/tianhao/login/",
			async:true,
			data : params,
			success: function(data){
				if (JSON.parse(data).status == 200) {
					window.location.href = '/tianhao/';
				}else{
					$('#errorMsg').removeClass('hide');
				}
			}
		});
	});
	
});