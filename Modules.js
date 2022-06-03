//add modules
import { Hojitas, Persona1,proce } from "./Clases.js";


console.log("Importaciones de Modules");

//var chiquipan = new Pan("hoja",12);
var pancomp = new Hojitas("pañuelo",12,4);
pancomp.registros();

pancomp.nombre="Margarita";
pancomp.cantidad=24;
pancomp.cingred=5;
console.log(pancomp.nombre);
console.log(pancomp.cantidad);
console.log(pancomp.cingred);
pancomp.registros();


var perso = new Persona1("carlos","aguila",2022);
var pro = new proce(1994);

pro.procesar(perso);

alert("MASTERING THE DOM(Document Object)")
var eti1 = document.createElement("h1");
var eti2 = document.createElement("h2");
var eti3 = document.createElement("h3");
var eti4 = document.createElement("h4");
var etiq5 = document.createElement("h5");
var etiq6 = document.createElement("h6");

var etiq7 = document.createTextNode("Saludos");
var etiq8 = document.createComment("comentario");
var etiq9 = document.createElement("h1");
etiq9.textContent="FROM JAVASCRIPT,ME THE SYSADMIN";
etiq9.id="titu";



var contene = document.getElementById("contai");
contene.appendChild(etiq9);

const caja = document.createElement("div"); //<div></div>
caja.textContent="Ejemplo";                 //<div>Ejemplo</div>


const app = document.getElementById("titu");

app.insertAdjacentElement("beforeend",caja);
console.log(app.isConnected)

//app.remove();
console.log(app.isConnected)

var h2 = document.createElement("h2");

h2.textContent="Sysadmin desde lINUX";

var h3 = document.createElement("h3");
var nodetext = document.createTextNode("CREANDO UN NODO DESDE LINUX");

h3.appendChild(nodetext);

app.appendChild(h2);
app.appendChild(h3);
console.log(h3.isConnected)

var divc = document.createElement("div");
divc.textContent="CONTENEDOR MUTANTE";
divc.id="idmutante";


contene.appendChild(divc);

function cargar(){
    fetch("Personas.json")
    .then(response => response.json())
    .then(usuari=> {
        usuari.forEach(usuari => {
            const row = document.createElement("tr");
            row.innerHTML+=`
            <td> ${ usuari.id } </td>
            <td>${ usuari.nombre }</td>
            <td>${ usuari.apellido }</td>
            </tr>`;
            document.getElementById("idmutante").appendChild(row);
        });
    })
}

cargar();



function show(){
    fetch("Usuarios.json")
    .then(response =>response.json())
    .then(usuario =>{
        usuario.forEach(usuario=>{
            var row = document.createElement("tr");
            row.innerHTML=`
            <tr>${usuario.id}</tr>
            <tr>${usuario.nombre}</tr>
            <tr>${usuario.apellido}</tr>
            <tr>${usuario.nacionalidad}</tr>
            `;
            document.getElementById("idmutante").appendChild(row);
        })
    })
}

show();

//storing data
const obje = {nombre:"carlos",apellido:"AGUILA"};
var json = JSON.stringify(obje);
localStorage.setItem("myjson",json);

//retrieving data
var text = localStorage.getItem("myjson");
let obj = JSON.parse(text);




var eleme = document.createElement("h1");
eleme.textContent=obj.nombre+" "+obj.apellido;
document.getElementById("idmutante").appendChild(eleme);

var encabezado = document.getElementById("encabezado");

var nuele = document.createElement("h3");
nuele.textContent=`Url:${location.href}`;

encabezado.appendChild(nuele);

var nuevo = document.createElement("button");
nuevo.type="button";
nuevo.id="retroceder";
nuevo.textContent="Retroceder";

encabezado.appendChild(nuevo);

var button = document.getElementById("retroceder");
button.addEventListener("click", function(){
    var nuev = document.createElement("h4");
    nuev.textContent="datos: "+navigator.cookieEnabled+" "+navigator.product+" "+navigator.appName+" "+navigator.appCodeName+" "+navigator.appVersion+"=>"+navigator.userAgent+""+navigator.platform+" =>"+navigator.language+""+navigator.languages+""+navigator.onLine+""+navigator.javaEnabled();
    encabezado.appendChild(nuev);
})

