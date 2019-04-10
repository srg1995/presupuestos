class Tienda{
    constructor(id,nomb,prec,cat){
        this.id=id;
        this.nombre=nomb;
        this.cantidad=1;
        this.precio=prec;
        this.categoria=cat

    }
    addUnidades(){
        this.cantidad++;
    }
    delUnidades(){
        this.cantidad--;
    }
    calcularprecio(){
        return this.cantidad*this.precio;
    }


}

class Ropa extends Tienda{
    constructor(id,nomb,prec,cat,ta){
        super(id,nomb,prec,"Ropa");
        this.talla=ta;

    }
}


class Tornilleria extends Tienda{
    constructor(id,nomb,prec,cat){
        super(id,nomb,prec,"Tornilleria");
        this.cantidad=10;
    }
    addUnidades(){
        this.cantidad+=10;
    }
    delUnidades(){
        this.cantidad-=10;
    }

}

class Herramientas extends Tienda{
    constructor(id,nomb,prec,cat){
           super(id,nomb,prec,"Herramientas");
    }

}


var carro = new Array();

function nuevaCompra(id,nomb,prec,categoria,talla){
    switch(categoria){
        case "Tornilleria":
          var ob= new Tornilleria(id,nomb,prec,categoria);
          carro.push(ob);
          break;
      case "Ropa":
          var ob= new Ropa(id,nomb,prec,categoria, talla);
          carro.push(ob);
          break;
      case "Herramientas":
          var ob= new Herramientas(id,nomb,prec,categoria);
          carro.push(ob);
          break;
      default:
          break;
    }
}
function nuevoProducto(id){
    switch (id){
        case "T100B":
         nuevaCompra("T100B","Tuerca",1,"Tornilleria");
         break;
     case "R100B":
       nuevaCompra("R100B","Mono",25,"Ropa","L");
   break;
   case "H102A":
       nuevaCompra("H102A","Llave Inglesa",25,"Herramientas");
       break;
   case "R001A":
     nuevaCompra("R001A","Guantes",15,"Ropa","L");
     break;
 case "H002A":
     nuevaCompra("H002A","Destornillador",10,"Herramientas");
     break;
 case "H100B":
 nuevaCompra("H100B","Martillo",15,"Herramientas");
 break;
 default:
     break;
    }
}


function getIndiceByID(id){
    var indice=-1;
    indice=carro.findIndex(function(elemento){return elemento.id==id;})
    return indice;

}

function borrarElemento(id){
    var indice= getIndiceByID(id);
    carro[indice].delUnidades();
    if(carro[indice].cantidad<=0){
        carro.splice(indice,1);
    }

}
function anadirUnidades(id){
    var indice= getIndiceByID(id);
    if(indice==-1){
       nuevoProducto(id);
    }else{
      carro[indice].addUnidades();}
}

function presupuesto(){
    var pres= carro.reduce(function(resultado,elemento){
        return resultado+elemento.calcularprecio();
         },0);

         console.log("El presupuesto actual es:"+pres);

}

Array.prototype.imprimir= function(){
    this.forEach(function (el){
        console.log("******************************");

        console.log("Identificador: "+el.id);
        console.log("Cantidad: "+el.cantidad);
        console.log("Precio: "+el.precio);
        console.log("Categoria: "+el.categoria);
        console.log("Precio Total: "+el.calcularprecio());

        if(el.talla!=undefined){
        console.log("Talla: "+el.talla);
        }
        console.log("******************************");


    });
}
function imprimeCarro(){
    carro.imprimir();
    console.log(carro)
}
/*
function imprimirCategoria(cat){
    var arrayCat= carro.filter(function(ele){
        return ele.categoria==cat;
    });
    arrayCat.imprimir();

}
function ordenar(){
    carro.sort(
            function (e1,e2){
                var id1=e1.id;
                var id2=e2.id;

                if(id1.charAt(0)>id2.charAt(0)){ return 1;}
                else if(id1.charAt(0)<id2.charAt(0)){return -1;}
                    else if(id1.charAt(id1.length-1)>id2.charAt(id1.length-1)){return 1;}
                       else if(id1.charAt(id1.length-1)<id2.charAt(id1.length-1)){return -1}
                        else if(id1.slice(1,-1)>id2.slice(1,-1)){return 1;}
                            else if(id1.slice(1,-1)<id2.slice(1,-1)){return -1}
                             else{
                                 return 0;
                             }

            });


}

nuevaCompra("T100B","Tuerca",1,"Tornilleria");
carro.imprimir();
nuevaCompra("R100B","Mono",25,"Ropa","L");
carro.imprimir();

nuevaCompra("H102A","Llave Inglesa",25,"Herramientas");
carro.imprimir();

nuevaCompra("R100A","Guantes",10,"Ropa","L");
carro.imprimir();

nuevaCompra("H100B","Martillo",15,"Herramientas");
carro.imprimir();
nuevaCompra("T101A","Tornillos",1,"Tornilleria");
carro.imprimir();

nuevaCompra("H101A","Destornillador",10,"Herramientas");
carro.imprimir();

console.log ("El presupuesto es:" + presupuesto());
borrarElemento("H100B");
console.log ("El martillo ya no existe");
imprimirCategoria("Herramientas");

carro.imprimir();
console.log ("Ordenados");

ordenar();

carro.imprimir();
*/