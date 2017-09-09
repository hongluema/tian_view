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

//整个首页动态实现
$(document).ready(function(){
	
	//	附加搜索框的显示实现
	var newhotbrand_height = $('.content').offset().top;
	
//	alert(newhotbrand_height);
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop<newhotbrand_height){
//      	alert(this_scrollTop);
            $('.attachedSearchContainer').slideUp("slow");
        }else if(this_scrollTop>newhotbrand_height){
        	$('.attachedSearchContainer').slideDown("slow");
        }
    });
    
    var winWidth=$(window).width();
    $(window).resize(function(){
    	if(winWidth<992)
		$('.attachedSearchContainer').css({'dispaly':none});
	})	
	
	
//	导航条隐藏板块的展示
	$('.nav-item').hover(
		function(){
		$(this).children('div.nav-hd').slideDown();
		},
		function(){
		$(this).children('div.nav-hd').slideUp();
		}
	);
	
	//	直播预告栏的滚动
	var liTimer=setInterval(function(){
		if ($('.latest_news .news_item:first').css('marginTop')=='0px'){
			$('.latest_news .news_item:first').animate({ "marginTop": '-60px' }, 300);
		}else if ($('.latest_news .news_item:first').css('marginTop')=='-60px'){
			$('.latest_news .news_item:first').animate({ "marginTop": '0px' }, 300);
		}
	},2000);
		$('li.abs').hover(
//		鼠标在元素上的时候,各个元素分别移动位置的实现
		function(){
//			分别获取当前元素前后元素的集合
			var preArr = $(this).prevAll();
			var nextArr = $(this).nextAll();
//			当前元素的位置移动的实现
			var index = $('li.abs').index(this);
			var left = ((index * 227)- (index* 96.4))+ 'px';
			$(this).css("left",left);
//			前面元素的位置移动的实现
			preArr.each(function(){
				var index = $('li.abs').index(this);
				var left = ((index * 227) - (index * 96.4))+ 'px';
				$(this).css("left",left);
			});
//			后面元素的位置移动的实现
			nextArr.each(function(){
				var index = $('li.abs').index(this);
				var right = (((6 - index) * 96.4) + (index * 227))+ 'px';
				$(this).css("left",right);
			});
		},
//		鼠标离开时,各个元素的位置
		function(){
			$('li.abs').each(function(){
				var index = $('li.abs').index(this);
				$(this).css('left',(index * 227) + 'px');
			});
		}
	);
	
	
	
	
	
	
	
	
	
})
