window.addEventListener("load",load);
var numVerdes=0;
var numRojos=0;
function load(){
   document.body.oncontextmenu= function (){return false;};
   cargarVerdes();
    cargarRojos();
    document.getElementById("img_footer").onerror=function(){
         this.src="img/compra_segura.jpg";
    };
    //desabilitarA();
    document.getElementById("current").addEventListener("click",function(){alert("Ha pulsado sobre el link actual");})
        activarMas();
        activarMenos();

    document.body.onkeydown=capturaTeclado;
    habilitaMenuContextual();
    document.body.onclick=function(){        document.getElementById("mostrar").style.display="none";}

    document.getElementById("registro").onclick= function(){
        var nombre = prompt("introduce tu nombre:");
        document.getElementById("nombre").innerHTML = nombre;
        localStorage.setItem("nombre", nombre);
        //localStorage.setItem("nombre", nombre);
    };

    añadirAlCarro();
    borrarDelCarro();

    if (typeof(Storage) !== "undefined") {
        document.getElementById("nombre").innerHTML = localStorage.getItem("nombre");
    }
    else{
        document.getElementById("nombre").innerHTML = "";
    }

}


function crearCookie(valor){
    document.cookie = "cesta=" + valor;
}



function cargarVerdes(){
    var verdes= document.getElementsByClassName("verde");

    for(var i=0;i<verdes.length;i++){
        verdes[i].onmouseover=function(){
            numVerdes++;
          //  console.log(numVerdes);
        };
    }

}
function cargarRojos(){
    var rojos= document.getElementsByClassName("rojo");

    for(var i=0;i<rojos.length;i++){
        rojos[i].onmouseover=function(){
            numRojos++;
//                        console.log(numRojos);

        };

    }
}

function añadirAlCarro(){
    var x = document.getElementsByClassName('mas');
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener("click",function(){
                cesta = JSON.stringify(carro);
                crearCookie(cesta);
        });
    }
    console.log(x);
}

function borrarDelCarro(){
    y =document.getElementsByClassName('menos');
    for (var i = 0; i < y.length; i++) {
        y[i].addEventListener("click",function(){
                cesta = JSON.stringify(carro);
                crearCookie(cesta);
        });
    }
}

function desabilitarA(){
        var aes= document.getElementsByTagName("a");
          for(var i=0;i<aes.length;i++){
          if(aes[i].href.includes("localhost")){
          }else{
              aes[i].onclick=function(){ event.preventDefault();};
         }




}
}

function activarMas(){
    var mas= document.getElementsByClassName("mas");

    for(var i=0;i<mas.length;i++){
        mas[i].onclick=function(){
        anadirUnidades(this.value);
//                        console.log(numRojos);

        };

}

}
function activarMenos(){
    var menos= document.getElementsByClassName("menos");

    for(var i=0;i<menos.length;i++){
        menos[i].onclick=function(){
        borrarElemento(this.value);
//                        console.log(numRojos);

        };

}
}
function capturaTeclado(){
    switch (event.key){

        case "i":
         imprimeCarro();
         break;
            case "p":
         presupuesto();
         break;
        case "e":
            console.log("Numero rojos: "+ numRojos);
         console.log("Numero verdes: "+ numVerdes);
         break;

    }


}
function habilitaMenuContextual(){
    document.getElementById("carrito").oncontextmenu=function(){
        document.getElementById("mostrar").style.display="block";
        var x= event.pageX;
        var y =event.pageY;

         document.getElementById("mostrar").style.left=x+"px";
            document.getElementById("mostrar").style.top=y+"px";




    }

}

