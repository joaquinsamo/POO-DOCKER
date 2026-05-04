export class Alas {
    constructor(private frente:number, private cola:number){}

    ToString(){
        return `Alas: ${this.frente} frontales, ${this.cola} traseras `;
    }
}