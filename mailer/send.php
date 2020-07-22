<?php 
require_once "SendMailSmtpClass.php"; // подключаем класс


$mailSMTP = new SendMailSmtpClass('wiraby7@gmail.com', 'hlgajhasgdkhkjlasdghk', 'ssl://smtp.gmail.com', 465, "utf-8");
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'порт', 'кодировка письма');

$messenger = $_POST['messenger'];
$phone = $_POST['user_phone'];
$massege = $_POST['user_time'];

  $from = array(
    "заявка Дом камня", // Имя отправителя
    "huntronicsrus@gmail.com" // почта отправителя
  );
// кому
//jlkfa
$to = 'vasilyuk.12@mail.ru';

// отправляем письмо
  $result =  $mailSMTP->send($to, 'Заявка сайт', 'Мессенджер:' . $messenger. '<br>Номер:' . $phone . '<br>Время:' . $massege, $from); 
  // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');
 
  if($result){
    echo 'ok';
  }else{
      echo 'Error';
  }

?>