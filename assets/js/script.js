jQuery(document).ready(function($) {
	/*
	|	header search popup
	*/
	$(".header-search-button").click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$("#header .header-search-popup").removeClass('active');
			$(".fa-times", $(this)).removeClass('fa-times').addClass('fa-search');
		} else {
			$(this).addClass('active');
			$(".fa-search", $(this)).removeClass('fa-search').addClass('fa-times');
			$("#header .header-search-popup").addClass('active');
		}
	})

	// Mobile menu
	$(".mobile-menu-button").on("click", function(event) {
		event.preventDefault();

		$('.mobile-menu-content').slideToggle("fast");
	});
});