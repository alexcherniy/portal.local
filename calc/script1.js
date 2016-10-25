//

function MaskK() {
    jQuery("#phon1").mask('+38(999)999-99-99');
}

jQuery(function () {
    Win3();

});


function mousem(e) {

    document.getElementById("W1").setAttribute("style", "background-color:#ebeff1;");
    document.getElementById("W2").setAttribute("style", "background-color:#ebeff1;");
    document.getElementById("W3").setAttribute("style", "background-color:#ebeff1;");
    document.getElementById("W4").setAttribute("style", "background-color:#ebeff1;");
    document.getElementById("W5").setAttribute("style", "background-color:#ebeff1;");
    document.getElementById("W6").setAttribute("style", "background-color:#ebeff1;");

    document.getElementById(e.id).setAttribute("style", "background-color:#8bc43f;");

    if (e.id == "W1") {
        Win1()
    }

    if (e.id == "W2") {
        Win2()
    }

    if (e.id == "W3") {
        Win3()
    }

    if (e.id == "W4") {
        Win4()
    }

    if (e.id == "W5") {
        Win5()
    }

    if (e.id == "W6") {
        Win6()
    }

}

function Win1() {
    document.getElementById("id_MF").innerHTML = "<div class='BW1' id='id_bw'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN1' onclick='cwin(this)' id='id_bw1'></div>";

    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:210px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">1800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">485</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');
    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/

    /*=======================Горизонтальная линейка======================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:240px; height:10px; width:201px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:95px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:170px;">1200</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">485</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:85px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');
    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;

            }
        });
    });
    /*=======================Конец горизонтальной линейки================================================================*/

    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw1");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin(ec)"></div><span id="TSTV1">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/

}

function Win2() {
    document.getElementById("id_MF").innerHTML = "<div class='BW2' id='id_bw'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN5' onclick='cwin(this)' id='id_bw1'></div><div class='BWIN1' onclick='cwin(this)' id='id_bw2'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:120px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">1800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {


        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;

            }
        });
    });

    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка======================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:200px; height:10px; width:301px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:155px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:270px;">2000</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">800</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:145px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');
    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;

            }
        });
    });
    /*=======================Конец горизонтальной линейки================================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw1");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin(ec)"></div><span id="TSTV1">глухое</span><div class="AR" onclick="cwin(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw2");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin(ec2)"></div><span id="TSTV2">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/


}


function Win3() {

    document.getElementById("id_MF").innerHTML = "<div class='BW3' id='id_bw'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN5' onclick='cwin(this)' id='id_bw1'></div><div class='BWIN1' onclick='cwin(this)' id='id_bw2'></div><div class='BWIN5' onclick='cwin(this)' id='id_bw3'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:50px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">2700</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка======================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:120px; height:10px; width:461px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:225px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:430px;">3000</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">1500</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:215px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;
            }
        });
    });
    /*=======================Конец горизонтальной линейки================================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw1");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;  "><div class="AL" onclick="Ccwin(ec)"></div><span id="TSTV1">глухое</span><div class="AR" onclick="cwin(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw2");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin(ec2)"></div><span id="TSTV2">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/
    /*=======================Переключатель типа створки=333============================================================*/
    ec3 = document.getElementById("id_bw3");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per3"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin(ec3)"></div><span id="TSTV3">глухое</span><div class="AR" onclick="cwin(ec3)"></div></div>');
    /*=======================Конец переключателя типа створки=333======================================================*/
}

