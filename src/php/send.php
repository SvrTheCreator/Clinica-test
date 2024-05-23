<?php

$name = $_POST['name'];
$number = $_POST['number'];
$name = htmlspecialchars($name);
$number = htmlspecialchars($number);
$name = urldecode($name);
$number = urldecode($number);
$name = trim($name);
$number = trim($number);

mail("kingofnothing@bk.ru", "Тестовое задание", "Имя:" . $name . ". Номер: " . $number, "From: kingofnothing@bk.ru \r\n");
