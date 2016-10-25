<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <!--[if lt IE 9]>
        <p style="color:red">Вы используете программу для скачивания браузеров. Пожалуйста скачайте браузер</p>
    <![endif]-->
</head>
<body>
<?php $this->beginBody() ?>
<div class="wrap">
    <noscript><p>Пожалуйста включите javascript в Вашем браузере</p></noscript>

    <?php
    NavBar::begin([
       'brandLabel' => '<img src="/frontend/web/images/gazda-logo-2008_0_0.png" class="img-responsive"/>',
       'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
    echo'<a id="callback" class="btn btn-success paulund_modal" href="#" data-toggle="modal" data-target="#myModal">Обратный звонок</a>';
    $menuItems = [
        ['label' => 'Главная', 'url' => ['/site/index']],
        ['label' => 'О компании', 'url' => ['/site/about']],
        ['label' => 'Контакты', 'url' => ['/site/contact']],
        ['label' => 'Кабинет', 'url' => ['/cabinet/index']],
        ['label' => 'Заказы', 'url' => ['/orders/index']],
    ];
    if (Yii::$app->user->isGuest) {
        $menuItems[] = ['label' => 'Регистрация', 'url' => ['/user-management/auth/registration']];
        $menuItems[] = ['label' => 'Вход', 'url' => ['/user-management/auth/login']];
    } else {
        $menuItems[] = '<li>'
            . Html::beginForm(['/user-management/auth/logout'], 'post')
            . Html::submitButton(
                'Выход (' . Yii::$app->user->identity->username . ')',
                ['class' => 'btn btn-link']
            )
            . Html::endForm()
            . '</li>';
    }
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => $menuItems,
    ]);

    NavBar::end();
    ?>

    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Обратный звонок</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="inputName3" class="col-sm-2 control-label">Имя</label>
                        <div class="col-sm-10">
                            <input type="name" class="form-control" id="inputName3" placeholder="Имя">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPhone3" class="col-sm-2 control-label">Телефон</label>
                        <div class="col-sm-10">
                            <input type="tel" class="form-control" id="inputPhone3" placeholder="Телефон">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-success">Отправить</button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>

            </div>
        </div>
    </div>
</div>



<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; Газда портал <?= date('Y') ?></p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
