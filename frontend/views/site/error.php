<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<div class="site-error">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="alert alert-danger">
        <?= nl2br(Html::encode($message)) ?>
    </div>

    <p>
        Страница которую Вы запрашиваете не найдена.
    </p>
    <p>
       Пожалуйста обратитесь к <a href="mailto:oleksandr.hanhaliuk@gazda.ua">Администратору</a> сайта.
    </p>

</div>
