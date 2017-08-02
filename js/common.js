window.onload = function(){
	setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);
}

$(function() {

});

$(document).ready( function(){
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  
  
  $(".menu-toggle").on("click", function(){
	
	if($("html body").hasClass("ls-closed")){
		$("html body").removeClass('ls-closed');
	}else{
		$("html body").addClass('ls-closed');
	}

  });

});


$.Admin = {};

$.Admin.options = {
	colors: {
		red: '#F44336',
	},
	leftSideBar: {
		scrollColor: 'rgba(0,0,0,0.5)',
		scrollWidth: '4px',
		scrollAlwaysVisible: true,
		scrollBorderRadius: '0',
		scrollRailBorderRadius: '0'
	},
	dropdownMenu: {
		effectIn: 'fadeIn',
		effectOut: 'fadeOut'
	}
}

$.Admin.leftSideBar = {

	
}