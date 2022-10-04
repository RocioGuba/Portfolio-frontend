export class persona{
    id?: number;         /*poniendo signo de interrogacion indicamos que ese dato no es necesario aclarar*/
    nombre: string;
    apellido: string;
    titulo: string;
    img: string;

    /*son los datos declarados en netbeans(carpeta"persona.java")*/
    constructor( nombre: string, apellido: string, titulo: string, img: string ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.img = img;

    }
}