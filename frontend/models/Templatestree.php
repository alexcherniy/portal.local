<?php
/**
 * Created by PhpStorm.
 * User: web
 * Date: 20.10.16
 * Time: 16:03
 */

namespace app\models;
use Yii;


class Templatestree extends \yii\db\ActiveRecord
{
        public static function tableName()
    {
        return 'templatestree';
    }
    public static function getDb()
    {
        return Yii::$app->db2;
    }


}