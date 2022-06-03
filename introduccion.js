import {Pan, Hojitas} from "./Clases.js";
/*document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento){
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    
    if (usuario.length == 0) {
        alert("No has escrito nada en el usuario");
        return;
    }

    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
        alert("la clave no es válida");
        return;
    }
    this.submit();
}*/



function obligatori(){
   
   var aviso1 = document.getElementById("aviso");
   aviso1.innerHTML="Debe rellenar el campo de usuario";
}

function bluer(){
    var aviso1=document.getElementById("aviso");
    aviso1.innerHTML="";
}

function obligatori2(){
    var aviso1 = document.getElementById("aviso2");
    aviso1.innerHTML="Debe rellenar el campo de password";
}

function bluer2(){
    var aviso1 = document.getElementById("aviso2");
    aviso1.innerHTML="";
}

var mycar = new Object();
mycar.make = 'Ford';
mycar.model = 'Mustang';
mycar.year = 1969;

document.write("<br><br>");
document.write(mycar.make+"<br>");
document.write(mycar.model+"<br>");
document.write(mycar.year);

document.write("<br><br>Declaracion de objetos<br>");

var objeto1 = new Object();
objeto1.nombre="carlos";
objeto1.apellido="aguila";
objeto1.edad=27;
objeto1.nacionalidad="salvadoreño";


document.write(objeto1.nombre="<strong>BENJAMIN</strong>");

var objeto2 = new Object();
objeto2.modelo="hilux-eve";
objeto2.anio="2022";
objeto2.color="blue";
objeto2.marca="hilux";
objeto2.saludo=function(){
    var valor1 =10;
    var valor2 = 20;
    var suma = valor1+valor2;
    return suma;
}

document.write("<br><br>");
document.write("Modelo: "+objeto2["modelo"]+"<br>");
document.write("Año: "+objeto2["anio"]+"<br>");
document.write("Color: "+objeto2["color"]+"<br>");
document.write("Marca: "+objeto2["marca"]+"<br><br>");
document.write("Método: "+objeto2["saludo"]());


document.write("<br><br><strong>Object Book</strong><br><strong>1° Técnica de acceso a un Objeto</strong>");

var book = {"title":"Banished Batallion","anio":"2019", "Precio":20.9,"saludo": function(){
    var saludos ="Welcome sysadmin";
    return saludos;
}}

document.write("<br><br>"+book.title,"<br>");
document.write(book.anio+"<br>");
document.write(book.Precio+"<br>");
document.write(book.saludo());

document.write("<br><br><strong>2° Técnica de acceso a un Objeto</strong><br>");
document.write(book["title"]+"<br>");
document.write(book["anio"]+"<br>");
document.write(book["Precio"]+"<br>");
document.write(book["saludo"]());

document.write("<br><br><strong>Clases Y Objetos</strong><br><br>");

//declaration of class
class rentagulo{
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    
    show(){
        var fling = "aventura";
        return fling;
    }
    total(){
       var tota=this.alto*this.ancho;
       document.write(tota);
    }
}

//instatiate a object of a class
const p = new rentagulo(10,10);
document.write(p.show()+"<br>");
p.total();


//expression of class anónima|named
var rectan = class {
    constructor(high, width){
        this.high=high;
        this.width=width;
    }
}

document.write("<br>"+rectan.name+"<br>");

var geome = class geometria{
    constructor(high,width){
        this.high=high;
        this.width=width;
    }
}

document.write(geome.name+"<br>");

//expression of class no name
var clas1 = class {
    constructor(altu,anc){
        this.altu=altu;
        this.anc=anc;
    }
}

document.write(clas1.name+"<br>");

//expression of class with name
var clas2 = class clase2{
    constructor(altu,anc){
        this.altu=altu;
        this.anc=anc;
    }
}

document.write(clas2.name+"<br>");

var clas3 = class {
    constructor(valo1, valo2){
        this.valo1=valo1;
        this.valo2=valo2;
    }
}

document.write(clas3.name+"<br>");

var clas4= class clase4{
    constructor(valo1,valo2){
        this.valo1=valo1;
        this.valo2=valo2;
    }
}

document.write(clas4.name+"<br>");
var clas5=class clase5{
    constructor(valo1,valo2){
        this.valo1=valo1;
        this.valo2=valo2;
    }
}

document.write(clas5.name+"<br>");


//complete class

class recta{
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }

    //getter
    get area(){
        return this.calcArea();
    }

    //metodo
    calcArea(){
        return this.alto*this.ancho;
    }
}

const cuadrado = new recta(10,10);
document.write(cuadrado.area+"<br><br>");


//métodos estáticos

class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
        //método estático
    static distancia(a,b){
        const dx = a.x - b.x;
        const dy = b.y - b.y;

        return Math.sqrt(dx*dx+dy*dy);
        
    }
}

const p1 = new Punto(5,5);
const p2 = new Punto(10,10);
document.write(Punto.distancia(p1,p2)+"<br><br>");

document.write("<strong>Polimorfismo</strong><br><br>");

class polimo{
    constructor(nom,apell){
        this.nom=nom;
        this.apell=apell;
    }
    saludo(){
        return this.nom+" "+this.apell;
    }
}

class anotherclass{
    constructor(objeto){
        this.objeto = objeto.nom;
    }
    mostrar(){
        return this.objeto;
    }
}

pol = new polimo("carlos","Aguila")
anc = new anotherclass(pol);


