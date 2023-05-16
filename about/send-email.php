<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // получаем значения полей формы
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // формируем заголовки письма
    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";

    // отправляем письмо
    $success = mail("ya.nik137@yandex.ru", "Сообщение с сайта", $message, $headers);

    // выводим сообщение об успешной отправке или ошибке
    if ($success) {
        echo "<p>Сообщение отправлено! Мы свяжемся с вами в ближайшее время.</p>";
    } else {
        echo "<p>Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.</p>";
    }
}
?>