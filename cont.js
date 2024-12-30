$(document).ready(function() {
	$(".card-toggle").on("click", function() {
		if($(this).closest('.card').hasClass('active')) {
			return;
		}
		
		var isAnimating = false;
		
		if(!isAnimating) {
			isAnimating = true;
			
			// Remove active state from all toggles and cards
			$(".card-toggle").removeClass("active");
			$(this).addClass("active");
			
			$(".card").removeClass("active");
			
			// Set z-index for proper layering
			$(".card").find(".card-content").css("z-index", 0);
			$(this).siblings().css("z-index", 1);
			
			// Add active class to current card with slight delay for animation
			var currentCard = $(this).closest('.card');
			setTimeout(function() {
				currentCard.addClass("active");
				currentCard.find(".card-content").one("transitionend", function() {
					isAnimating = false;
				});
			}, 10);
		}
	});
});