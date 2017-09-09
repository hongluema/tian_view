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
	
//	
//	$('#btnSubmit').submit(function(){
//		console.log('1');
//		$.ajax({
//			url: $("#regform").attr("url"),
//			type: 'POST',
//			data: params,
//			contentType: 'application/x-www-form-urlencoded',
//		 	beforeSend: showRequest,
//			success: showResponse,
//			error: showError
//		});
//
//
//
//	    //表单提交前
//	    function showRequest(formData, jqForm, options) {
//			$("#btnSubmit").val("正在提交...")
//	        $("#btnSubmit").prop("disabled", true);
//	       
//	    }
//	    //表单提交后
//	    function showResponse(data, textStatus) {
//	        if (data.status == 1) { //成功
//	            console.log({ title: '提示', content: '恭喜您，已经注册成功！', okValue: '确定', ok: function () { location.href = data.url; } }).showModal();
//	//			var d = dialog({content:data.msg}).show();
//	//			setTimeout(function () {
//	//				d.close().remove();
//	//				location.href = data.url;
//	//			}, 2000);
//	        } else { //失败
//	            console.log({title:'提示', content:data.msg, okValue:'确定', ok:function (){}}).showModal();
//	            $("#btnSubmit").val("再次提交");
//	            $("#btnSubmit").prop("disabled", false);
//	        }
//	    }
//	    //表单提交出错
//	    function showError(XMLHttpRequest, textStatus, errorThrown) {
//	        console.log({title:'提示', content:"状态：" + textStatus + "；出错提示：" + errorThrown, okValue:'确定', ok:function (){}}).showModal();
//	        $("#btnSubmit").val("再次提交");
//	        $("#btnSubmit").prop("disabled", false);
//	       
//	    }
//	    return false;
//	});
//	
	
	
	
});