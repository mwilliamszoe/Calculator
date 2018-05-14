// Make the operators appear in the empty box when clicked
// eventlistner
// document.getElementById("answer").addEventListener("click", myFunction);
                


let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
let input = []
let answer = ''


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  buttonClicked = event.target;
        // console.log(buttonClicked.innerHTML)
        
        // let btnClk = document.getElementsByClassName("keys").textContent;
        // document.getElementById("answer-box").innerHTML = btnClk;

        let clearBtn = document.getElementById("answer-box").innerHTML = "";
        document.getElementById("clear") = clearBtn;

         
    } )



  
}

// .join for arrays
// eval() method to evaluate operations
// parseInt()
//  with if statements - start with operators first
// use else statements for numbers
// .textContent