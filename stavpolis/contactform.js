jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: str,
		success: function(msg) {
			if(msg == 'OK') {
				result = '<p>Мы получили вашу заявку, ожидайте звонка!</p>';
				$(".fields").hide();
			} else {
				result = msg;
			}
			$('.note').html(result);
		}
		});
	return false;
	});
});