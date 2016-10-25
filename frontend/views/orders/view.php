<?php

use yii\helpers\Html;
use kartik\detail\DetailView;
/* @var $this yii\web\View */
/* @var $model app\models\Orders */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Заказы', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Вы уверены, что хотите удалить этот заказ?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= \kartik\detail\DetailView::widget([
        'model' => $model,
        'condensed'=>true,
        'hover'=>true,
        'bootstrap'=>true,
        'responsive'=>true,
        'mode'=>DetailView::MODE_VIEW,
        'panel'=>[
            'heading'=>'Заказ № ' . $model->id,
            'type'=>DetailView::TYPE_INFO,
        ],
       'deleteOptions'=>[
         'url'=>'delete?id='.$model->id,
       ],

        /*'deleteOptions'=>[ // your ajax delete parameters
            'params' => ['id' => $model->id, 'custom_param' => true],
        ],*/
        'container' => ['id'=>'kv-demo'],


        'attributes' => [
            'id',
            'type',
            'typeopen1',
            'typeopen2',
            'typeopen3',
            'typeopen4',
            'type6',
            'height',
            'width',
            'width6',
            'amount',
            //'disassembly',
            'profil',
            'steklopaket',
            'furnitura',
            'podokonnik',
            'otliv',
            'kozirek',
            'user_id',
            'created',

        ],
    ]) ?>

</div>
