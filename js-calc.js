// Make the operators appear in the empty box when clicked
// eventlistner
// document.getElementById("answer").addEventListener("click", myFunction);
                


let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
// let input = []
// let answer = ''


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  btnClk = event.target;
        // console.log(btnClk.innerHTML);
        let numb = document.getElementById("answer-box").innerHTML = btnClk.innerHTML;
        let input = [numb, "test1"];
        console.log(input);
        // input.push(push the "second" click into the array)
        //           (push "every" "new" click into the array)
        let numbTwo = document.getElementById("answer-box").innerHTML = btnClk.innerHTML;
        let inputTwo = [NumbTwo, "test2"]
        console.log(inputTwo);
        // let inputOps = input.push("test2")
        // console.log(inputOps)


        // When clicked again new userInputs 
        // shows up next to old one. Need at least three in a row


        
        // This returns undefined
        // let btnClk = document.getElementsByClassName("keys").textContent;
        // document.getElementById("answer-box").innerHTML = btnClk;

        // As of right now only clearBtn works but if I switch 
        // numClk7 to the bottom only that one will work.
        
        // let numClk7 = document.getElementById("seven").textContent;
        // document.getElementById("answer-box").innerHTML = numClk7;

        // let numClk8 = document.getElementById("eight").textContent;
        // document.getElementById("answer-box").innerHTML = numClk8;

        // let clearBtn = document.getElementById("answer-box").innerHTML = "";
        // document.getElementById("clear") = clearBtn;

    } )
  
}

// .join for arrays
// eval() method to evaluate operations
// parseInt()
//  with if statements - start with operators first
// use else statements for numbers
// .textContent