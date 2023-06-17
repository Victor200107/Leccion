export class Persona {
    Id: number = 1;
    cedula: string;
    nombre:String;
    apellido:String;
    fecha:String;
    constructor(cedula: string,nombre:String,apellido:String,fecha:String) {
        this.cedula = cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
    }
}