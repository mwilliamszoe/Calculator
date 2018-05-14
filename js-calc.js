// Make the operators appear in the empty box when clicked
// eventlistner
// document.getElementById("answer").addEventListener("click", myFunction);
                


let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
let input = []
let answer = ''


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  btnClk = event.target;
        console.log(btnClk.innerHTML)

        document.getElementById("answer-box").innerHTML = btnClk.innerHTML;
        
        // This returns undefined
        // let btnClk = document.getElementsByClassName("keys").textContent;
        // document.getElementById("answer-box").innerHTML = btnClk;

        // As of right now only clearBtn works but if I switch 
        // numClk7 to the bottom only that one will work.
        
        // let numClk7 = document.getElementById("seven").textContent;
        // document.getElementById("answer-box").innerHTML = numClk7;

        // let numClk8 = document.getElementById("eight").textContent;
        // document.getElementById("answer-box").innerHTML = numClk8;

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