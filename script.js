var a = document.getElementById("display");

function abc(val) {
    document.getElementById("diplay");
     a.value += val;
}

function ans(val1) {
    a.value = eval(a.value);
}

function clr() {
    document.getElementById("display").value = "";
}

function erase() {
    let b = document.getElementById("display").value;
    document.getElementById("display").value = b.substr(0, b.length - 1);
}

function sqa() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (c * c);
}
function sqrt() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(c);
}

function cube() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (c * c * c);
}
function tenpow() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.pow(10,c);
}

function sin() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.sin(c * Math.PI / 180)).toFixed(2);
}

function cos() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.cos(c * Math.PI / 180)).toFixed(2);
}

function tan() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.tan(c * Math.PI / 180)).toFixed(2);
}

function sinh() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.sinh(c).toFixed(2));
}

function cosh() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.cosh(c).toFixed(2));
}

function tanh() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = (Math.tanh(c).toFixed(2));
}

function mod() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.abs(c);
}

function factorial() {
    let fact = 1;
    let c = document.getElementById("display").value;
    for (let i = 1; i <= c; i++) {
        fact = fact * i;
    }
    document.getElementById("display").value = fact;
}

function pi() {
    document.getElementById("display").value = Math.PI.toFixed(10);
}

function sinin() {
    let c = document.getElementById("display").value;
    let degree = Math.asin(c);
    document.getElementById("display").value = (degree * 180 / Math.PI).toFixed(2);
}

function cosin() {
    let c = document.getElementById("display").value;
    let degree = Math.acos(c);
    document.getElementById("display").value = (degree * 180 / Math.PI).toFixed(2);
}

function tanin() {
    let c = document.getElementById("display").value;
    let degree = Math.atan(c);
    document.getElementById("display").value = (degree * 180 / Math.PI).toFixed(2);
}
function sininh() {
    let c = document.getElementById("display").value;
    let degree = Math.asinh(c);
    document.getElementById("display").value = (degree).toFixed(2);
}

function cosinh() {
    let c = document.getElementById("display").value;
    let degree = Math.acosh(c);
    document.getElementById("display").value = (degree).toFixed(2);
}

function taninh() {
    let c = document.getElementById("display").value;
    let degree = Math.atanh(c);
    document.getElementById("display").value = (degree).toFixed(2);
}

function exp() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.exp(c);
}

function log() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.log10(c);
}

function ln() {
    let c = document.getElementById("display").value;
    document.getElementById("display").value = Math.log(c);
}