function Win4() {
    document.getElementById("id_MF").innerHTML = "<div class='BW4' id='id_bw'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN1_1' onclick='cwin2(this)' id='id_bw1_1'></div><div class='BWIN1_3' onclick='cwin2(this)' id='id_bw1_2'></div><div class='BWIN2_2' onclick='cwin3(this)' id='id_bw1_3'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:130px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">2200</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">1000</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка======================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:200px; height:10px; width:301px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:155px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:270px;">2000</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">800</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:145px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;
            }
        });
    });

    /*=======================Конец горизонтальной линейки================================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw1_1");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin2(ec)"></div><span id="TSTV1">поворотно-<br />откидное</br>левое</span><div class="AR" onclick="cwin2(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw1_2");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin2(ec2)"></div><span id="TSTV2">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin2(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/
}

function Win5() {
    document.getElementById("id_MF").innerHTML = "<div class='BW5' id='id_bw'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN5' onclick='cwin(this)' id='id_bw1'></div><div class='BWIN3' onclick='cwin(this)' id='id_bw2'></div><div class='BWIN1' onclick='cwin(this)' id='id_bw3'></div><div class='BWIN5' onclick='cwin(this)' id='id_bw4'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:50px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">2700</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">1000</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка======================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:35px; height:10px; width:621px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:305px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:590px;">3900</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">2200</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:295px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;
            }
        });
    });

    /*=======================Конец горизонтальной линейки================================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw1");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin(ec)"></div><span id="TSTV1">глухое</span><div class="AR" onclick="cwin(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw2");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin(ec2)"></div><span id="TSTV2">поворотно-<br />откидное</br>левое</span><div class="AR" onclick="cwin(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/
    /*=======================Переключатель типа створки=333============================================================*/
    ec3 = document.getElementById("id_bw3");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per3"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin(ec3)"></div><span id="TSTV3">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin(ec3)"></div></div>');
    /*=======================Конец переключателя типа створки=333======================================================*/
    /*=======================Переключатель типа створки=444============================================================*/
    ec4 = document.getElementById("id_bw4");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per4"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin(ec4)"></div><span id="TSTV4">глухое</span><div class="AR" onclick="cwin(ec4)"></div></div>');
    /*=======================Конец переключателя типа створки=444======================================================*/
}

