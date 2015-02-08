$(document).ready(function(){

// UP button

	$(function() {
	 
		$(window).scroll(function() {		 
			if($(this).scrollTop() != 0) {	

				// если значение отступа scrolltop не равно 0 - кнопка появись

				$('.toTop').stop(true,true).fadeIn();			 
			} else {

				// если значение отступа scrolltop 0 (страница только открыта) - кнопка уберись

				$('.toTop').stop(true,true).fadeOut();			 
			}		 
		});

			// по нажатию на кнопку с эффектом анимации scroplltop плавно переходит в значение 0

			$('.toTop').click(function() {			 
			$('body,html').animate({scrollTop:0},800);
		});
	 
	});


// placeholders

	// имя

	$('.sidebar__form-name').focus(function(){
		$(this).attr("placeholder","");
	});
	$('.sidebar__form-name').blur(function(){
		$(this).attr("placeholder","Сергей");
	});

	// телефон

	$('.sidebar__form-tel').focus(function(){
		$(this).attr("placeholder","");
	});
	$('.sidebar__form-tel').blur(function(){
		$(this).attr("placeholder","+7 (913) 525 2745");
	});

	// комментарий

	$('.sidebar__form-comment').focus(function(){
		$(this).attr("placeholder","");
	});
	$('.sidebar__form-comment').blur(function(){
		$(this).attr("placeholder","Комментарий");
	});


 
});

