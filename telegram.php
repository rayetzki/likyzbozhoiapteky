<?php
 
$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "773786812:AAGJ7iyQ-rXgkGKvwDt-96NmtAT6yLAkCS4";
$chat_id = "-359220138";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  Location('<h1>Спасибо!</h1>');
} else {
  echo "Error";
}

?>