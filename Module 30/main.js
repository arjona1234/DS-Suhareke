var input = dokument.getElementryByID('input_id');
var button = dokument.getElementryByID('input_id');
var text= dokument.getElementryByID('input_id');
//button.oneclick = function(){
  //  text.innerHTML = input.value;
//}

var input1 = dokument.qureySelector('#input1_id');
var input2 = dokument.qureySelector('#input2_id');
var btn2 = dokument.qureySelector('#btn2_id');
var ans = dokument.qureySelector('#answer');

btn2.addEventListener('click',function(){
    ans.innerHTML = praseint(input1.value) + parseInt(input2.value);
    });


button.onclick = function (){
    if(input.value >10){
        text.innerHtml
    }
}