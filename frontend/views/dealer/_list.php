<div class="row">
    <div class="col-md-3"><p><?=$model->templateid?></p></div>
    <div class="col-md-3"><p><?=$model->name?></p></div>
    <div class="col-md-3"> <p><?php echo '<img src="data:image/jpeg;base64,'.base64_encode( $model->thumbs ).'"/>'; ?></p></div>
    <div class="col-md-3">
        <form class="form" >
            <label for="width">Ширина</label>
            <input type="number" max="10000" name="width">
            <label for="height">Высота</label>
            <input type="number" max="10000" name="height">
            <input type="hidden" value="<?=$model->templateid?>" name="templateid">
            <input type="submit" value="Отправить">
        </form>
    </div>


</div>