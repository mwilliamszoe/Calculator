

let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
// let input = []
// let answer = ''


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  btnClk = event.target;
        // console.log(btnClk.innerHTML);
        let numb = document.getElementById("answer-box").innerHTML = btnClk.innerHTML;
        let input = [numb, "numb"];
        console.log(input);
        
    } )
}







// .join for arrays
// eval() method to evaluate operations
// parseInt()
//  with if statements - start with operators first
// use else statements for numbers
// .textContent