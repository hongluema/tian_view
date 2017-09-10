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


//angularJS的实现
var app = angular.module('register',[]);
	app.controller('reg-control',function($scope){
		$scope.trueName = '';
		$scope.txtPassword = "";
		$scope.txtConfirm = '';
		$scope.txtPhone = '';
		$scope.txtMail = '';
	});




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
	
	$('#submitBtn').click(function(){
		var params = {
			'txtUserName' : $('#txtUserName').val(),
			'txtPassword' : $('#txtPassword').val(),
			'txtPhone' : $('#txtPhone').val(),
			'txtMail' : $('#txtMail').val()
		};
		$.ajax({
			type:"post",
			url:"http://106.15.177.204/tianhao/register/",
			async:true,
			data: params,
			success: function(data){
				if(JSON.parse(data).status == 200){
					alert('恭喜你，注册成功！');
					window.location.href = '/tianhao/';
				}else{
					alert('抱歉注册失败，请重新提交！');
				}
			}
		});
	})
	
	
	
});