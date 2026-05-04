class Turbina {
    private numTurbinas:number = 0;

    public constructor(n:number) {
        this.numTurbinas = n;
    }

    public ToString() {
        return this.numTurbinas + " Turbina/s";
    }
}

class Helice {
    private numHelices:number = 0;

    public constructor(n:number) {
        this.numHelices = n;
    }

    public ToString() {
        return this.numHelices + " hélice/s ";
    }
}

// 🔴 COMPOSICIÓN
class TrendeAterrizaje {
    private numNeumaticos:number = 0;
    private numAmortiguadores:number= 0;
    private fijoRetractil:boolean = false;

    public constructor(a:number, b:number, c:boolean) {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.fijoRetractil = c;
    }

    public ToString() {
        let mensaje = "Tren de Aterrizaje: ";
        if (this.fijoRetractil) mensaje += "Retráctil, ";
        mensaje += this.numNeumaticos + " neumáticos, " + this.numAmortiguadores + " amortiguadores. ";
        return mensaje;
    }
}

// 🔴 COMPOSICIÓN
class Cubierta {
    private cabinaTripulacion:boolean;
    private cabinaVuelo:boolean;
    private sistemaEmergencia:boolean;
    private numTanquesCombustible:number;
    private numPuertasSalidas:number;

    public constructor(a:boolean,b:boolean,c:boolean,d:number,e:number) {
        this.cabinaTripulacion = a;
        this.cabinaVuelo = b;
        this.sistemaEmergencia = c;
        this.numTanquesCombustible = d;
        this.numPuertasSalidas = e;
    }

    public ToString() {
        return `Cubierta: ${this.numTanquesCombustible} tanques, ${this.numPuertasSalidas} puertas. `;
    }
}

// 🟡 AGREGACIÓN
class Alas {
    private numAlasFrente:number;
    private numAlasCola:number;

    public constructor(a:number, b:number) {
        this.numAlasFrente = a;
        this.numAlasCola = b;
    }

    public ToString() {
        return `Alas: ${this.numAlasFrente} frontales, ${this.numAlasCola} traseras. `;
    }
}

// 🟡 AGREGACIÓN
class Aeroplano {

    // Agregación
    private helice?: Helice;
    private alas?: Alas;

    // Composición
    private trenAterrizaje: TrendeAterrizaje;
    private cubierta: Cubierta;

    constructor(
        tren:TrendeAterrizaje,
        cubierta:Cubierta,
        helice?:Helice,
        alas?:Alas
    ){
        this.trenAterrizaje = tren;
        this.cubierta = cubierta;
        this.helice = helice;
        this.alas = alas;
    }

    public ToString() {
        let mensaje = "Aeroplano: ";
        if(this.helice) mensaje += this.helice.ToString();
        if(this.alas) mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}

// TEST
let helice = new Helice(3);
let tren = new TrendeAterrizaje(2,3,true);
let alas = new Alas(2,3);
let cubierta = new Cubierta(true,true,true,4,4);

let aero = new Aeroplano(tren, cubierta, helice, alas);
console.log(aero.ToString());