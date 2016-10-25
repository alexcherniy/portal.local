<?php
/**
 * Created by PhpStorm.
 * User: web
 * Date: 20.10.16
 * Time: 16:54
 */

namespace app\models;


class CreateOrderByTemplate extends  \yii\db\ActiveRecord
{


    public function rules()
{

}

    public static function getDb()
{
    return Yii::$app->db2;
}



    public static function createOrders($id, $width, $height){
    $db = \Yii::$app->db2;
    $sql1 = 'select orderid_output from create_order_by_template('.$id.', '.$width.','.$height.',263384)';
    $transaction=$db->beginTransaction();
    try
    {
        $one = $db->createCommand($sql1)->queryAll();
        $transaction->commit();
        return $one;
    }
    catch(Exception $e) // в случае возникновения ошибки при выполнении одного из запросов выбрасывается исключение
    {
        $transaction->rollback();
        throw $e;
    }
}

}