var id = document.getElementById("timemout");
id.addEventListener("click",function(){
    
  let salu = setTimeout(function(){
        window.alert("¿Desea eliminar el registro?");
    },3000)
})


var id2 = document.getElementById("timemout2");

id2.addEventListener("click",function(){
    clearTimeout(salu);
})

function myfun(){
    var hora = new Date();
    
    
    document.getElementById("demo").innerHTML=hora.toLocaleTimeString();
}

setInterval(myfun,1000)

let cookie = document.cookie="username=carlos; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";

console.log(cookie);





try {
    alert("saludo");
} catch (error) {
    var meserr = document.createElement("h3");
    meserr.textContent=error.message;
    document.getElementById("demo").insertAdjacentElement("afterend",meserr);
}finally{
    alert("finalizado");
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
         day = "Monday";
        break;
    case 2:
         day = "tuesday";
        break;
    case 3:
         day = "Wednesday";
        break;
    case 4:
         day = "Thursday";
        break;
    case 5:
         day = "Friday";
        break;
    case 6:
         day = "Saturday";
         break;
}

var eto = document.createElement("h3");
eto.textContent=day;
document.getElementById("demo").insertAdjacentElement("afterend",eto);

let secion = document.getElementById("seccion");

let nuevoele = document.createElement("p");
nuevoele.textContent="NUMERO 0";

secion.insertBefore(nuevoele,secion.firstChild);
secion.insertAdjacentText("afterend","LISTEN TO MAGO DE OZ");

let dele = document.getElementById("eliminar");

dele.addEventListener("click",function(){
    document.getElementsByTagName("p")[0].remove();
})

let mostra = document.getElementById("mostrar");

mostra.addEventListener("click",()=>{
    alert("FUNCION SIMPLIFICADA");
});


//arrow function

const proceso = (unidad,precio)=> "Resultado: "+unidad*precio

console.log(proceso(10,20))

//anonymous function



try {
    var programming = function(param1) {
        return "She likes to attract people's attention"+" ";
    }
    var designer = () => {
        return "Designing in the frontend"
    };

    console.log(programming(10));
    console.log(designer("carlos"))
    console.log(document.defaultView)
    console.log(window.outerHeight);
    console.log(window.performance);
    console.log("TERMINATOR");
    
} catch (error) {
    console.log(error.message)
}



for (let i = 0; i < 10; i++) {
    const element = i;
   /* var h4 = document.createElement("h4");
    h4.textContent=`numero: <strong>${element}</strong>`;
*/

    var input = document.createElement("input");
    input.type="text";
    input.classList=entrada;
    input.value=`numero: ${element}`;
    document.getElementById("mostrar").insertAdjacentElement("afterend",input);
    var salto = document.createElement("br");
    document.getElementById("entrada").insertAdjacentElement("afterend",salto);

    
}

const person = {
    nomb:"carlos",
    ape:"AGUILA",
    edad:27
}


for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
       var crear = document.createElement("p");
       crear.textContent=person[key];
       document.getElementById("mostrar").insertAdjacentElement("afterend",crear);
    }
}

var nombres = ["Sysadmin","Designer","Programmer"];

for (const iterator of nombres) {
    console.log("Total: "+iterator);
}

console.log("<br>");

for (const key in nombres) {
    if (Object.hasOwnProperty.call(nombres, key)) {
        const element = nombres[key];
        console.log("Total: "+element);
    }
}

nombres.forEach((value,index,array)=> 
    console.log("Foreach salida: "+value+"INDEX Es: "+index+"El array es: "+array)
)

console.log("<br>");

const sillas = new Array("carlos","benjamin","nathaly");
console.log(sillas[1])

function nada(valor1){
   var valor2=valor1[0]
   return "Pasar un array como parámetro: "+valor2;
}

console.log(nada([10]))

console.log("arrays methods");

const colours = ["blue","red","green","white"];

console.log(colours.join(","))
colours.pop();
console.log(colours.join(","))
colours.push("dodgerblue")
console.log(colours);
console.log(colours.pop())
console.log(colours);
colours.push("black");
colours.push("purple");
console.log(colours);

colours.shift();
console.log(colours);
console.log(colours.shift())

colours.unshift("Yellow");
console.log(colours);


const nombre = ["carlos","benjamin"];
const ladys = ["nathaly","jazmin"];

