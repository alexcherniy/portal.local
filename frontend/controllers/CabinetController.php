<?php

namespace frontend\controllers;

use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class CabinetController extends \yii\web\Controller
{

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index', 'create', 'update', 'view'],
                'rules' => [

                    [
                        'actions' => ['index', 'create', 'update', 'view'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],



        ];
    }
    public function actionIndex()
    {
        return $this->render('index');
    }
    public function actionForm()
    {
        if(isset($_POST['keys'])) {
            $arr = $_POST['keys'];
            foreach ($arr as $one) {
                $two = $one;
                print_r($two);
            }
        }elseif(isset($_POST['keys2']))
        {
            print_r($_POST['keys2']);
        }else{
            print_r(0);
        }


            // you will have the array of pk ids to process in $keys
            // perform batch action on these keys and return status
            // back to ajax call above




    }

}
