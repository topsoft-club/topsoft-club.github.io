$(function() {






	 

	$.Admin.leftSideBar.activate();
	$.Admin.slider.activate();
});


$.Admin = {};
$.Admin.options = {
	leftSidebar: {
		hiddenSize: 992
	},
}

$.Admin.slider = {
	activate: function() {

		$('.slider-home').slider({
			height: 340,
			transition: 340,
			interval: 500000
		});
		
		$(".slider-home .controllBtn.prev").on("click", function(){
			$('.slider-home').slider('prev');
		});
		$(".slider-home .controllBtn.next").on("click", function(){
			$('.slider-home').slider('next');
		});



	}
}


$.Admin.leftSideBar = {
	activate: function() {
		var configs = $.Admin.options.leftSidebar;

		$('.button-collapse').sideNav({
			menuWidth: 90, // Default is 300
			edge: 'left', // Choose the horizontal origin
			closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true, // Choose whether you can drag to open on touch screens,
			onOpen: function(el) {
			}, // Функция, вызываемая при открытии sideNav
			onClose: function(el) {
			}, // Функция, вызываемая при закрытии sideNav
		});



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