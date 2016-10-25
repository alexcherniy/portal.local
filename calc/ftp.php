<?php

/* Отправка заявки на ФТП. Я потом сам параметры настрою, для проверки работы можете вбить свой фтп или фтп сайта окна престиж*/
function ftpSend($image)
{
    $path2 = $_SERVER['DOCUMENT_ROOT'] . '/calc/canvas.png';
    file_put_contents($path2, base64_decode($_POST['data']));
    $picture2 = $path2;
    $filep = $picture2;

    $paths = "/";
//имя файла на сервере после того, как вы его загрузите
    $filename = $image;
    $ftp_server = "91.210.189.187";
    $ftp_user_name = "gazda.ftp.user";
    $ftp_user_pass = "Bmxfo*OG1KUKBh$";
    $conn_id = ftp_connect($ftp_server);

// входим при помощи логина и пароля
    $login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);

    ftp_pasv($conn_id, false);
// проверяем подключение
    if ((!$conn_id) || (!$login_result)) {
        echo "FTP connection has failed!";
        echo "Attempted to connect to $ftp_server for user: $ftp_user_name";
        //mail('oleksandr.hanhaliuk@gazda.ua', 'FTP Error', 'Error: Attempted to connect to'. $ftp_server.' for user: '.$ftp_user_name);
        exit;
    } else {
//echo "Connected to $ftp_server, for user: $ftp_user_name";
        //mail('oleksandr.hanhaliuk@gazda.ua', 'FTP Connect', 'Connected to'. $ftp_server.' for user: '.$ftp_user_name);
    }

// загружаем файл
    $upload = ftp_put($conn_id, '/' . $paths . '/' . $filename, $filep, FTP_BINARY);
// проверяем статус загрузки
    if (!$upload) {
        //echo "Error: FTP upload has failed!";
        mail('oleksandr.hanhaliuk@gazda.ua', 'FTP Error', 'Error: FTP upload has failed!'.$filename.'///'.$filep);
    } else {
// echo "Good: Uploaded $name to $ftp_server";
        //mail('oleksandr.hanhaliuk@gazda.ua', 'FTP Good', 'Good: Uploaded '.$filename.$filep.' to '.$ftp_server);
        ftp_close($conn_id);
    }
}