ladys[ladys.length]="adelaida";
const union = nombre.concat(ladys);

console.log(union);



console.log(ladys);


console.log("Usando Arrays METHODS");

const teclas = ["A","B","C","D","E"];
const celular = ["iphone","samsung","nokia","LG","Alcatel","Huawei"];
const monedas = ["0.10","0.25","1.00"]


teclas.push("GO");
console.log("Teclas: "+teclas);
console.log(teclas.push("GoMobile"));
console.log(teclas);
teclas.pop();
console.log(teclas);
teclas.shift();
console.log(teclas);
teclas.unshift("Emerson");
console.log(teclas);

console.log(teclas.concat(celular,monedas));
console.log(teclas);
teclas.splice(2,0,"nuevo1","nuevo2");
console.log(teclas);
teclas.splice(3,3,"carlos","benjamin","shortcomings");
console.log(teclas)
teclas.splice(2,1,"luz")
console.log(teclas)

teclas.splice(0,3);
console.log(teclas);

console.log("Method Slice");

console.log(teclas.slice(1,3));

const frutas = ["kiwi","fresa","banana","pera","apple"];
console.log(frutas);
console.log(frutas.sort());
console.log(frutas.reverse());

const numeros = [10,200,500,5,1,400];

console.log(numeros);
console.log(numeros.sort((a,b)=>b - a
))
console.log("SYSADMIN","font-size: 40px;")
console.log(numeros);
console.log("Mayor: "+Math.max.apply(null,numeros));
console.log("Menor: "+Math.min.apply(null,numeros));

console.log(numeros);

const cadauno = [20,40,21,19,29,30];

const valor = cadauno.every(age=>{
   if (age>18) {
       return true;
   }else{
       return false;
   }
});

console.log(valor);

const lista = ["carlos","benjamin","nathaly","jasmin","carlos"];

console.log("Finally: "+lista.indexOf("carlos"));
console.log("Finally: "+lista.indexOf("benjamin"));
console.log("Finally: "+lista.indexOf("nathaly"));
console.log("Finally: "+lista.indexOf("jasmin"));


//are numbers even or odd?
const cuentas = [20,40,2,10,8,16];

const resul = cuentas.every(element =>{
    return element%2==0
})

console.log("Resultado: "+resul)

const impar = [3,9,21,41,87,81];

const impare = impar.every(ele=>{
    return ele%2==1;
})
console.log("Resultado de Impar: "+impare);


const positivo = [10,89,1,3,5];
const posre = positivo.every(ele=>{
    return ele>0;
})

console.log("El elemento es positivo: "+posre)

//ternary operator

var flecha = para1 =>{
    return para1==10? "par":para1==15? "Impar":"nada"
}

console.log(flecha(9));


//method every with arrays

var clavos = ["clavo1","clavo2","clavo3","clavo4","clavo5"]
var camisas = [10,30,5,20,24,2,15];

var inversion = clavos.reverse();
var cami = camisas.reverse();
console.log(inversion);
console.log(cami);

inversion.unshift("clavo6");
console.log(inversion.join(":"))

console.log(inversion.includes("clavo6",3));

var array = [10,20,40,50,60,80,90,100];
var noarray = 'a';

var cierto = Array.isArray(array);
var nocierto = Array.isArray(noarray);

console.log("Respuesta: 1 "+cierto+"\n"+"Respuesta: 2 "+nocierto)
console.log("Tercera Respuesta: "+Array.isArray(noarray))


//method from in arrays

const nuevoarra = Array.from(array);
nuevoarra[1]=200;

console.log("Primer array: "+array)
console.log("Segundo     : "+ nuevoarra);

//my chart
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  //segundo

  const labels2 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data2 = {
    labels: labels,
    datasets: [{
      label: 'My Second dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(30, 99, 132)',
      data2: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config2 = {
    type: 'line',
    data: data2,
    options: {}
  };

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );


//otro
const labels3 = Utils.months({count: 7});
const data3 = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data3: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
// </block:setup>

// <block:config:0>
const config3 = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
// </block:config>

module.exports = {
  actions: [],
  config: config,
};

var tecl = ["carlos","benjamin","nathaly","jazmin","karina"];

var respu =tecl.find(te=>{
    return te.includes("az")
})

console.log(respu);

