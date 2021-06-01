function operar(tipo){    
    var t1 = document.getElementById('txtNum').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer

    document.getElementById('txtArea').value = area(n1);      
    document.getElementById('txtDescripcion').innerHTML = tipo;
}
function operar1(tipo){    
    var t1 = document.getElementById('txtNum10').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer

    document.getElementById('txtVol').value = volumen(n1);       
    document.getElementById('txtDescripcion1').innerHTML = tipo;
}
function operar2(tipo){    
    var t1 = document.getElementById('txtNum20').value;
    var t2 = document.getElementById('txtNum21').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer
    var n2 = parseInt(t2); //Convierte el valor String en Integer

    document.getElementById('txtAreaTri').value = areaTri(n1,n2);       
    document.getElementById('txtDescripcion2').innerHTML = tipo;
}

function area(n1){
    var r = n1 * n1;
    return r;
}

function volumen(n1){
    var r = n1 * n1 * n1;
    return r;
}

function areaTri(n1,n2){
    var r = (n1 * n2)/2;
    return r;
}