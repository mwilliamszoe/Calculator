

let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
let input = []
let answer = 'this a test'


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  btnClk = event.target;
        // console.log(btnClk.innerHTML);

        const keyInner = btnClk.innerHTML;
        
            if ( keyInner === "C") {
                return input = [];
                    // console.log(input)
                    // console.log("test C")
            }
            
            else{
                const keyNumbers = parseInt(keyInner)
                input.push(keyNumbers)
                console.log(input)
                answerBox.textContent = keyNumbers;
                console.log(answerBox)
        }

    } )
}



// .join to get rid of commas
// eval() method to evaluate operations
// parseInt()
//  with if statements - start with operators first
// use else statements for numbers
// .textContent
 