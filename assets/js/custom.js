
(function($) {

	$('#schedule').find(".talk").popover({
		placement: "auto right",
		html: true,
		content: function() { // Fetch the abstract and return it
			var abstract_div = $(this).parents('.schedule-item').find('.talk-abstract');
			return abstract_div.html();
		}
	})


})(jQuery);