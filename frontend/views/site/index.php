<?php

/* @var $this yii\web\View */

$this->title = 'Gazda Portal';
?>
<div class="site-index">

    <div class="jumbotron">
        <h1>Портал компании Газда</h1>
        <p class="lead">
        <?php echo \yii\bootstrap\Carousel::widget ( [
            'items' => [
                [
                    'content' => '<img style="width:1000px;height:303px" src="/frontend/web/images/slide2.jpg"/>',
                    'caption' => '<h2></h2><p></p>',
                    'options' => [
//                        'data-interval'=>"200",
                    ],
//                    'clientOptions'=>[
//                        'autoplay'=>true,
//                        'interval'=>"50",
//                    ]

                ],
                [
                    'content' => '<img style="width:1000px;height:303px" src="/frontend/web/images/slide1.jpg"/>',
                    'caption' => '<h2>Газда окна</h2><p>Высокое качество по приемлемым ценам</p>',
                    'options' => [
//                        'data-interval'=>"200",
                    ],
//                    'clientOptions'=>[
//                        'autoplay'=>true,
//                       'interval'=>"50",
//                    ]

                ],
                [
                    'content' => '<img style="width:1000px;height:303px" src="/frontend/web/images/slide3.jpg"/>',
                    'caption' => '<h2>Газда окна</h2><p>Высокое качество по приемлемым ценам</p>',
                    'options' => [
//                        'data-interval'=>"200",
                    ],
//                    'clientOptions'=>[
//                        'autoplay'=>true,
//                        'interval'=>"50",
//                    ]

                ]
            ],
            'options' => [

                'style' => 'width:1000px;' , // Задаем ширину контейнера
            ],
            'clientOptions'=>[
                'autoplay'=>true,
                'interval'=>"2000",
            ]


        ]);?>
        </p>
<?=\yii\helpers\Html::a('Рассчет конструкции', ['/cabinet/index', ], ['class'=>'btn btn-lg btn-success']);?>

    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-4">
                <h2>О компании</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="index.php/site/about">О компании &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Форум</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://forum.gazda.ua">Газда форум &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Контакты</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="index.php/site/contact">Контакты &raquo;</a></p>
            </div>
        </div>

    </div>
</div>





