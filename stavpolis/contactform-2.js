jQuery(document).ready(function($) {

$(".ajax-contact-form-2").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "contact.php",
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