document.write(`${anc.mostrar()} says hello<br>`);
var h1 = document.createElement("h1");
var variable = "SYSADMIN";

h1.innerHTML=`saludos,<strong>${variable}</strong>`;
var contenedor = document.getElementById("conta");

const titulo = document.createElement("h1");
nombre = "Bienvenido Benjamin";

titulo.innerHTML=`${nombre}`;



contenedor.appendChild(h1);
contenedor.appendChild(titulo);


//string de json pasada a un objeto
const str = '{"nam":"manz","life":99}';

const obj = JSON.parse(str);
document.write("nombre: "+obj.nam+"<br>");
document.write("life: ",obj.life+"<br>");

document.write("<br><br><strong>second example of JSON</strong><br>")

const textojson = '{"nombre":"Carlos","apellido":"Aguila","edad":27}';

objet = JSON.parse(textojson);

document.write(objet.edad+"<br>");
document.write(objet.nombre+"<br>");
document.write(objet.apellido+"<br><br>");


let jsonuno = '{"product":"computer","price":29.9,"cantidad":20,"categoria":["Inalámbrico","Alámbrico"]}';

objetouno = JSON.parse(jsonuno);
document.write(objetouno.product+"<br>");
document.write(objetouno.price+"<br>");
document.write(objetouno.cantidad+"<br>");
document.write(objetouno.categoria[0]+"<br>");
document.write(objetouno.categoria[1]+"<br>");

var jsondos = '{"services":"tech support","Precio":39.9,"serv":["server1","server2"],"objeto":{"profession1":"SYSADMIN","profession2":"DEVELOPER","profession3":"DBA"}}';

objetodos = JSON.parse(jsondos);
document.write(objetodos.services+"<br>");
document.write(objetodos.Precio+"<br>");
document.write(objetodos.serv[0]+"<br>");
document.write(objetodos.serv[1]+"<br>");
document.write(objetodos.objeto.profession1+"<br>");
document.write(objetodos.objeto.profession2+"<br>");
document.write(objetodos.objeto.profession3+"<br>");
document.write(objetodos.objeto["profession1"]+"<br>");
document.write(objetodos.objeto["profession2"]+"<br>");
document.write(objetodos.objeto["profession3"]+"<br><br>");
document.write("Conversation from Object to JSON"+"<br>");

//declaration of a object

var ob = {
    "bread":"cake",
    "Price":0.25,
    "Quantity":3,
    "Process": function calculo(){
        return this.Price*this.Quantity;
    }
}

//document.write(ob.Process());

const jsonst = JSON.stringify(ob);

document.write(jsonst+"<br><br>");

var obo = {"color":"azul","height":10.9,"width":15.0};

jsontres = JSON.stringify(obo);
document.write(jsontres+"<br><br>");

//inheritance
class Forma {
    constructor(){
        document.write("Soy una forma geométrica."+"<br>");
    }
    gritar(){
        document.write("YEP!!");
    }
}

//clases hijas
class Cuadrado extends Forma {
    constructor(){
        super();
        document.write("DESDE EL CUADRADADO");
    }

}

class Circulo extends Forma{
    constructor(){
        super();
        document.write("From a circle");
    }
}

class Triangulo extends Forma{
    constructor(){
        super();
        document.write("From a triangule");
    }
}

ob = new Cuadrado();
document.write("<br>");
ob.gritar();
document.write("<br><br>");


ob1 = new Circulo();
document.write("<br>");
ob1.gritar();
document.write("<br><br>");

ob2 = new Triangulo();
document.write("<br>");

ob2.gritar();
document.write("<br><br>");




window.addEventListener("load", function(){
    class Telefono{
        constructor(marca){
            this.marca = marca;
        }

        anuncio(){
            return "ha llegado el nuevo teléfono de "+"<strong>"+this.marca+"</strong>";
        }
    }

    class Modelo extends Telefono{
        constructor(marca,modelo){
            super(marca);
            this.modelo=modelo;
        }

        anuncioCompleto(){
            return this.anuncio()+": el modelo "+"<strong>"+this.modelo+"</strong>";
        }
    }

    let mitelefono = new Modelo("Google","Pixel");
    mensaje.innerHTML=mitelefono.anuncioCompleto();

    tex3.innerHTML="<br>desde javascript";
})

class Person{
    constructor(profesion){
        this._profesion=profesion;
    }
    
    get profesion(){
        return this._profesion;
    }

    set profesion(prof){
        this._profesion=prof;
    }
}

per = new Person("DEVELOPER<br>");
document.write(per.profesion);
per.profesion="SYSADMIN";
document.write(per.profesion);

//console.log(window+"<br>");

//var confir = confirm("¿Estás seguro que quiere eliminar el registro");
//console.log(confirm);

//alert("llegand desde html y css hasta javascript")

valor = document.getElementById("entrada");



valor.addEventListener("keyup",function(){
    entrada = document.getElementById("entrada").value;
    document.getElementById("tex3").innerHTML=entrada;
});

var btn = document.getElementById("agregar");

btn.addEventListener("click",function(){
    var texto = document.getElementById("entry").value;
    var textoa = document.createTextNode(texto);
    document.getElementById("escri").appendChild(textoa);

})






var cambio = document.getElementById("cambio");
function alerta(){
    alert("YOU ARE AMAZING");
}

cambio.addEventListener("click",function(){
    
   setTimeout(alerta,2000);
})



