$(window).on('scroll',function(){
	if ($(window).scrollTop()){
		$('nav').addClass('white');
		$('.searchNav').addClass('searchSticky');
	}
	else
	{
		$('nav').removeClass('white');
		$('.searchNav').removeClass('searchSticky');
	}
	
	
})

