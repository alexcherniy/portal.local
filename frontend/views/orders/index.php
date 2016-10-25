<?php

use yii\helpers\Html;
use kartik\grid\GridView;
/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Заказы';
$this->params['breadcrumbs'][] = $this->title;
$script = <<< JS
$(document).ready(function() {
    setInterval(function(){ $("#refreshButton").click(); }, 1000);
});
JS;
$this->registerJs($script);
?>


<div class="orders-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Создать заказ в ручную', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <p>
        <?php

        $role = \Yii::$app->authManager->getPermissionsByUser(\Yii::$app->user->id);

        if (\Yii::$app->user->can('updatePost')) {
            echo '<pre>';
            var_dump($role);
            echo '</pre>';
        }

        if ($a == 0) {
            echo Html::a('Показать все заказы', ['orders/orders'], ['class' => 'btn btn-default']);
        } else {
            echo Html::a('Показать мои заказы', ['orders/index'], ['class' => 'btn btn-default']);
        }

        ?>
    </p>
    <?php
\yii\widgets\Pjax::begin([
    'timeout' => 10000,
    'enablePushState'=>false
]);
?>
    <?= \kartik\grid\GridView::widget([
        'dataProvider' => $dataProvider,
        'options' => ['id' => 'grid'],
        'responsive'=>true,
        'bootstrap'=>true,
        'hover'=>true,
        'pjax' => true,
        'pjaxSettings' =>[
            'neverTimeout'=>true,
            'options'=>[

            ]
        ],

        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn',

            /*'checkboxOptions' => function ($model, $key, $index, $column) {
                 return ['value' => $model->type,
                     ];
                                                                            }*/
            ],
            'id',
            'type',
            'typeopen1',
            'typeopen2',
            'typeopen3',
            'typeopen4',
//          'type6',
            'height',
            'width',
//          'width6',
            'amount',
//          'disassembly',
//          'profil',
//          'steklopaket',
//          'furnitura',
//          'podokonnik',
//          'otliv',
//          'kozirek',
//          'user_id',
            'created',

            ['class' => 'yii\grid\ActionColumn',

                'header'=>'Действия'
            ],
            [
                'class' => 'yii\grid\ActionColumn',
                'template' => ' {index}',
                'header'=>'Заказ',
                'buttons' => [

                    'index' => function ($url,$model,$key) {
                        return '<button  value="'.$model->id.'" id="right" class="btn btn-default ">Отправить</button>';
                    },
                ],
            ],
        ],
    ]); ?>

<?php echo Html::a('Обновить', ['orders/index'], ['class' => 'btn btn-info', 'id'=>'refreshButton']);?>

<!--<button id="one" class="btn btn-info">Отправить</button>-->

    <div class="results alert-success" style="margin-top: 20px"></div>

</div>
<?
 \yii\widgets\Pjax::end();
?>