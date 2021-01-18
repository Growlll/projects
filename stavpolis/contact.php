<?php

$post = (!empty($_POST)) ? true : false;

if($post) {
				$name = htmlspecialchars($_POST['name']); // Имя отправителя
				$tel = htmlspecialchars($_POST["tel"]);
				$error = '';

				if(!$name) {
					$error .= 'Пожалуйста введите ваше имя<br />';
				}

				if(!$tel) {
					$error .= "Пожалуйста введите ваш телефон<br />";
				}

				if(!$error) {

								$charset = 'utf-8'; // Кодировка письма
								$subject = "Новая заявка с сайта Счастливый случай"; // Тема письма
								$subject1 = "=?utf-8?b?" . base64_encode($subject) . "?=";
								/*
								$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
								*/
								$message1 = "\r\nИмя: " . $name . "\r\nТелефон: " . $tel;


								$headers  = "Content-type: text/html; charset=$charset \r\n";
								$headers .= "From: От кого письмо <vetal.morenko@mail.ru>\r\n";
								$headers .= "Reply-To: reply-to@example.com\r\n";

								$mail = mail("vetal.morenko@mail.ru", $subject1, $message1, $headers);

								if ($mail) {
												echo 'OK';
								}
				}	else {
								echo '<div class="notification_error">' . $error . '</div>';
				}
}
?>