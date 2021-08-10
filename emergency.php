<?php

$email = $_POST['email'];
$teleph = $_POST['telefono'];
$txt = $_POST['texto'];

$from = $email;
$subject = 'Emergencia animal';
$message = 'Tengo una emergencia, comunicate conmigo, 
Correo: $email,
Telefono: $teleph,
Texto: $txt';

$header = 'From: Emergency <email>'.'\r\n';
$header .= 'Reply-To: email'.'\r\n';
$header .= 'Content-Type: text/plain; charset = utf-8'.'\r\n';
$header .= 'X-Mailer: PHP/'.phpversion();
mail($email, $subject, $message, $header);

echo '<h2>Email enviado con exito</h2>';

?>