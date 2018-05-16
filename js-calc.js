

let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
let input = []
// let answer = ''


for (i=0; i<keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let  btnClk = event.target;
        // console.log(btnClk.innerHTML);

        const keyInner = btnClk.innerHTML;
            if ( keyInner === "C") {
                return input = [];
                // console.log(input)
                // console.log("test C")
            } else {
                // const keyNumbers = parseInt(keyInner)
                // input.push(keyNumbers)
                input.push(keyInner)
                let inputJoined = input.join('')
                console.log(inputJoined);
                // console.log(input)
                answerBox.textContent = keyInner;
                // answerBox.textContent = keyNumbers;
                // console.log(answerBox)
                
                
            }
    } )
}


// if (keyInner === "+" 
//     (keyInner === "-"
//     (keyInner === "/"
//     (keyInner === "x"
//     {



// .join to get rid of commas
// eval() method to evaluate operations
// parseInt()
//  with if statements - start with operators first
// use else statements for numbers
// .textContent

// get rid of commas with join
// find a way to turn make parseInt ignore operators
// eval entire statement with = sign
 