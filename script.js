$(() => {

	$('.list-link').hover(function(e) {
		e.stopPropagation();
		$(this).stop().animate({backgroundColor: "rgb(60, 60, 60)", borderColor: "rgb(71, 195, 194)", borderWidth: "2px"}, 300, function() {});
	}, function(e) {
		e.stopPropagation();
		$(this).stop().animate({backgroundColor: "rgb(32, 32, 32)", borderColor: "rgb(15, 15, 15)", borderWidth: "1px"}, 300);
	});

	
	$('.tweet').hover(function(e) {
		e.stopPropagation();
    	$(this).children("#mov").stop().animate({ left: ($(this).width() - $(this).find("#mov").width())/2 }, 300, function() {
    		$(this).children("#tweet-icon").show();
    		$(this).children("#tweet-icon").animate({opacity: "1"}, 300);
    	});
	}, function(e) {
		e.stopPropagation();
		$(this).find("#tweet-icon").stop().animate({opacity: "0"}, 300, function() {
			$(this).hide();
			$(this).parent("#mov").stop().animate({ left:0 }, 300);
		});
	});

	$('.trending-item').hover(function(e) {
		e.stopPropagation();
		$(this).stop().animate({backgroundColor: "rgb(39, 104, 104)", borderColor: "rgb(71, 195, 194)"}, 300, function() {});
	}, function(e) {
		e.stopPropagation();
		$(this).stop().animate({backgroundColor: "rgb(17, 49, 49)", borderColor: "rgb(20, 20, 20)"}, 300, function() {});
	});

	$(".list-link").click(function(e) {
		$(".list-link").removeClass("active");
		$(this).addClass("active");
	});

	$("textarea").autogrow();
	$("textarea").maxlength();
	

});