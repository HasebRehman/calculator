
let one = document.querySelector("#one");
let screen = document.querySelector(".inside-screen");

// print 1 on screen
one.addEventListener("click", () => {
    screen.innerText += "1";
});

let two = document.querySelector("#two");

// print 2 on screen
two.addEventListener("click", () => {
    screen.innerText += "2";
});

let three = document.querySelector("#three");

// print 3 on screen
three.addEventListener("click", () => {
    screen.innerText += "3";
});

let four = document.querySelector("#four");

// print 4 on screen
four.addEventListener("click", () => {
    screen.innerText += "4";
});

let five = document.querySelector("#five");

// print 5 on screen
five.addEventListener("click", () => {
    screen.innerText += "5";
});

let six = document.querySelector("#six");

// print 6 on screen
six.addEventListener("click", () => {
    screen.innerText += "6";
});

let seven = document.querySelector("#seven");

// print 7 on screen
seven.addEventListener("click", () => {
    screen.innerText += "7";
});

let eight = document.querySelector("#eight");

// print 8 on screen
eight.addEventListener("click", () => {
    screen.innerText += "8";
});

let nine = document.querySelector("#nine");

// print 9 on screen
nine.addEventListener("click", () => {
    screen.innerText += "9";
});

let zero = document.querySelector("#zero");

// print 0 on screen
zero.addEventListener("click", () => {
    screen.innerText += "0";
});

let AC = document.querySelector("#AC");

// make the screen empty
AC.addEventListener("click", () => {
    screen.innerText = "";
});

let plus = document.querySelector("#plus");

// add + operator on screen
plus.addEventListener("click", () => {
    screen.innerText += "+";
});

let minus = document.querySelector("#minus");

// add - operator on screen
minus.addEventListener("click", () => {
    screen.innerText += "-";
});

let multiply = document.querySelector("#multiply");

// add * operator on screen
multiply.addEventListener("click", () => {
    screen.innerText += "*";
});

let division = document.querySelector("#division");

// add / operator on screen
division.addEventListener("click", () => {
    screen.innerText += "/";
});

let equal = document.querySelector("#equal");

// click = and get result
equal.addEventListener("click", () => {
    let expression = screen.innerText;    
    
    // for add multiple values
    if (expression.includes("+")) {
        let numbers = expression.split("+");

        let sum = 0;
        for (const num of numbers) {
            sum += Number(num);
            
        }
        screen.innerText = sum;
    }
    
    // for substract multiple values
    if (expression.includes("-")) {
        let numbers = expression.split("-");
        
        let res = numbers.reduce((pre, curr) => {
            return pre - curr;
        });

        screen.innerText = res;
    }


    // for multiply multiple values
    if (expression.includes("*")) {
        let numbers = expression.split("*");
        
        let res = numbers.reduce((pre, curr) => {
            return pre * curr;
        });

        screen.innerText = res;
    }


    // for divide multiple values
    if (expression.includes("/")) {
        let numbers = expression.split("/");
        
        let res = numbers.reduce((pre, curr) => {
            return pre / curr;
        });

        screen.innerText = res;
    }


    // for multiple operators
    // add the values and the operators in the array 
    let tokens = [];
    let currNum = "";

    for (const char of expression) {
        if (!isNaN(char)) {
            currNum += char;

        }else {
            if (currNum) {
                tokens.push(currNum);
                currNum = "";
            }
            tokens.push(char);
        }
    }
    tokens.push(currNum);

    // first handle divide
    // divide two values and add on the array on that spot
    for(let i = 0; i < tokens.length; i++) {

        if (tokens[i] == "/") {
            let beforeDivisionVal = parseFloat(tokens[i-1]);
            let afterDivisionVal = parseFloat(tokens[i+1]);

            let res = beforeDivisionVal / afterDivisionVal;
            tokens.splice(i-1, 3, res.toString());
            
        }
    }

    // then handle multiply
    // multiply two values and add on the array on that spot
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "*") {
            let beforeMultiplyVal = parseFloat(tokens[i-1]);
            let afterMultiplyVal = parseFloat(tokens[i+1]);

            let res = beforeMultiplyVal * afterMultiplyVal;  
            tokens.splice(i-1, 3, res.toString()); 
            
        } 
    }

    // then handle addition
    // addition two values and add on the array on that spot
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+") {
            let beforeAdditionVal = parseFloat(tokens[i-1]);
            let afterAdditionVal = parseFloat(tokens[i+1]);

            let res = beforeAdditionVal + afterAdditionVal;
            tokens.splice(i-1, 3, res.toString());
        }
    }

    // then handle subtract
    // subtract two values and add on the array on that spot
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "-") {
            let beforeAdditionVal = parseFloat(tokens[i-1]);
            let afterAdditionVal = parseFloat(tokens[i+1]);

            let res = beforeAdditionVal - afterAdditionVal;
            tokens.splice(i-1, 3, res.toString());
        }
    }
    
    screen.innerText = tokens;

    if (expression.includes("++")) {
        screen.innerText = "ERROR";

    }

    if (expression.includes("--")) {
        screen.innerText = "ERROR";

    }

    if (expression.includes("**")) {
        screen.innerText = "ERROR";

    }

    if (expression.includes("//")) {
        screen.innerText = "ERROR";

    }
    
});


