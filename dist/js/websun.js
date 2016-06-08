$(document).ready(function($){
	// Global variable

	// Global event

	$(".disabled").click(function(event){
		event.stopPropagation().preventDefault();
		//alert(">>");
	});

	// Sticky header
	$(document).scroll(function(){
		var navScrollTop=$(document).scrollTop();
		if (navScrollTop > 100){
			if(!($("#nav-wrapper").hasClass("navbar-fixed-top"))) {
				$("#nav-wrapper").addClass("navbar-fixed-top");
			}
		}
		else {
			$("#nav-wrapper").removeClass("navbar-fixed-top");
		}
	}); 
	// Sticky header end

	// Image fade: add image fade effect on images
	// Usage：add class "imgad-toggle" to images, add class "imgad" to span, put span elements under images

	$(".imgad-toggle").mouseover(function (){
		$(this).children("img").css("opacity",".5");
		var adSpan= $(this).parent().find("span.imgad");
		var imgadTop=($(this).height() - adSpan.height())/2;
		var imgadLeft=($(this).width() - adSpan.width())/2;
		adSpan.css({"top":imgadTop+"px","left":imgadLeft+"px"}).stop().fadeTo("slow",.7);
	})
	.mouseleave (function (){
		$(this).css("opacity","1");
		$(this).parent().find("span.imgad").stop().fadeOut("slow");

	}); 
	// image fade end

	// Live chat
	var leftBox=$("#wsc-chat .chat__leftbox");
	var fadeDoing=false;
	var chatBox=window.setTimeout(function(){
		$("#wsc-chat").animate({top: "180px"}).animate({top: "200px"});
	},500);
	chatBox=null;

	$("#wsc-chat").hover(function(){
		if (!fadeDoing) {
		$("#wsc-chat").stop().animate({right : "0"});
			fadeDoing=true;
			leftBox.fadeOut(function(){
				fadeDoing=false;
			});
		}
	},
	function(){
		if (!fadeDoing) {
			fadeDoing=true;
		$("#wsc-chat").stop().animate({right : "-122px"});
		leftBox.fadeIn(function(){
			fadeDoing=false;
		});
		}
	});
	// Live chat end 

	// Setting banner control position
	$("#carousel-banner .carousel-control").css("top",($("#carousel-banner").height()- $("#carousel-banner .carousel-control > span").height())/2)
	
	// Banner animatin

	var captionLeft=$("#banner2 .carousel-caption--left");
	var captionRight=$("#banner2 .carousel-caption--right");
	//banner2Hide();// 默认隐藏

	 // banner 1
	 banner1Animation();
     $("#carousel-banner").on('slid.bs.carousel',function(){
     	if ($("#banner1").hasClass("active")){
     		//banner2Hide(); //隐藏banner2，以便下次动画
     		banner1Animation();
     	}
		if ($("#banner2").hasClass("active")){
     		banner1Hide(); // 隐藏banner1，以便下次动画 
     		banner2Animation();
     	}     
     }).carousel({ interval: 7000 });

    function banner1Animation() {

	$("#banner1 .carousel-caption").css("top","50px").children().css("display","none").parent() // parent找回banner .carosel-caption
		.children("h4").css({"font-size":"2em","margin-left":"50px"}).fadeIn(200).animate({"font-size":"1.2em","margin-left":"0"},function(){
			$("#banner1 .carousel-caption>h2").css({"font-size":"3em","margin-left":"50px"}).fadeIn(200).animate({"font-size":"2em","margin-left":"0"},function(){
				$("#banner1 .carousel-caption>h2+p").css({"font-size":"2em","margin-left":"50px"}).fadeIn(200).animate({"font-size":"1.5em","margin-left":"0"},function(){	
					$("#banner1 .carousel-caption").animate({"left":"10%"},500).children().fadeIn();	
				});
			});
		});
	}
 
	function banner2Animation() {
	captionLeft.animate({"top":"0",left:"5%"},200);
	//captionRight.animate({"top":"0",left:"90%"},"slow");

	//.parent().children(".carousel-caption--left").fadeIn(5000);
	}

	function banner1Hide() {
		$("#banner1 .carousel-caption").children().css("display","none");
	}

	function banner2Hide() {
		$("#banner2").children().css("bottom","-610px");
	}
	// banner end

	// nav
	//var menuWidth=$("#nav-wrapper .dropdown-menu").width(); 158px;
	$("#nav-wrapper .dropdown-menu").each(function() {
		if ($(this).hasClass("menu2")) {
			$(this).css({"left":"158px","z-index":"999"});
		}
	});


}); 
//Document end

