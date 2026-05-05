import { Helice } from "./Helice";
import { Alas } from "./Alas";
import { Cubierta } from "./Cubierta";
import { TrendeAterrizaje } from "./TrendeAterrizaje";

export class Aeroplano {

    constructor(
        public id:number,
        public tren:TrendeAterrizaje,   // composición
        public cubierta:Cubierta,       // composición
        public helice?:Helice,          // agregación
        public alas?:Alas               // agregación
    ){}

    ToString(){
        let msg = `Aeroplano ${this.id}: `;
        if(this.helice) msg += this.helice.ToString();
        if(this.alas) msg += this.alas.ToString();
        msg += this.tren.ToString();
        msg += this.cubierta.ToString();
        return msg;
    }
}