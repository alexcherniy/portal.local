<?php
namespace frontend\controllers;

use common\models\User;
use Yii;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\ForbiddenHttpException;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * @inheritdoc
     */

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['login','logout', 'signup', 'contact', 'about'  ],
                'rules' => [
                    [
                        'actions' => ['login','signup', 'test'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['contact', 'logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                    [
                        'actions' => ['about'],
                        'allow' => true,
                        'roles' => ['admin'],
                    ],

                ],



            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
//        if (!\Yii::$app->user->can('order')) {
//            throw new ForbiddenHttpException('Access denied');
//        }
            return $this->render('index');

    }

    /**
     * Logs in a user.
     *
     * @return mixed
     */
    public function actionSend(){
        if(!empty($_POST['name'])) {
            $user = User::findByUsername($_POST['name']);
            $model = new LoginForm(['scenario' => 'send']);

            $model->username = $_POST['name'];
            $model->password = $_POST['pass'];
            $model->reCaptcha = $_POST['captcha'];
            if (!$model->validate()) {
                echo 0;
            }else{
                $key = substr ( mt_rand(), 0, 6);
                $hash = Yii::$app->getSecurity()->generatePasswordHash($key);
//                $this->sendSMS($user, $key);
//                $this->sendEmail($user->email, $key);
                $user->code = $hash;
                $user->update();
                echo $user->tel;
            }

        }else{
            echo 0;
        }
    }
    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm(['scenario' => 'login']);
        if ($model->load(Yii::$app->request->post()) && $model->login())
            {
                $user = User::findOne(Yii::$app->user->id);
                $user->code = '';
                $user->update();
                return $this->goBack();
            }

        else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {

        $user = User::findOne(Yii::$app->user->id);
        $user->code = '';
        $user->update();
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Спасибо за обращение. Мы свяжемся с Вами как можно скорее.');
            } else {
                Yii::$app->session->setFlash('error', 'Ошибка отправки сообщения.');
            }

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Displays about page.
     *
     * @return mixed

     */
    public function actionAbout()
    {

            return $this->render('about');


    }

    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($user = $model->signup()) {
              //  if (Yii::$app->getUser()->login($user)) {
                    return $this->redirect('login');
               // }
            }
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Проверьте свой емейл');

                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Извините, для этого адреса невозможно сбросить пароль.');
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    public function sendEmail($email, $body)
    {
        return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom([Yii::$app->params['adminEmail'] => 'admin'])
            ->setSubject('Gazda')
            ->setTextBody($body)
            ->send();
    }

    public function sendSMS($user, $key)
    {
        $client = new \SoapClient('http://turbosms.in.ua/api/wsdl.html');
        // Данные авторизации
        $auth = Array (
            'login' => '',
            'password' => ''
        );
        // Авторизируемся на сервере
        $result = $client->Auth ($auth);
        // Текст сообщения ОБЯЗАТЕЛЬНО отправлять в кодировке UTF-8
        $text = iconv ('windows-1251', 'utf-8', $key);
        // Данные для отправки
        $sms = Array (
            'sender' => 'GAZDA',
            'destination' => '+380'.$user->tel,
            'text' => $text
        );
        // Отправляем сообщение на один номер.
        // Подпись отправителя может содержать английские буквы и цифры. Максимальная длина - 11 символов.
        // Номер указывается в полном формате, включая плюс и код страны
        $result = $client->SendSMS ($sms);
    }

    /**
     * Resets password.
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidParamException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'Новый пароль сохранен.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    public function actionTest()
    {
        return $this->render('test');
    }

}
