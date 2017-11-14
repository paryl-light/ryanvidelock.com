// MOBILE MENU TRIGGER
$(window).on('load', function() {
	$(window).on('resize', function( ){
		skillHeight( );
	});
	reName();
	skillHeight( );
	/*$(document).alton({
		firstClass: 'hero',
		scrollMode: 'headerScroll',
		bodyContainer: 'main-content', // Tell Alton the body class
	});*/
});
function reName(){
	if(window.location.hostname.match(/alyssa/)){
		$('.hsContent').replace(/Ryan/, "Alyssa");
		document.title = document.title.replace(/Ryan/, "Alyssa");
	}
}
function skillHeight( ){
	var newHeight;
	$('.skill').each(function( ){
		var skill = $(this);
		var skillDesc = skill.children('.skill-description');
		skill.off('mouseenter').on('mouseenter', function( ){
			var newHeight = skillDesc.children('span').outerHeight(true);
			skillDesc.height(newHeight);
			skill.siblings().removeClass('active-skill');
			skill.addClass('active-skill');
		});
		skill.off('mouseleave').on('mouseleave', function( ){
			skillDesc.height(0);
			skill.removeClass('active-skill');
		});
	})
}