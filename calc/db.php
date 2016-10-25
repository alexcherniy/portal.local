<?php

function transliterate($input)
{
    return strtr($input, array('а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ь' => '', 'ы' => 'y', 'ъ' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya', 'ї' => 'yi', 'і' => 'i', 'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D', 'Е' => 'E', 'Ё' => 'E', 'Ж' => 'ZH', 'З' => 'Z', 'И' => 'I', 'Й' => 'Y', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N', 'О' => 'O', 'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T', 'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C', 'Ч' => 'CH', 'Ш' => 'SH', 'Щ' => 'SCH', 'Ь' => '', 'Ы' => 'Y', 'Ъ' => '', 'Э' => 'E', 'Ю' => 'YU', 'Я' => 'YA'));
}


function dbInsert($name, $phone, $email, $source,$datetime, $url, $url3, $uniqid, $department_id, $image )
{




    $name = transliterate($name);
    $user_db = 'u_gazda_oktell2';
    $pass_db = 'KCm8ObWY';
    $host = 'vps14db.mirohost.net';

    try {
        $db = new PDO('mysql:host=' . $host . ';dbname=gazda_test', $user_db, $pass_db);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->exec('SET CHARACTER SET utf8');
        $stmt = $db->prepare("INSERT INTO gazda_copy (name, phone, email, istochnik, timedate, url, url3, uniqid, department_id, image)
                            VALUES (:name, :phone, :email, :istochnik, :timedate, :url, :url3, :uniqid, :department_id, :image)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':istochnik', $source);
        $stmt->bindParam(':timedate', $datetime);
        $stmt->bindParam(':url', $url);
        $stmt->bindParam(':url3', $url3);
        $stmt->bindParam(':uniqid', $uniqid);
        $stmt->bindParam(':department_id', $department_id);
        $stmt->bindParam(':image', $image);
        $stmt->execute();
        // $mail_to = "oleksandr.hanhaliuk@gazda.ua";
        // mail($mail_to, 'Email is not empty', 'GOOD'.'<br>'.$email.'<br>'.'this');


    } catch (PDOException $e) {

        $mail_to = "oleksandr.hanhaliuk@gazda.ua";
        mail($mail_to, 'Gazda fail: ' . $url . $source, $url . $source . $e->getMessage());
    }
}


?>