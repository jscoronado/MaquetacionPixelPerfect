/**
 * JS Sensovant
 */
(function ($) {
	$(document).ready(function () {

		/* # Tab Section
		-------------------------------------------------------------- */
		$('ul li.item-tab').click(function(){
			$('ul li.item-tab').removeClass('active');
			$(this).addClass('active');
			var tabID = $(this).data('tab');

			$('.tab-secondary article.active').removeClass('active');
	        $('.' + tabID).addClass('active');
	        setTimeout(function() {      
		    	$('#' + tabID).addClass('active');
		   	}, 200)
		});

		/* # Menú Responsive
		-------------------------------------------------------------- */
		$('.mobile-responsive').click(function(){
		    $(this).toggleClass('open');
		});
	});

})(jQuery);