$(document).on('ready', function(e){
	$('nav').on('click', function(e){
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$(targetName).show();

	});

});



bower install --save-dev chai