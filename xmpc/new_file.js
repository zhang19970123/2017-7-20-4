var swiper=new Swiper('.swiper-container',{
				autoplay:1000,
				loop:true,
				autoplayDisableOnInteraction:false,
				pagination:".swiper-pagination",
				prevButton:".swiper-button-prev",
				nextButton:".swiper-button-next"
			})


$(".shop-empty").hide()
$(".shop").hover(function() {
	$(".shop-empty").stop().slideToggle()
})


$(".phone-show,.phone-show>ul").hide()
$(".tou>li").hover(function() {
	$(this).find(".phone-show,.phone-show ul").stop().toggle()
})

