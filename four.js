const number = 123;
const digits = number.toString();
const forward = forwardLoop()
const reverse = reverseLoop()

function forwardLoop(){
    const forwardResult =[]
    for (let i = 0; i < digits.length; i++) {
    forwardResult.push(digits[i])
    }
    return forwardResult
}

function reverseLoop(){
    const reverseResult = []
    for (let i = digits.length - 1; i >= 0; i--) {
    reverseResult.push(digits[i])
    }
    return reverseResult
}

function equalityCheck(){
    if (forward.join("") == reverse.join("")){
    console.log("true")
        
    } else{
    console.log("false")
        
    }
}
equalityCheck()
