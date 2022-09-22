export class persona{
    id?: number;         /*poniendo signo de interrogacion indicamos que ese dato no es necesario aclarar*/
    nombre: String;
    apellido: String;
    img: String;

    /*son los datos declarados en netbeans*/
    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;


    } 
}