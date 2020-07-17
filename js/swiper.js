var swiper = new Swiper(".global-promotion", {
	slidesPerView: 1.12,
	slidesOffsetAfter: .115 * document.body.clientWidth,
	watchSlidesProgress: !0,
	on: {
		touchMove: function() {
			deg = 180 * this.progress;
			this.$el.parents(".global").find(".global-circle").transform("rotate(-" + deg + "deg)")
		},
		setTransition: function(a) {
			deg = 180 * this.progress;
			this.$el.parents(".global").find(".global-circle").transition(a).transform("rotate(-" + deg + "deg) translate3d(0, 0, 0)")
		}
	}
});