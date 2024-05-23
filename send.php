<?php
$to = 'kingofnothing@bk.ru';
$name = trim($_POST['name']);
$number = trim($_POST['number']);
$text = 'Тестовое';

if(mail($to,$number,$text)){
    echo 'Письмо отправлено';
}else{
    echo 'Письмо не доставлено';
}
?>