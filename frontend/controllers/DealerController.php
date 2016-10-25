<?php
/**
 * Created by PhpStorm.
 * User: gazda
 * Date: 07.06.2016
 * Time: 15:21
 */
namespace frontend\controllers;

use app\models\CreateOrderByTemplate;
use app\models\Dealer;
use app\models\Templatestree;
use WebSocket\Client;
use Yii;
use yii\data\ArrayDataProvider;
use yii\db\Exception;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\data\ActiveDataProvider;

class DealerController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['Admin']
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
    public function actionProduct(){

        $model = Dealer::find()->all();


        return $this->render('product', [
            'model' => $model,
        ]);



    }
    public function actionCategory($parentid=false){

        if($parentid != false){
            $tree = Templatestree::find()->where(['parentid' =>$parentid])->all();
            $query = Dealer::find()->where(['parentid' =>$parentid])->all();
            $product = new ArrayDataProvider(
                [
                    'allModels' => $query,
                    'pagination' => [
                        'pageSize' => 10,
                    ],
                ]
            );
        }else{
            $tree = Templatestree::find()->where(['parentid' =>NULL])->all();
            $query = Dealer::find()->where(['parentid' =>NULL])->all();
            $product = new ArrayDataProvider(
                [
                    'allModels' => $query,
                    'pagination' => [
                        'pageSize' => 10,
                    ],
                ]
            );
        }

        return $this->render('category', [
            'model' => $tree,
            'product' => $product,
        ]);



    }




    public function actionSend(){
        $id = Yii::$app->request->post('templateid');
        $width = Yii::$app->request->post('width');
        $height = Yii::$app->request->post('height');

        if(!empty($id) && !empty($width) && !empty($height)){
            $order = CreateOrderByTemplate::createOrders($id, $width, $height);
            var_dump($order);
        }


    }

    public function actionTcpconnect(){
        $client = new Client("ws://192.168.201.60:8055");
        $client->send("Privet Sania");

        echo $client->receive(); // Will output 'Hello WebSocket.org!'

    }

}