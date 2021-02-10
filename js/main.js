//ex1

function calculaDiv(){
    
    var r, num1, num2;

    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    
    var r = parseFloat(num1);

    if(parseFloat(num1) < parseFloat(num2)){
        document.getElementById("resultado").textContent="O primeiro número deve ser maior que o segundo para realizar a operação";
    
    }

    else{
        while(r >= num2)
        {
        var r = r - parseFloat(num2);
        }
    
    

        document.getElementById("resultado").textContent=r;
    }
}


//ex2

function areaRet(){

    var b, alt, r;

    var b = document.getElementById("base").value;
    var alt = document.getElementById("altura").value;

    var r = parseFloat(b) * parseFloat(alt);

    document.getElementById("resultadoRet").textContent=r;
}

//ex3

function mediaArit(){

    var n1, n2, n3, n4, r;

    var n1 = document.getElementById("na1").value;
    var n2 = document.getElementById("na2").value;
    var n3 = document.getElementById("na3").value;
    var n4 = document.getElementById("na4").value;

    var r = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;

    

    document.getElementById("resultadoArit").textContent=r;
}

//ex4

function calculaTen(){

    var ten, cor, res;

    var res = document.getElementById("resist").value;
    var cor = document.getElementById("corrente").value;

    var ten = parseFloat(res) * parseFloat(cor);

    document.getElementById("resultadoTen").textContent = ten;
}

//ex5

function areaTri(){

    var b, alt, r;

    var b = document.getElementById("basetri").value;
    var alt = document.getElementById("alturatri").value;

    var r = parseFloat(b) * parseFloat(alt) /2;

    document.getElementById("resultadoTri").textContent=r;
}