function Win6()/*------------------------------Балконная дверь с окном-----------------------------------*/ {
    document.getElementById("id_MF").innerHTML = "<div id='id_bwww' class='BW77'></div><button onclick='Win6_1(this)' style='font-family:OS4; font-size:14px; position:absolute;  top:320px; padding: 0 0;' class='btn btn-primary knop'>Отразить</button>";
    document.getElementById("id_bwww").innerHTML = "<div class='BW6' id='id_bw'></div> <div class='BW7' id='id_bww'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN3_1' onclick='cwin4(this)' id='id_bw5'></div>";
    document.getElementById("id_bww").innerHTML = "<div class='BWIN4_1' onclick='cwin5(this)' id='id_bw6'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:60px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">2200</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">1800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка=111==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:110px; height:10px; width:181px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:85px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:150px;">900</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">600</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:75px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;
            }
        });
    });
    /*=======================Конец горизонтальной линейки=111============================================================*/
    /*=======================Горизонтальная линейка=222==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; height:10px; width:281px;" id="SG1_1" class="SCMFG2"><div id="draggableG_1" style="left:135px;" class="handleG"></div></div> ');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<span id="SGmax_1" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:250px;">1500</span)');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<span id="SGmin_1" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">485</span)');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG_1(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:125px;" id="TextG_1" value=' + Math.round((Math.round(document.getElementById("SGmax_1").innerHTML) - Math.round(document.getElementById("SGmin_1").innerHTML)) / 2 + Math.round(document.getElementById("SGmin_1").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG_1").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {

                var GMax_1 = Math.round(document.getElementById("SGmax_1").innerHTML);
                var Gmin_1 = Math.round(document.getElementById("SGmin_1").innerHTML);
                var GPos_1 = parseInt(document.getElementById("draggableG_1").style.left);
                var HeG_1 = parseInt(document.getElementById("SG1_1").style.width) - 12;
                var Gcur_1 = Math.round(((GPos_1 / HeG_1) * (GMax_1 - Gmin_1) + Gmin_1) / 5) * 5;
                document.getElementById("TextG_1").value = Gcur_1;
            }
        });
    });
    /*=======================Конец горизонтальной линейки=222============================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw5");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin4(ec)"></div><span id="TSTV1">поворотно-<br />откидное</br>левое</span><div class="AR" onclick="cwin4(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw6");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin5(ec2)"></div><span id="TSTV2">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin5(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/
}

function Win6_1()/*------------------------------Балконная дверь с окном-----------------------------------*/ {
    document.getElementById("id_MF").innerHTML = "<div id='id_bwww'></div><button onclick='Win6(this)' style='font-family:OS4; font-size:14px; position:absolute;  top:320px; padding: 0 0;' class='btn btn-primary knop' >Отразить</button>";
    document.getElementById("id_bwww").innerHTML = "<div class='BW6_1' id='id_bw'></div> <div class='BW7_1' id='id_bww'></div>";
    document.getElementById("id_bw").innerHTML = "<div class='BWIN3_1' onclick='cwin4(this)' id='id_bw5'></div>";
    document.getElementById("id_bww").innerHTML = "<div class='BWIN4_1' onclick='cwin5(this)' id='id_bw6'></div>";
    /*=======================Вертикальная линейка==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:0px; left:60px; height:301px; width:10px;" id="SV1" class="SCMFV"><div id="draggableV" style="top:144px;" class="handleV"></div></div> ');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smax" style="font-family:OS4; font-size:12px; position:absolute; top:-3px; left:-40px;">2200</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<span id="Smin" style="font-family:OS4; font-size:12px; position:absolute; top:282px; left:-40px;">1800</span)');
    document.getElementById("SV1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKey(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:140px; left:-45px;" id="TextV" value=' + Math.round((Math.round(document.getElementById("Smax").innerHTML) - Math.round(document.getElementById("Smin").innerHTML)) / 2 + Math.round(document.getElementById("Smin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableV").draggable({
            containment: 'parent', axis: 'y', drag: function (e, ui) {
                var VMax = Math.round(document.getElementById("Smax").innerHTML);
                var Vmin = Math.round(document.getElementById("Smin").innerHTML);
                var Pos = parseInt(document.getElementById("draggableV").style.top);
                var He = parseInt(document.getElementById("SV1").style.height) - 12;
                var Vcur = Math.round(((1 - Pos / He) * (VMax - Vmin) + Vmin) / 5) * 5;
                document.getElementById("TextV").value = Vcur;
            }
        });
    });
    /*=======================Конец вертикальной линейки==================================================================*/
    /*=======================Горизонтальная линейка=111==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:415px; height:10px; width:181px;" id="SG1" class="SCMFG"><div id="draggableG" style="left:85px;" class="handleG"></div></div> ');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmax" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:150px;">900</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<span id="SGmin" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">600</span)');
    document.getElementById("SG1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:75px;" id="TextG" value=' + Math.round((Math.round(document.getElementById("SGmax").innerHTML) - Math.round(document.getElementById("SGmin").innerHTML)) / 2 + Math.round(document.getElementById("SGmin").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {
                var GMax = Math.round(document.getElementById("SGmax").innerHTML);
                var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
                var GPos = parseInt(document.getElementById("draggableG").style.left);
                var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
                var Gcur = Math.round(((GPos / HeG) * (GMax - Gmin) + Gmin) / 5) * 5;
                document.getElementById("TextG").value = Gcur;
            }
        });
    });
    /*=======================Конец горизонтальной линейки=111============================================================*/
    /*=======================Горизонтальная линейка=222==================================================================*/
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div style="top:350px; left:115px; height:10px; width:281px;" id="SG1_1" class="SCMFG2"><div id="draggableG_1" style="left:135px;" class="handleG"></div></div> ');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<span id="SGmax_1" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:250px;">1500</span)');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<span id="SGmin_1" style="font-family:OS4; font-size:12px; position:absolute; top:20px; left:0px;">485</span)');
    document.getElementById("SG1_1").insertAdjacentHTML('beforeend', '<input type="text" onchange="TexlKeyG_1(this)" style="font-family:OS4; font-size:12px; position:absolute; width:30px; top:20px; left:125px;" id="TextG_1" value=' + Math.round((Math.round(document.getElementById("SGmax_1").innerHTML) - Math.round(document.getElementById("SGmin_1").innerHTML)) / 2 + Math.round(document.getElementById("SGmin_1").innerHTML)) + '>');

    jQuery(function () {
        jQuery("#draggableG_1").draggable({
            containment: 'parent', axis: 'x', drag: function (e, ui) {

                var GMax_1 = Math.round(document.getElementById("SGmax_1").innerHTML);
                var Gmin_1 = Math.round(document.getElementById("SGmin_1").innerHTML);
                var GPos_1 = parseInt(document.getElementById("draggableG_1").style.left);
                var HeG_1 = parseInt(document.getElementById("SG1_1").style.width) - 12;
                var Gcur_1 = Math.round(((GPos_1 / HeG_1) * (GMax_1 - Gmin_1) + Gmin_1) / 5) * 5;
                document.getElementById("TextG_1").value = Gcur_1;
            }
        });
    });
    /*=======================Конец горизонтальной линейки=222============================================================*/
    /*=======================Переключатель типа створки================================================================*/
    ec = document.getElementById("id_bw5");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per1"  style="color:#9b9fa1; position:absolute;    "><div class="AL" onclick="Ccwin4(ec)"></div><span id="TSTV1">поворотно-<br />откидное</br>левое</span><div class="AR" onclick="cwin4(ec)"></div></div>');
    /*=======================Конец переключателя типа створки==========================================================*/
    /*=======================Переключатель типа створки=222============================================================*/
    ec2 = document.getElementById("id_bw6");
    document.getElementById("id_MF").insertAdjacentHTML('beforeend', '<div class="per2"  style="color:#9b9fa1; position:absolute;   "><div class="AL" onclick="Ccwin5(ec2)"></div><span id="TSTV2">поворотно-<br />откидное<br /> правое</span><div class="AR" onclick="cwin5(ec2)"></div></div>');
    /*=======================Конец переключателя типа створки=222======================================================*/
}

