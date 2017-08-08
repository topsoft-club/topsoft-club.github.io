window.onload = function(){
	setTimeout(function() { $('.page-loader-wrapper').fadeOut().remove(); }, 50);
}

$(document).ready( function(){
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  $.Admin.leftSideBar.activate();
});


$.Admin = {};

$.Admin.options = {
	leftSidebar: {
		hiddenSize: 640 // на каком разрешении скрывать меню
	},
}

$.Admin.leftSideBar = {
	activate: function() {
		var configs = $.Admin.options.leftSidebar;

		$(".menu-toggle").on("click", function(){
			if($("html body").hasClass("ls-closed")){
				$("html body").removeClass('ls-closed');
			}else{
				$("html body").addClass('ls-closed');
			}
		});

	$(window).resize(function() {
		if(document.documentElement.clientWidth < configs.hiddenSize) {
			$("html body").addClass('ls-closed');
		}else{
			$("html body").removeClass('ls-closed');
		}
	});


	}
}





