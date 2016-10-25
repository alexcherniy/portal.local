<?php
namespace common\models;

use himiklab\yii2\recaptcha\ReCaptchaValidator;
use Yii;
use yii\base\Model;

/**
 * Login form
 */
class LoginForm extends Model
{
    public $username;
    public $password;
    public $code;
    public $tel;
    public $rememberMe = true;
    public $reCaptcha;
    private $_user;



    /**
     * @inheritdoc
     */


    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios['login'] = ['username', 'password','code' ];
        $scenarios['send'] = ['username', 'password', 'reCaptcha'];

        return $scenarios;
    }


    public function rules()
    {
        return [
            // username and password are both required
            [['username', 'password', /*'reCaptcha'*/], 'required', 'on'=>'send'],
            [['username', 'password', /*'code'*/], 'required', 'on'=>'login'],
            ['code', 'integer'],
            [['username','password'], 'string'],
            [ ['password'],'filter','filter'=>'trim'],
            // rememberMe must be a boolean value
            ['rememberMe', 'boolean'],
            // password is validated by validatePassword()
            ['password', 'validatePassword'],
            ['code', 'validateCode'],
//            [['reCaptcha'], ReCaptchaValidator::className(), 'secret' => '6LcESR0TAAAAANSSddL0w5FrFVvBHdqDAFcvG2OL', 'on'=>'send']

        ];

    }


    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = $this->getUser();
            if (!$user || !$user->validatePassword($this->password)) {
                $this->addError($attribute, 'Неправильный логин или пароль.');
            }
        }
    }
    public function validateCode($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = $this->getUser();
            $sql = \common\models\User::findByUsername($user->username);
            if(empty($this->code) or empty($sql->code)){
                $this->addError($attribute, 'Неправильный код подтверждения');
            }elseif(!$user || !Yii::$app->getSecurity()->validatePassword($this->code, $sql->code)) {
                $this->addError($attribute, 'Неправильный код подтверждения');
            }
        }
    }

    /**
     * Logs in a user using the provided username and password.
     *
     * @return boolean whether the user is logged in successfully
     */
    public function login()
    {
        if ($this->validate()) {

            return Yii::$app->user->login($this->getUser(), $this->rememberMe ? 3600 * 24 * 30 : 3600);}
         else {
            return false;
        }
    }

    /**
     * Finds user by [[username]]
     *
     * @return User|null
     */
    protected function getUser()
    {
        if ($this->_user === null) {
            $this->_user = User::findByUsername($this->username);
        }

        return $this->_user;
    }
    public function attributeLabels()
    {
        return [
            'username' => 'имя',
            'password' => 'пароль',
            'rememberMe' => 'запомнить меня',
            'code' => 'Код подтверждения',
            'verifyCode' => 'Каптча',
            'reCaptcha' => 'Каптча',


        ];



    }
}
