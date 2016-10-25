<?php

namespace app\models;

use common\models\User;
use Yii;

/**
 * This is the model class for table "orders".
 *
 * @property integer $id
 * @property string $type
 * @property string $typeopen1
 * @property string $typeopen2
 * @property string $typeopen3
 * @property string $typeopen4
 * @property integer $type6
 * @property integer $height
 * @property integer $width
 * @property integer $width6
 * @property integer $amount
 * @property string $disassembly
 * @property string $profil
 * @property string $steklopaket
 * @property string $furnitura
 * @property string $podokonnik
 * @property string $otliv
 * @property string $kozirek
 * @property integer $user_id
 * @property string $username
 * @property string $created
 */
class Orders extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'orders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type6', 'height', 'width', 'width6', 'amount', 'user_id'], 'integer'],
            [['type'], 'required'],
            [['created'], 'safe'],
            [['type', 'typeopen1', 'typeopen2', 'typeopen3', 'typeopen4', 'profil', 'steklopaket', 'furnitura', 'podokonnik', 'otliv', 'kozirek', 'username'], 'string', 'max' => 155],
            [['disassembly'], 'string', 'max' => 2]
        ];
    }

    /**
     * @inheritdoc
     */

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type' => 'Тип окна',
            'typeopen1' => 'Тип 1 рамы',
            'typeopen2' => 'Тип 2 рамы',
            'typeopen3' => 'Тип 3 рамы',
            'typeopen4' => 'Тип 4 рамы',
            'type6' => 'Тип 6',
            'height' => 'Высота',
            'width' => 'Ширина',
            'width6' => 'Ширина 6',
            'amount' => 'Количество',
            'disassembly' => 'Демонтаж',
            'profil' => 'Профиль',
            'steklopaket' => 'Стеклопакет',
            'furnitura' => 'Фурнитура',
            'podokonnik' => 'Подоконник',
            'otliv' => 'Отлив',
            'kozirek' => 'Козырек',
            'user_id' => 'User ID',
            'username' => 'Имя пользователя',
            'created' => 'Создано',
        ];



    }
    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {

            if ($this->isNewRecord) {
                $this->created = date('Y-m-d H:i:s');
            }

            return true;
        }
        return false;
    }
    public function getUser()
    {
        return $this->hasMany(User::className(), ['user_id' => 'id']);
    }


}
