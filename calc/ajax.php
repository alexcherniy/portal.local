<?php

require_once 'db.php';
//require_once 'ftp.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/err/errLog.php';
// Откликаться будет ТОЛЬКО на ajax запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

// Сниппет будет обрабатывать не один вид запросов, поэтому работать будем по запрашиваемому действию
// Если в массиве POST нет действия - выход
if (empty($_POST['action'])) {return;}

// А если есть - работаем
$res = '';
switch ($_POST['action']) {
    case 'save':
        $path = $_SERVER['DOCUMENT_ROOT'] .'/calc/canvas.png';
        file_put_contents($path, $_POST['data']);
        $url = $_SERVER['HTTP_REFERER'];
        $url2 = urldecode($url);
        $url3 = $_COOKIE['myFrom']; if (empty($url3)){$url3 = 'none';}

        debug_to_console( 'php cook:'.$url3 );

        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $picture = $path;
        if (isset ($_POST['email'])){
            $Email1 = $_POST['email'];
        }else{
            $Email1 = 'none';
        }
        $thm = ' калькулятор окон '.$name;

        $msg = "<b>Заявка на просчет<br>\n
			<b>Имя:</b> $name <br>\n
			<b>тел:</b> $tel <br>\n
			<b>url:</b> $url2 <br>\n
			<b>url источника:</b> $url3 <br>\n
			<b>Email:</b> $Email1 <br>\n";


        $msg_for_file = date("Y-m-d H:i:s").",$tel,Калькулятор,$name,$url2,$url3,$Email1\n";
        $path2 = $_SERVER['DOCUMENT_ROOT'] .'/calc/list.txt';
        $fp = fopen($path2, "a");
        fwrite($fp, $msg_for_file);
        fclose($fp);
        $mail_to = 'oleksandr.hanhaliuk@gazda.ua';
        mail($mail_to, $thm, $msg);

        if(empty($picture)) mail($mail_to, $thm, $msg);
        else {
             $mail_to = 'oleksandr.hanhaliuk@gazda.ua';
               send_mail($mail_to, $thm, $msg, $picture);//отправка заявки на мыло





     }

     if (isset ($_POST['timedate'])){
         $timedate = $_POST['timedate'];
     }else{
         $timedate = date('d-m-Y_H-i-s');
     }



//Добавление заявок в базу.
        $source = 'P_K';
        $datetime = date('d-m-Y H:i:s');
        $uniqid = uniqid();
        $department_id = 7110;
        $image = $timedate.'-'.'canvas.png';
        $phone = str_replace(" ", "", $tel);
        $phone = str_replace("(", "", $phone);
        $phone = str_replace(")", "", $phone);
        $phone = str_replace("-", "", $phone);
        $phone = substr($phone, -10);
        dbInsert($name, $phone, $Email1, $source, $datetime, $url, $url3, $uniqid, $department_id, $image );//Добавление заявок в базу
        //ftpSend($image); //отправка на фтп
        break;

    // А вот сюда потом добавлять новые методы

}

// Если у нас есть, что отдать на запрос - отдаем и прерываем работу парсера MODX
if (!empty($res)) {
    die($res);
}

//Функция отправки почты  - используется функция MailSmtp для отправки через смтп, для отправки стандартной mail заменить MailSmtp на mail
function send_mail($mail_to, $thema, $html, $path)
{ if ($path) {
    $fp = fopen($path,"rb");
    if (!$fp)
    { print "Cannot open file";
        exit();
    }
    $file = fread($fp, filesize($path));
    fclose($fp);
}
    $name = basename($path); // в этой переменной надо сформировать имя файла (без всякого пути)
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.
    $headers    = "MIME-Version: 1.0;$EOL";
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";
    $headers   .= "From: service.mail@gazda.ua";

    $multipart  = "--$boundary$EOL";
    $multipart .= "Content-Type: text/html; charset=utf-8$EOL";
    $multipart .= "Content-Transfer-Encoding: base64$EOL";
    $multipart .= $EOL; // раздел между заголовками и телом html-части
    $multipart .= chunk_split(base64_encode($html));
    $multipart .=  "$EOL--$boundary$EOL";
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";
    $multipart .= "Content-Transfer-Encoding: base64$EOL";
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла
    $multipart .= chunk_split($file);

    $multipart .= "$EOL--$boundary--$EOL";

    if(!mail($mail_to, $thema, $multipart, $headers))
    {return False;           //если не письмо не отправлено
    }
    else { //// если письмо отправлено
        return True;
    }
    exit;
}
function debug_to_console( $data ) {

    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

    echo $output;
}


// Обратите внимание, что в условиях нашей почтовой системы, имя пользователя требуется указывать полностью, например postmaster@domain.tld
function MailSmtp($to, $subject, $message, $headers)

{

    //global $mhSmtpMail_Server, $mhSmtpMail_Port, $mhSmtpMail_Username, $mhSmtpMail_Password;
    $mhSmtpMail_Server     = "";       // Укажите адрес SMTP-сервера
    $mhSmtpMail_Port       = "25";                    // Порт SMTP-сервера, как правило 25
    $mhSmtpMail_Username   = ""; // Имя почтового ящика (пользователя)
    $mhSmtpMail_Password   = "";              // и пароль к нему.
    $mhSmtpMail_From       = "ADMIN";       // Имя отправителя в поле From
    $mhSmtpMail_localhost  = "mail.gazda.ua";
    $mhSmtpMail_newline    = "\r\n";
    $mhSmtpMail_timeout    = "30";

    $smtpConnect = fsockopen($mhSmtpMail_Server, $mhSmtpMail_Port, $errno, $errstr, $mhSmtpMail_timeout);
    $smtpResponse = fgets($smtpConnect, 515);

    if(empty($smtpConnect))
    {
        $output = "Failed to connect: $smtpResponse";
        return $output;
    }
    else
    {
        $logArray['connection'] = "Connected: $smtpResponse";
    }

    fputs($smtpConnect, "HELO $mhSmtpMail_localhost" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['heloresponse'] = "$smtpResponse";

    fputs($smtpConnect,"AUTH LOGIN" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['authrequest'] = "$smtpResponse";

    fputs($smtpConnect, base64_encode($mhSmtpMail_Username) . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['authmhSmtpMail_username'] = "$smtpResponse";

    fputs($smtpConnect, base64_encode($mhSmtpMail_Password) . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['authmhSmtpMail_password'] = "$smtpResponse";

    fputs($smtpConnect, "MAIL FROM: $mhSmtpMail_Username" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['mailmhSmtpMail_fromresponse'] = "$smtpResponse";

    fputs($smtpConnect, "RCPT TO: $to" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['mailtoresponse'] = "$smtpResponse";

    fputs($smtpConnect, "DATA" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['data1response'] = "$smtpResponse";

    fputs($smtpConnect, "Subject: $subject\r\n$headers\r\n\r\n$message\r\n.\r\n");
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['data2response'] = "$smtpResponse";

    fputs($smtpConnect,"QUIT" . $mhSmtpMail_newline);
    $smtpResponse = fgets($smtpConnect, 515);
    $logArray['quitresponse'] = "$smtpResponse";

}

?>