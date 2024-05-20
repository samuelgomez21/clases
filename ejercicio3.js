class Habitacion {
    constructor(tipo, capacidad, fumadores) {
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.fumadores = fumadores;
        this.reservas = [];
    }

    agregarReserva(reserva) {
        if (!this.estaLlena()) {
            this.reservas.push(reserva);
            console.log(`Se ha realizado la reserva en la habitación ${this.tipo}`);
        } else {
            console.log(`La habitación ${this.tipo} está llena para las fechas solicitadas.`);
        }
    }

    estaLlena() {
        let personasOcupadas = this.reservas.reduce((total, reserva) => total + reserva.numPersonas, 0);
        return personasOcupadas >= this.capacidad;
    }
}

class Reserva {
    constructor(nombre, pais, numPersonas, fechaInicio, fechaFin, trajoMascota) {
        this.nombre = nombre;
        this.pais = pais;
        this.numPersonas = numPersonas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.trajoMascota = trajoMascota;
    }
}

class Hotel {
    constructor() {
        this.habitaciones = {
            individual: new Habitacion("individual", 2, false),
            doble: new Habitacion("doble", 4, false),
            familiar: new Habitacion("familiar", 6, false)
        };
        this.habitacionesFumadores = {
            individual: new Habitacion("individual (fumadores)", 2, true),
            doble: new Habitacion("doble (fumadores)", 4, true),
            familiar: new Habitacion("familiar (fumadores)", 6, true)
        };
        this.estadisticasReservas = [];
    }

    hacerReserva(nombre, pais, tipoHabitacion, fumadores, numPersonas, fechaInicio, fechaFin, trajoMascota) {
        let habitacion;
        if (fumadores) {
            habitacion = this.habitacionesFumadores[tipoHabitacion];
        } else {
            habitacion = this.habitaciones[tipoHabitacion];
        }
        const reserva = new Reserva(nombre, pais, numPersonas, fechaInicio, fechaFin, trajoMascota);
        habitacion.agregarReserva(reserva);
        this.estadisticasReservas.push(reserva);
    }

    obtenerEstadisticas() {
        return this.estadisticasReservas;
    }
}

const hotel = new Hotel();

hotel.hacerReserva("Juan", "España", "individual", false, 1, "2024-06-01", "2024-06-03", false);
hotel.hacerReserva("Maria", "Francia", "familiar", false, 4, "2024-06-02", "2024-06-05", true);

console.log(hotel.obtenerEstadisticas());