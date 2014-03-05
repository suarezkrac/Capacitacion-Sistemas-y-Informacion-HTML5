
<?php
require 'PHPMailerAutoload.php';
$nombre_var = $_POST['nombrePHP'];
$correo_var = $_POST['correoPHP'];
$mensaje_var = $_POST['mensajePHP'];

$correo = "<p>El usuario ".$nombre_var." con correo electronico : ".$correo_var.", escribio el siguiente mensaje ".$mensaje_var."</p>";

$mail = new PHPMailer();
$mail->setFrom("giovanny.suarez@multimedialab.co", "Giovanny");
$mail->addAddress("giovanny.suarez@multimedialab.co", "Giovanny");
$mail->Subject = "Nuevo Contacto";
$mail->msgHTML($correo);
$mail->AltBody = "Nuevo Correo Contacto";
if (!$mail->send()) {
	echo "Error :".$mail->ErrorInfo;
}else {
	echo "Mensaje Enviado";
}

?>

