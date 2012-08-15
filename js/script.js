// JavaScript Document
$(document).ready(function(){
	$('#act-lrgtype').toggle(function () {
				$('#act-lrgtype').html("Smaller type");
				$('#act-lrgtype').css({background: "url('../images/sprites.gif') 0px -435px no-repeat"});
				$('#article').css('font-size', '16px');
				}, function () {
				$('#act-lrgtype').html("Larger type");
				$('#act-lrgtype').css({background: "url('../images/sprites.gif') 0px -390px no-repeat"});
				$('#article').css('font-size', '14px');				
			});

		/*	$('#act-lrgtype a').html("Smaller type");
			$('#act-lrgtype').css({
						background: "url('../images/sprites.gif') 0px -435px no-repeat"
				});
			$('#article').toggleClass 
		*/
});