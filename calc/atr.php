<?php
/**
 * Created by PhpStorm.
 * User: gazda
 * Date: 24.03.2016
 * Time: 12:00
 */

        if(isset($_POST)){

            $one = $_POST['one'];

           $two = $_POST['two'];

           $three = $_POST['three'];

           $width = $_POST['width'];

           $height = $_POST['height'];

            foreach($two as $k){
                echo $k.'<hr>';

            }
            echo 'Ширина'.$width.'<hr>'.'Высота'.$height;



        }





