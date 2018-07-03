let keys = document.querySelectorAll('.keys')
let answerBox = document.querySelector('#answer-box')
let input = []
let answer = 'this a test'


for (i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', function (event) {
        let btnClk = event.target;
        // console.log(btnClk.innerHTML);

        const keyInner = btnClk.innerHTML;

        if (keyInner === "C") {
            answerBox.textContent = ''
            console.log("test C", input)
            return input = []
            
        }

        if (keyInner === "=") {
            let equation = input.join('')
            // console.log(equation, "test")
            answerBox.textContent = eval(equation);
            // console.log(eval(equation))
        } else {
            answerBox.textContent = keyInner;
            // console.log(answerBox)
            input.push(keyInner)
            console.log(input)
        }

    })
}