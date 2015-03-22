$(function() {

	if($(".slide").html()) {
		// descomentar para hacer un solo slider
		var slideUnico = new silderClass($(".slide") /*, arrows */);
	} else {
		// descomentar para hacer un solo slider
		var arrows = $(".chevrons div");
		var slideUnico = new silderClass($(".slide"), arrows);
	}

	slideUnico.intervalo = setInterval(function () { 
		slideUnico.fade(true, slideUnico.imgGal);
	}, 5000);
	slideUnico.imgGal.click(function() {
		slideUnico.fade(true,slideUnico.imgGal);
		clearInterval(slideUnico.intervalo);
	});
	slideUnico.punto_slide.click(function() {
		slideUnico.fadeAuto($(this).attr("count"), slideUnico.imgGal);
		clearInterval(slideUnico.intervalo);
	});
	if($(".slide").html()) {
		slideUnico.flechas.click(function() {
			if($(this).is(".chevron-right")) {
				slideUnico.fade(true,slideUnico.imgGal);
				clearInterval(slideUnico.intervalo);
			} else {
				slideUnico.fade(false,slideUnico.imgGal);
				clearInterval(slideUnico.intervalo);
			}
		});
	}

});



// var silderClass = function(imgGal, punto_slide, flechas) {
// 	this.imgGal = imgGal;
// 	this.punto_slide = punto_slide;
// 	this.flechas = flechas;
// 	this.imgGal.eq(0).fadeIn(600);
// 	this.punto_slide.eq(0).addClass("act");
// 	this.iInt = 1;
// 	this.fade = function(next,img) {
// 		if (img.length > 1 ) { 
// 			if (next) {cond1 = this.iInt; cond2 = img.length; } else {cond1 = 1; cond2 = this.iInt; };
// 			if (cond1 < cond2) {
// 				img.fadeOut(600);
// 				if (next) {this.iInt++; } else { this.iInt-- }
// 				img.eq(this.iInt - 1).fadeIn(600);
// 			} else {
// 				img.fadeOut(600);
// 				if (next) {this.iInt = 1 } else { this.iInt =  img.length };
// 				img.eq(this.iInt-1).fadeIn(600);
// 			}
// 		}
// 		this.iIntAct = this.iInt - 1;
// 		this.punto_slide.removeClass("act");
// 		this.punto_slide.eq(this.iIntAct).addClass("act");
// 	}
// 	this.fadeAuto = function(iInti,img) {
// 		if(this.iIntAct != iInti) {
// 			img.fadeOut(600);
// 			img.eq(iInti).fadeIn(600);
// 			this.iIntAct = iInti;
// 			this.iInt = iInti+1;
// 			this.punto_slide.removeClass("act");
// 			this.punto_slide.eq(iInti).addClass("act");
// 		}
// 	};
// }