const range=document.getElementById('js-range');
const range_number=document.getElementById('last_value');
range_number.innerHTML=range.value;
const display = document.getElementById("js-result");



function Rand_game(){
    var respones;
    const diplaySpan = display.querySelector("span");
    const guess_num=document.getElementById("guess").value;
    const Rand_num=Math["floor"](Math.random()*range_number.innerHTML);
    
    if (guess_num==Rand_num){
        respones="You win!";
    }
    else{
        response="You lost!";
    }
    diplaySpan.innerHTML = `You choose: ${guess_num}<br>The machine choose: ${Rand_num}<br><b>${response}</b>`;
    
}
