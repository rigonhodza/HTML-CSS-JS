var input11 = document.getElementById("input_id");
var button11 = document.getElementById("btn_id");
var text11 = document.getElementById("text_id");

button11.onclick = function (){
    text11.innerHTML = input11.value;
}
var num1 = document.getElementById('input_id1')
var num2 = document.getElementById('input_id2');
var btn = document.getElementById('btn2_id');
var result = document.getElementById('result_id');
var tex2 = document.getElementById('text2_id');

Btn.onclick = function (){

    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}



btn.onclick = function() {
    if(result > 10) (
        text11.innerHTML = "greater than 10"
    )
    else if(result < 10) (
        text12.innerHTML = "less than 10"
    )
    else (result > 10) (
        text12.innerHTML = "equal to 10"
    )
}