function TexlKey(e) {
    e.value = e.value.replace(/[^\d,]/g, '');
    var VMax = Math.round(document.getElementById("Smax").innerHTML);
    var Vmin = Math.round(document.getElementById("Smin").innerHTML);
    if (e.value > VMax) {
        e.value = VMax
    }
    else {
        if (e.value < Vmin) {
            e.value = Vmin
        } else {
        }
    }
    var NewV = parseInt(document.getElementById(e.id).value);
    var He = parseInt(document.getElementById("SV1").style.height) - 12;
    var Vcur = Math.round((1 - (NewV - Vmin) / (VMax - Vmin)) * He);
    document.getElementById("draggableV").setAttribute("style", "top:" + Vcur + "px;");
}

function TexlKeyG(e) {
    e.value = e.value.replace(/[^\d,]/g, '');
    var GMax = Math.round(document.getElementById("SGmax").innerHTML);
    var Gmin = Math.round(document.getElementById("SGmin").innerHTML);
    if (e.value > GMax) {
        e.value = GMax
    }
    else {
        if (e.value < Gmin) {
            e.value = Gmin
        } else {
        }
    }
    var NewGV = parseInt(document.getElementById(e.id).value);
    var HeG = parseInt(document.getElementById("SG1").style.width) - 12;
    var Gcur = Math.round(((NewGV - Gmin) / (GMax - Gmin)) * HeG);
    document.getElementById("draggableG").setAttribute("style", "left:" + Gcur + "px;");
}

function cwin(e) {
    switch (document.getElementById(e.id).className) {
        case "BWIN1":
            document.getElementById(e.id).className = "BWIN2"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотное правое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотное правое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотное правое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотное правое";
            }
            break;
        case "BWIN2":
            document.getElementById(e.id).className = "BWIN3"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотно-<br />откидное</br>левое";
            }
            break;
        case "BWIN3":
            document.getElementById(e.id).className = "BWIN4"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотное левое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотное левое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотное левое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотное левое";
            }
            break;
        case "BWIN4":
            document.getElementById(e.id).className = "BWIN5"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "глухое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "глухое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "глухое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "глухое";
            }
            break;
        default:
            document.getElementById(e.id).className = "BWIN1"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотно-<br />откидное<br /> правое";
            }
    }
}

