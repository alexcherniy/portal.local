<?php
return [

    'name'=>'Газда Портал',
    'language'=> 'ru',
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'modules' => [
        'gridview' =>  [
            'class' => '\kartik\grid\Module',

        ]
    ],
    'components' => [

        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
];
