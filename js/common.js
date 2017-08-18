window.onload = function(){
	setTimeout(function() { $('.page-loader-wrapper').fadeOut().remove(); }, 50);
}

$(document).ready( function(){
	$('.button-collapse').sideNav({
			menuWidth: 90, // Default is 300
			edge: 'left', // Choose the horizontal origin
			closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true, // Choose whether you can drag to open on touch screens,
			onOpen: function(el) {
			}, // Функция, вызываемая при открытии sideNav
			onClose: function(el) {
			}, // Функция, вызываемая при закрытии sideNav
		}
	);

	$('ul#content-tabs').tabs();



	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".tab_item").not(":first").hide();
	$(".wrapperTabs .tab").click(function() {
		$(".wrapperTabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$.Admin.leftSideBar.activate();
});


$.Admin = {};
$.Admin.options = {
	leftSidebar: {
		hiddenSize: 992
	},
}

$.Admin.leftSideBar = {
	activate: function() {
		var configs = $.Admin.options.leftSidebar;

		$(".menu-toggle").on("click", function(){
			if(document.documentElement.clientWidth <= configs.hiddenSize) {
				$("html body").removeClass('ls-closed');
				$('.button-collapse').sideNav('show'); 
				return false;
			}else{
				if($("html body").hasClass("ls-closed")){
					$("html body").removeClass('ls-closed');
				}else{
					$("html body").addClass('ls-closed');
				}
			}
		});

		$(window).resize(function() {
			if(document.documentElement.clientWidth <= configs.hiddenSize) {
				//$('.button-collapse').sideNav('hide'); 
			}else{
				$("html body").removeClass('ls-closed');
			}
		});

	}
}






