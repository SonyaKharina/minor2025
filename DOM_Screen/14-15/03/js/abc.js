function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    if (a < b && b < c) {
        result = "Выполняется неравенство A < B < C"
        check = true;
    } 
    else if (a < b && b > c) {
        result = "Выполняется неравенство A < B > C"
        check = true; }
    else {
        result = "Неравенства не выполняются"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ни одно из неравенств не выполнено. Повторите ввод.")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
