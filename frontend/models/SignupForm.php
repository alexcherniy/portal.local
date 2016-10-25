<?php
namespace frontend\models;

use common\models\User;
use himiklab\yii2\recaptcha\ReCaptchaValidator;
use yii\base\Model;
use Yii;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $username;
    public $email;
    public $tel;
    public $password;
    public $verifyCode;
    public $reCaptcha;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['username', 'filter', 'filter' => 'trim'],
            ['username', 'required'],
            ['username', 'unique', 'targetClass' => '\common\models\User', 'message' => 'Это имя уже существует.'],
            ['username', 'string', 'min' => 2, 'max' => 255],

           // ['tel', 'filter', 'filter' => 'trim'],
            ['tel', 'required'],
            ['tel', 'match', 'pattern'=>'/^0[34569]\d{8}$/', 'message' => 'Номер телефона должен быть в формате 0991111111'],
            ['tel', 'unique', 'targetClass' => '\common\models\User', 'message' => 'Этот номер телефона уже существует.'],

            ['email', 'filter', 'filter' => 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            ['email', 'unique', 'targetClass' => '\common\models\User', 'message' => 'Этот email уже существует.'],

            ['password', 'required'],
            ['password', 'string', 'min' => 6],
            //['verifyCode', 'captcha'],
            [['reCaptcha'], ReCaptchaValidator::className(), 'secret' => '6LcESR0TAAAAANSSddL0w5FrFVvBHdqDAFcvG2OL']
        ];
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if (!$this->validate()) {
            return null;
        }

        $user = new User();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->tel = $this->tel;
        $user->status = 0;
        $user->setPassword($this->password);
        $user->generateAuthKey();
        $user->save(false);

        // нужно добавить следующие три строки:
//        $auth = Yii::$app->authManager;
//        $authorRole = $auth->getRole('author');
//        $auth->assign($authorRole, $user->getId());

        return $user;
        //return $user->save() ? $user : null;
    }
/*
    public function signup()
    {
        if ($this->validate()) {
            $user = new User();
            $user->username = $this->username;
            $user->email = $this->email;
            $user->setPassword($this->password);
            $user->generateAuthKey();
            $user->save(false);

            // the following three lines were added:
            $auth = Yii::$app->authManager;
            $authorRole = $auth->getRole('author');
            $auth->assign($authorRole, $user->getId());

            return $user;
        }

        return null;
    }*/

    public function attributeLabels()
    {
        return [
            'username' => 'имя',
            'password' => 'пароль',
            'email' => 'email',
            'tel' => 'Номер телефона',
             'verifyCode' => 'Каптча',
            'reCaptcha' => 'Каптча',

        ];



    }
}
