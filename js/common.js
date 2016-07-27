$(document).ready(function(){

	//анимация стрелки
	$(".strelka").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = ($(id).offset().top - 59);
		top2 = ($(id).offset().top - 59);
		
		//анимируем переход на расстояние - top за 700 мс
		if ($(window).width() < 767) {
			$('body,html').animate({scrollTop: top2}, 700);
		} else {
			$('body,html').animate({scrollTop: top}, 700);
		}
		
	});
	//Magnific Popup
	$(".photo_img").magnificPopup({
		type: "image", 
		removalDelay: 1000, 
		mainClass: 'mfp-fade'
	});

//планый переход по сылке
	$("#mainNav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = ($(id).offset().top - 59);
		top2 = ($(id).offset().top - 284);
		
		//анимируем переход на расстояние - top за 700 мс
		if ($(window).width() < 767) {
			$('body,html').animate({scrollTop: top2}, 700);
		} else {
			$('body,html').animate({scrollTop: top}, 700);
		}
		
	});


	//топ бар фиксед
	$(window).scroll(function() {
		if (($(".top_bar.fixeded").length > 0)) { 
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("nav").addClass("fixed-header-on");
			} else {
				$("nav").removeClass("fixed-header-on");
			}
		};
	});

	//Ресайз
	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	

//preloader
var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){el.style.opacity = 1;
	var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);
		hellopreloader.style.display = "none";}},16);}
	window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},800);};

	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

	});

});