function Ccwin(e) {
    switch (document.getElementById(e.id).className) {
        case "BWIN1":
            document.getElementById(e.id).className = "BWIN5"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "глухое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "глухое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "глухое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "глухое";
            }
            break;
        case "BWIN2":
            document.getElementById(e.id).className = "BWIN1"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотно-<br />откидное<br /> правое";
            }
            break;
        case "BWIN3":
            document.getElementById(e.id).className = "BWIN2"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотное правое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотное правое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотное правое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотное правое";
            }
            break;
        case "BWIN4":
            document.getElementById(e.id).className = "BWIN3"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотно-<br />откидное</br>левое";
            }
            break;
        default:
            document.getElementById(e.id).className = "BWIN4"
            switch (e.id) {
                case "id_bw1":
                    document.getElementById("TSTV1").innerHTML = "поворотное левое";
                    break;
                case "id_bw2":
                    document.getElementById("TSTV2").innerHTML = "поворотное левое";
                    break;
                case "id_bw3":
                    document.getElementById("TSTV3").innerHTML = "поворотное левое";
                    break;
                default:
                    document.getElementById("TSTV4").innerHTML = "поворотное левое";
            }
    }
}

function cwin2(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN1_1":
            document.getElementById(e.id).className = "BWIN1_2"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотное левое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотное левое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотное левое";
            }
            break;
        case "BWIN1_2":
            document.getElementById(e.id).className = "BWIN1_3"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное<br /> правое";
            }
            break;
        case "BWIN1_3":
            document.getElementById(e.id).className = "BWIN1_4"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотное правое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотное правое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотное правое";
            }
            break;
        case "BWIN1_4":
            document.getElementById(e.id).className = "BWIN1_5"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "глухое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "глухое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "глухое";
            }
            break;
        default:
            document.getElementById(e.id).className = "BWIN1_1"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное</br>левое";
            }
    }
}

function Ccwin2(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN1_1":
            document.getElementById(e.id).className = "BWIN1_5"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "глухое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "глухое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "глухое";
            }
            break;
        case "BWIN1_2":
            document.getElementById(e.id).className = "BWIN1_1"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное</br>левое";
            }
            break;
        case "BWIN1_3":
            document.getElementById(e.id).className = "BWIN1_2"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотное левое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотное левое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотное левое";
            }
            break;
        case "BWIN1_4":
            document.getElementById(e.id).className = "BWIN1_3"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотно-<br />откидное<br /> правое";
            }
            break;
        default:
            document.getElementById(e.id).className = "BWIN1_4"
            switch (e.id) {
                case "id_bw1_1":
                    document.getElementById("TSTV1").innerHTML = "поворотное правое";
                    break;
                case "id_bw1_2":
                    document.getElementById("TSTV2").innerHTML = "поворотное правое";
                    break;
                default:
                    document.getElementById("TSTV3").innerHTML = "поворотное правое";
            }
    }
}

function cwin3(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN2_1":
            document.getElementById(e.id).className = "BWIN2_2"
            break;
        default:
            document.getElementById(e.id).className = "BWIN2_1"
    }
}

function cwin4(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN3_1":
            document.getElementById(e.id).className = "BWIN3_2"
            document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
            break;
        case "BWIN3_2":
            document.getElementById(e.id).className = "BWIN3_3"
            document.getElementById("TSTV1").innerHTML = "поворотное левое";
            break;
        case "BWIN3_3":
            document.getElementById(e.id).className = "BWIN3_4"
            document.getElementById("TSTV1").innerHTML = "поворотное правое";
            break;

        default:
            document.getElementById(e.id).className = "BWIN3_1"
            document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
    }
}

function Ccwin4(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN3_1":
            document.getElementById(e.id).className = "BWIN3_4"
            document.getElementById("TSTV1").innerHTML = "поворотное правое";
            break;
        case "BWIN3_2":
            document.getElementById(e.id).className = "BWIN3_1"
            document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное</br>левое";
            break;
        case "BWIN3_3":
            document.getElementById(e.id).className = "BWIN3_2"
            document.getElementById("TSTV1").innerHTML = "поворотно-<br />откидное<br /> правое";
            break;

        default:
            document.getElementById(e.id).className = "BWIN3_3"
            document.getElementById("TSTV1").innerHTML = "поворотное левое";
    }
}

function cwin5(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN4_1":
            document.getElementById(e.id).className = "BWIN4_2"
            document.getElementById("TSTV2").innerHTML = "поворотное правое";
            break;
        case "BWIN4_2":
            document.getElementById(e.id).className = "BWIN4_3"
            document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
            break;
        case "BWIN4_3":
            document.getElementById(e.id).className = "BWIN4_4"
            document.getElementById("TSTV2").innerHTML = "поворотное левое";
            break;
        case "BWIN4_4":
            document.getElementById(e.id).className = "BWIN4_5"
            document.getElementById("TSTV2").innerHTML = "глухое";
            break;

        default:
            document.getElementById(e.id).className = "BWIN4_1"
            document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
    }
}

