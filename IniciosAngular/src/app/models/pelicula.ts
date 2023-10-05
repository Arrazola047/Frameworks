export class Pelicula{
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title: string, year: number, image: string){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/

    // Nos podemos ahorrar todo el cacho de codigo anterior definiendo directamente todo en el constructor, esto es especialmente util cuando tenemos modelos especialmente grandes

    constructor(
        public title: string,
        public year: number,
        public image: string
    ){}
}