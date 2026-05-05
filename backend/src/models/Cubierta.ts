export class Cubierta {
    constructor(
        private cabinaTripulacion:boolean,
        private cabinaVuelo:boolean,
        private sistemaEmergencia:boolean,
        private tanques:number,
        private puertas:number
    ){}

    ToString(){
        return `Cubierta: ${this.tanques} tanques, ${this.puertas} puertas `;
    }
}