function Ccwin5(e) {

    switch (document.getElementById(e.id).className) {
        case "BWIN4_1":
            document.getElementById(e.id).className = "BWIN4_5"
            document.getElementById("TSTV2").innerHTML = "глухое";
            break;
        case "BWIN4_2":
            document.getElementById(e.id).className = "BWIN4_1"
            document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное<br /> правое";
            break;
        case "BWIN4_3":
            document.getElementById(e.id).className = "BWIN4_2"
            document.getElementById("TSTV2").innerHTML = "поворотное правое";
            break;
        case "BWIN4_4":
            document.getElementById(e.id).className = "BWIN4_3"
            document.getElementById("TSTV2").innerHTML = "поворотно-<br />откидное</br>левое";
            break;

        default:
            document.getElementById(e.id).className = "BWIN4_4"
            document.getElementById("TSTV2").innerHTML = "поворотное левое";
    }
}


function PrScr() {


    var width = jQuery("#TextG").val();
    var width6 = jQuery("#TextG_1").val();
    var height = jQuery("#TextV").val();
    var one = jQuery("#id_bw").attr('class');
    var three = jQuery("#id_bwww").attr('class');

    var prof = jQuery("#profil :selected").text();
    var stekl = jQuery("#steklopaket :selected").text();
    var furn = jQuery("#furnitura :selected").text();
    var podok = jQuery("#podokon :selected").text();
    var otliv = jQuery("#otliv :selected").text();
    var cozir = jQuery("#kozir :selected").text();
    var disaseml = jQuery("#disassembly :selected").text();
    var amount = jQuery('#amount').val();
    var two = {};
    two.one = jQuery("#id_bw1").attr('class');
    two.two = jQuery("#id_bw2").attr('class');
    two.two2 = jQuery("#id_bw3").attr('class');
    two.two3 = jQuery("#id_bw4").attr('class');
    //two.four = jQuery("#id_bw1_1").attr('class');
    //two.five = jQuery("#id_bw1_2").attr('class');
    //two.six = jQuery("#id_bw1_3").attr('class');
    //two.seven = jQuery("#id_bw").attr('class');
    two.eight = jQuery("#id_bww").attr('class');
    //if(three == "BW77"){
    //	one = three;
    //}
    switch (one) {
        case 'BW1':
            one = 'Одинарное';
            break;
        case 'BW2':
            one = 'Двойное';
            break;
        case 'BW3':
            one = 'Тройное';
            break;
        case 'BW4':
            one = 'Тройное-2';
            break;
        case 'BW5':
        one = 'Четыре рамы';
        break;
        case 'BW6':
            one = 'Балкон';
            break;
        case 'BW6_1':
            one = 'Балкон';
            break;
        case 'BW77':
            one = 'Балкон';
            break;
    }

    switch (two.one){
     case 'BWIN1':
     two.one = 'поворотно-откидное правое';
     break;
     case 'BWIN2':
     two.one = 'поворотное правое';
     break;
     case 'BWIN3':
     two.one = 'поворотное-откидное левое';
     break;
     case 'BWIN4':
     two.one = 'поворотное левое';
     break;
     case 'BWIN5':
     two.one = 'глухое';
     break;


     }
     switch (two.two){
     case 'BWIN1':
     two.two = 'поворотно-откидное правое';
     break;
     case 'BWIN2':
     two.two = 'поворотное правое';
     break;
     case 'BWIN3':
     two.two = 'поворотное-откидное левое';
     break;
     case 'BWIN4':
     two.two = 'поворотное левое';
     break;
     case 'BWIN5':
     two.two = 'глухое';
     break;


     }
     switch (two.two2){
     case 'BWIN1':
     two.two2 = 'поворотно-откидное правое';
     break;
     case 'BWIN2':
     two.two2 = 'поворотное правое';
     break;
     case 'BWIN3':
     two.two2 = 'поворотное-откидное левое';
     break;
     case 'BWIN4':
     two.two2 = 'поворотное левое';
     break;
     case 'BWIN5':
     two.two2 = 'глухое';
     break;


     }
     switch (two.two3){
     case 'BWIN1':
     two.two3 = 'поворотно-откидное правое';
     break;
     case 'BWIN2':
     two.two3 = 'поворотное правое';
     break;
     case 'BWIN3':
     two.two3 = 'поворотное-откидное левое';
     break;
     case 'BWIN4':
     two.two3 = 'поворотное левое';
     break;
     case 'BWIN5':
     two.two3 = 'глухое';
     break;


     }
     switch (two.two4){
     case 'BWIN1':
     two.two = 'поворотно-откидное правое';
     break;
     case 'BWIN2':
     two.two = 'поворотное правое';
     break;
     case 'BWIN3':
     two.two = 'поворотное-откидное левое';
     break;
     case 'BWIN4':
     two.two = 'поворотное левое';
     break;
     case 'BWIN5':
     two.two = 'глухое';
     break;


     }
    if(jQuery("#id_bw").attr('class')=='BW4'){
        two.one = jQuery("#id_bw1_1").attr('class');

        two.two = jQuery("#id_bw1_2").attr('class');
        two.two2 = jQuery("#id_bw1_3").attr('class');
        switch (two.one){
            case 'BWIN1_1':
                two.one = 'поворотно-откидное левое';
                break;
            case 'BWIN1_2':
                two.one = 'поворотное левое';
                break;
            case 'BWIN1_3':
                two.one = 'поворотное-откидное правое';
                break;
            case 'BWIN1_4':
                two.one = 'поворотное правое';
                break;
            case 'BWIN1_5':
                two.one = 'глухое';
                break;


        }
        switch (two.two){
            case 'BWIN1_1':
                two.two = 'поворотно-откидное левое';
                break;
            case 'BWIN1_2':
                two.two = 'поворотное левое';
                break;
            case 'BWIN1_3':
                two.two = 'поворотное-откидное правое';
                break;
            case 'BWIN1_4':
                two.two = 'поворотное правое';
                break;
            case 'BWIN1_5':
                two.two = 'глухое';
                break;


        }
        switch (two.two2){
            case 'BWIN2_1':
                two.two2 = 'откидное верхнее';
                break;
            case 'BWIN2_2':
                two.two2 = 'глухое';
                break;



        }
    }
    if(one=='Балкон'){
        two.one = jQuery("#id_bw5").attr('class');

        two.two = jQuery("#id_bw6").attr('class');

        switch (two.one){
            case 'BWIN3_1':
                two.one = 'поворотно-откидное левое';
                break;
            case 'BWIN3_2':
                two.one = 'поворотное-откидное правое';
                break;
            case 'BWIN3_3':
                two.one = 'поворотное левое';
                break;
            case 'BWIN3_4':
                two.one = 'поворотное правое';
                break;



        }
        switch (two.two){
            case 'BWIN4_1':
                two.two = 'поворотно-откидное правое';
                break;
            case 'BWIN4_2':
                two.two = 'поворотное правое';
                break;
            case 'BWIN4_3':
                two.two = 'поворотное-откидное левое';
                break;
            case 'BWIN4_4':
                two.two = 'поворотное левое';
                break;
            case 'BWIN4_5':
                two.two = 'глухое';
                break;


        }

    }
    var type6;
    if(jQuery("#id_bw").attr('class')=='BW6_1') {
        type6 = 1;
    }else{
        type6=0;
    }


    jQuery.ajax({
        url: "../orders/create",
        type: 'POST',
        data: {
            'type': one,
            'typeopen1': two.one,
            'typeopen2': two.two,
            'typeopen3': two.two2,
            'typeopen4': two.two3,
            'type6': type6,
            'width': width,
            'height': height,
            'width6': width6,
            'profil': prof,
            'steklopaket': stekl,
            'furnitura': furn,
            'podokonnik': podok,
            'otliv': otliv,
            'kozirek': cozir,
            'disassembly': disaseml,
            'amount': amount

        },

    });


}


function rem() {
    jQuery("#iddark").detach();
    jQuery("#idw").detach();
    jQuery("#xxx").detach();

}




