 class Pan{
    constructor(nombre,cantidad){
        this._nombre=nombre;
        this._cantidad=cantidad;
        console.log("Bienvenidos al Pan")
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nom){
        this._nombre=nom;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cant){
        this._cantidad=cant;
    }
}


export class Hojitas extends Pan {
    constructor(nombre,cantidad,cingred){
        super(nombre,cantidad);
        this._cingred = cingred;
    }

    registros(){
        console.log("Pan completo: "+this._nombre+" "+this._cantidad+" "+this._cingred);
    }

    set cingred(ingre){
        this._cingred=ingre;
    }

    get cingred(){
        return this._cingred;
    }

}


export class Persona1{
    constructor(firstname,lastname,anio){
        this._firstname=firstname;
        this._lastname=lastname;
        this._anio=anio;
    }

    saludo(){
        return this._firstname+" "+this._lastname;
    }
}

export class proce{
    constructor(edad){
        this._edad=edad;
    }

    procesar(objeto){

        for (const [key,value] of Object.entries(objeto)) {
            console.log(value);
        }

        //creating a map
        let array = [
            {
                "id":1,
                "nombre":"Carlos",
                "apellido":"Aguila"
            },
            {
                "id":2,
                "nombre":"Benjamin",
                "apellido":"Aguila Menjivar"
            },
            {
                "id":3,
                "nombre":"Nathaly",
                "apellido":"Menjivar"
            }
        ];

        /*const salida = array.map(({nombre,apellido})=>{
            console.log(" La persona se llama: "+nombre+" y es de apellido: "+apellido);
        })*/

        array.map(({id,nombre,apellido})=>{
            console.log(`ID: ${id} NOMBRE: ${nombre}  APELLIDO: ${apellido}`);
        })
    }
}
