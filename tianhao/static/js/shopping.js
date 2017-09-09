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
		//document.body.style.width=bodyWidth;  
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


//	附加搜索框的显示实现
	var newhotbrand_height = $('.module').offset().top;
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop<newhotbrand_height ){
            $('.attachedSearchContainer').slideUp("slow");
        }else if(this_scrollTop>newhotbrand_height){
        	 $('.attachedSearchContainer').slideDown("slow");
        }
    });	
	
	
	

//	选项卡的实现
	function tab(navId,divClass){		
	$(navId+'>li:not(.tabTitle)').click(function(){
			var index=$(navId+'>li:not(.tabTitle)').index($(this));
			$(this).addClass('selected').siblings().removeClass('selected');
			$(divClass).eq(index).show().addClass('selected_content_pane').siblings().hide().removeClass('selected_content_pane');
	});
	}
	tab('#online_purchase_nav','.online_purchase_content_pane');	
	
	
////	商品列表中鼠标移到图片上图片放大并跟随图片移动的实现
	var size=2.5*$('.selected_content_pane a').width(); 
	var winWidth=$(window).width();
	if(winWidth>1200){
		size=1.5*$('.selected_content_pane a').width(); 
	}else if(winWidth<920){
		size=0.8*$('.selected_content_pane a').width();
	}
	$(window).resize(function(){
		winWidth=$(window).width();
		if(winWidth>1200){
			size=1.5*$('.selected_content_pane a').width(); 
		}else if(winWidth<920){
			size=0.8*$('.selected_content_pane a').width();
		}		
	});
	$(".selected_content_pane a").mouseover(function(event) { 
		var $target=$(event.target); 
		if($target.is('img')) {
			if (event.clientX <674.5){
				$("<img id='tip' src='"+$target.attr("src")+"'>").css({
				'position':'fixed',
				"height":size, 
				"width":size, 
				"top":'30px', 
				"left":'100px', 
				'z-index':'9999'
				}).appendTo($(".selected_content_pane")); 
			}else{
				$("<img id='tip' src='"+$target.attr("src")+"'>").css({
				'position':'fixed',
				"height":size, 
				"width":size, 
				"top":'30px', 
				"right":'100px', 
				'z-index':'9999'
			}).appendTo($(".selected_content_pane"));
			}		
		} 
	}).mousemove(function(event) {
		if(event.clientX <674.5){
			$("#tip").css( 
				{ 
					"left":event.clientX+40, 
					"top":'30px'
				}); 
		}else{
			$("#tip").css( 
				{ 
					"right":1349-event.clientX+40, 
					"top":'30px'
				});
		}
	}).mouseout(function() { 
		$("#tip").remove(); 
	}); 	
	
	
	
	
	
	
	
	
})
