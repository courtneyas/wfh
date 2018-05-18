$(document).ready(function(){

	$('#friend-name').on('keyup', function(){
		var who = $('#friend-name').val();
		who = who.toLowerCase().trim();


		if(who === 'peyton') {
			$('body').css('background-image', 'url(./Peyton.png)')
		}
		else if(who === 'sean') {
			$('body').css('background-image', 'url(./sean.png)')
		}
		else if(who === 'woot') {
			$('body').css('background-image', 'url(./woot.png)')
		}
		else if(who === 'courtney') {
			$('body').css('background-image', 'url(./courtney.png)')
		} 
		else {
			$('body').css('background-image', 'url(./wfh.png)' )
		}
	});

});