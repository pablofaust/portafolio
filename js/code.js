$(function() {

	var slide = new silderClass($(".slide"), $(".chevrons"));
	
	slide.intervalo = setInterval(function () { 
		slide.fade(true, slide.imgGal);
	}, 5000);
	slide.imgGal.click(function() {
		slide.fade(true,slide.imgGal);
		clearInterval(slide.intervalo);
	});
	slide.flechas.click(function() {
		if($(this).is(".chevron-right")) {
			slide.fade(true,slide.imgGal);
			clearInterval(slide.intervalo);
		} else {
			slide.fade(false,slide.imgGal);
			clearInterval(slide.intervalo);
		}
	});

});

var silderClass = function(imgGal, flechas) {
	this.imgGal = imgGal;
	this.flechas = flechas;
	this.imgGal.eq(0).fadeIn(600);
	this.iInt = 1;
	this.fade = function(next,img) {
		if (img.length > 1 ) { 
			if (next) {cond1 = this.iInt; cond2 = img.length; } else {cond1 = 1; cond2 = this.iInt; };
			if (cond1 < cond2) {
				img.fadeOut(600);
				if (next) {this.iInt++; } else { this.iInt-- }
				img.eq(this.iInt - 1).fadeIn(600);
			} else {
				img.fadeOut(600);
				if (next) {this.iInt = 1 } else { this.iInt =  img.length };
				img.eq(this.iInt-1).fadeIn(600);
			}
		}
		this.iIntAct = this.iInt - 1;
	}
	this.fadeAuto = function(iInti,img) {
		if(this.iIntAct != iInti) {
			img.fadeOut(600);
			img.eq(iInti).fadeIn(600);
			this.iIntAct = iInti;
			this.iInt = iInti+1;
		}
	};
}