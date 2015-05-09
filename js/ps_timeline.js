jQuery(document).ready(function($){

	$('#ps_panel tr:even').addClass('alt');

	$('#ps_panel tr.ps_file').addClass('show_file');
	$('#ps_panel tr.ps_sql').addClass('show_sql');
	$('#ps_panel tr.ps_hook').addClass('show_hook');
	$('#ps_panel tr.ps_hook_do').addClass('show_hook_do');
	$('#ps_panel tr.ps_hook_pass').addClass('show_hook_pass');
	$('#ps_panel tr.ps_slow').addClass('show_slow');

	$("#wp-admin-bar-prime-timeline > a").click(function(e) {
		e.preventDefault();
		$("#ps_wrap").toggle();
	});

	$("#ps_all a").on("click", function() {
		$("tr.ps_file").addClass("show_file");
		$("tr.ps_sql").addClass("show_sql");
		$("tr.ps_hook").addClass("show_hook");
		$("tr.ps_hook_do").addClass("show_hook_do");
		$("tr.ps_hook_pass").addClass("show_hook_pass");
		$("tr.ps_slow").addClass("show_slow");
		$("#ps_file a, #ps_sql a, #ps_hook a, #ps_hook_do a, #ps_hook_pass a, #ps_slow a").addClass("button-primary");
	 });

	$("#ps_file a").on("click", function() {
		$("tr.ps_file").toggleClass("show_file");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });

	$("#ps_sql a").on("click", function() {
		$("tr.ps_sql").toggleClass("show_sql");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });

	$("#ps_hook a").on("click", function() {
		$("tr.ps_hook").toggleClass("show_hook");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });

	$("#ps_hook_do a").on("click", function() {
		$("tr.ps_hook_do").toggleClass("show_hook_do");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });

	$("#ps_hook_pass a").on("click", function() {
		$("tr.ps_hook_pass").toggleClass("show_hook_pass");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });

	$("#ps_slow a").on("click", function() {
		$("tr.ps_slow").toggleClass("show_slow");
		$(this).toggleClass("button-primary");
		$(this).toggleClass("button-secondary");
	 });
});

/*
jQuery(document).ready(function() {

	function menu_main(elm) {
		var id = jQuery(elm).parent().parent().attr('id');
		var cls = jQuery(elm).parent().attr('class');

		if (id == 'ps_slow') {
			search_slow();
		}

		if (cls == 'ps_hide') {
			jQuery('.' + id).hide();
		} else if (cls == 'ps_show') {
			jQuery('.' + id).show();
		} else {
			if (id == 'ps_all') {
				jQuery("#ps_panel tr").show();
			} else {
				jQuery("#ps_panel tr").hide();
				jQuery('#ps_tr_head').show();
				jQuery('.' + id).show();
			}
		}
	}

	function search_slow() {
		var msec = parseFloat ( jQuery('#ps_slow_search').val() );
		if ( ! jQuery.isNumeric(msec)) {
			msec = 10;
		}
		jQuery('#ps_panel tr').removeClass('ps_slow');
		jQuery('#ps_panel td.ps_time').each(function(){
			if ( jQuery(this).html() >= msec ) {
				jQuery(this).parent().addClass('ps_slow');
			}
		});
	}

	jQuery("#wp-admin-bar-prime-timeline > a").click(function(e) {
		e.preventDefault();
		jQuery("#ps_wrap").toggle();
	});

	var target = [ 'ps_all', 'ps_file', 'ps_sql', 'ps_hook', 'ps_hook_do', 'ps_hook_pass', 'ps_slow' ];

	for (var i=0;	i<target.length; i++) {
		jQuery('#' + target[i] + ' > li > a').click(function(e) {
			e.preventDefault();
			menu_main(this);
		});
	}


});
*/
