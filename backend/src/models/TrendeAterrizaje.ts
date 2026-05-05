export class TrendeAterrizaje {
    constructor(
        private neumaticos:number,
        private amortiguadores:number,
        private retractil:boolean
    ){}

    ToString(){
        return `Tren: ${this.neumaticos} neumáticos, ${this.amortiguadores} amortiguadores `;
    }
}