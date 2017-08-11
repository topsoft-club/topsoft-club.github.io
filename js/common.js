window.onload = function(){
	setTimeout(function() { $('.page-loader-wrapper').fadeOut().remove(); }, 50);
}

$(document).ready( function(){
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
		hiddenSize: 960 // на каком разрешении скрывать меню
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
		if(document.documentElement.clientWidth <= configs.hiddenSize) {
			$("html body").addClass('ls-closed');
		}else{
			$("html body").removeClass('ls-closed');
		}
	});


	}
}





