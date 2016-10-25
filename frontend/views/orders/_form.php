<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;

/* @var $this yii\web\View */
/* @var $model app\models\Orders */
/* @var $form yii\widgets\ActiveForm */

?>

<div class="orders-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= \yii\helpers\HtmlPurifier::process($form->field($model, 'type')->textInput()) ?>

    <?= ($form->field($model, 'typeopen1')->textInput()) ?>

    <?= $form->field($model, 'typeopen2')->textInput() ?>

    <?= $form->field($model, 'typeopen3')->textInput() ?>

    <?= $form->field($model, 'typeopen4')->textInput() ?>

    <?= $form->field($model, 'type6')->textInput() ?>

    <?= $form->field($model, 'height')->textInput() ?>

    <?= $form->field($model, 'width')->textInput() ?>

    <?= $form->field($model, 'width6')->textInput() ?>

    <?= $form->field($model, 'amount')->textInput() ?>

    <?php //*/= $form->field($model, 'disassembly')->textInput() */?>

    <?= $form->field($model, 'profil')->textInput() ?>

    <?= $form->field($model, 'steklopaket')->textInput() ?>

    <?= $form->field($model, 'furnitura')->textInput() ?>

    <?= $form->field($model, 'podokonnik')->textInput() ?>

    <?= $form->field($model, 'otliv')->textInput() ?>

    <?= $form->field($model, 'kozirek')->textInput() ?>

    <?= $form->field($model, 'user_id')->textInput() ?>



    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Изменить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
<script>


</script>

<hr>



