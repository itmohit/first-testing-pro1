var optn = document.getElementById('option').innerHTML.value;
var resa = document.getElementById('first').value;
var resb = document.getElementById('second').value;
function cal() {
    alert(optn);
}
function cal() {
    if (optn == '+'){
        var res = parseInt (resa) + parseInt (resb);
    }
    if (optn == '-'){
        var res = parseInt (resa) - parseInt (resb);
    }
    if (optn == '*'){
        var res = parseInt (resa) * parseInt (resb);
    }
    if (optn == '/'){
        var res = parseInt (resa) / parseInt (resb);
    }
document.getElementById("result").innerHTML = res;
};
