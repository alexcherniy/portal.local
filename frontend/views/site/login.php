<?php
/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Вход';
$this->params['breadcrumbs'][] = $this->title;

?>
<div class="site-login">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>Please fill out the following fields to login:</p>

    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

                <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>

                <?= $form->field($model, 'password')->passwordInput() ?>

                <?= $form->field($model, 'rememberMe')->checkbox() ?>

            <?= $form->field($model, 'code')->passwordInput() ?>

            <?= $form->field($model, 'reCaptcha')->widget(
                \himiklab\yii2\recaptcha\ReCaptcha::className(),

                [
                    'name' => 'reCaptcha',
                    'siteKey' => '6LcESR0TAAAAAPT-KR5LqFpSbTakk_ni4MfG8n1w']
            ) ?>

            <div style="color:#999;margin:1em 0">
                Если вы забыли пароль вы можете <?= Html::a('сбросить его', ['site/request-password-reset']) ?>.
            </div>

            <div class="form-group">
                <?= Html::submitButton('Вход', ['class' => 'btn btn-primary', 'name' => 'login-button', 'id'=>'form1', 'style'=>'display:none' ]) ?>

            </div>



            <?php ActiveForm::end(); ?>
            <button class="btn btn-success" id="send">Отправить код подтверждения</button>
        </div>
    </div>
</div>
<script>
    $( document ).ready(function() {
        $('label[for="loginform-code"]').css('display', 'none');
        $('#loginform-code').css('display', 'none');
    });
    $('#send').click(function(){
        var  name = $('#loginform-username').val();
        var  pass = $('#loginform-password').val();
        var captcha = $('#loginform-recaptcha').val();

        jQuery.ajax({
            url: "send",
            type: 'POST',
            data: {
                'name': name,
                'pass': pass,
                'captcha':captcha

            },
            success: function(data){

                if(data != 0) {
                    $('#send').css('display', 'none');
                    $('#loginform-code').css('display', 'inline');
                    $('label[for="loginform-code"]').css('display', 'inline');
                    $('#form1').css('display', 'inline');
                    $(".field-loginform-code p").html('На Ваш номер: +380'+data+' будет отправлен код подтверждения');
                }else{
                    $(".field-loginform-password p").html("Неправильный логин/пароль или каптча");
                    $(".field-loginform-username").addClass('has-error');
                    $(".field-loginform-password").addClass('has-error');
                    $(".field-loginform-username").addClass('has-error');



                }
            }

        });
    });



</script>
