$(function(){
var showImg, nextImg ;
function fadeInOut(){
		
		showImg = $('#scall #sc1:eq(0)');
		nextImg = $('#scall #sc2:eq(1)');
		nextImg.addClass('first');
		nextImg.css('opacity','0').animate({'opacity':'1'},1000,
		function(){
		$('#scall').append(showImg);
		showImg.removeClass('first');});
	
	};
		
		var timer = setInterval('fadeInOut()','3000');
		
		$("div#scall").hover(
			function(){
				clearInterval(timer)
		},function(){
				timer = setInterval('fadeInOut()','2000');
				});
});
