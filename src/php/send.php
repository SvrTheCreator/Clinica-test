<?php
$to = 'kingofnothing@bk.ru';
$from = 'Clinica@mail.ru';
$name = trim($_POST['name']);
$number = trim($_POST['number']);
$text = 'Тестовое';

$headers = "From: $from" . "\r\n".
"Reply-To: $from" . "\r\n".
"X-Mailer: PHP/" . phpversion();

if(mail($to,$number,$text,$headers)){
    echo 'Письмо отправлено';
}else{
    echo 'Письмо не доставлено';
}
?>