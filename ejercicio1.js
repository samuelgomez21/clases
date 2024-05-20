class Universidad {
    constructor() {
        this.atenciones = {
            terminal: {
                estudiantes: 0,
                docentes: 0
            },
            oficina: {
                estudiantes: 0,
                docentes: 0
            }
        };
        this.transferencias = 0;
    }

    atenderUsuario(modulo, tipo) {
        this.atenciones[modulo][tipo]++;
    }

    transferirUsuario(origen, destino, tipo) {
        this.atenciones[origen][tipo]--;
        this.atenciones[destino][tipo]++;
        this.transferencias++;
    }

    obtenerEstadisticas() {
        console.log("Estadísticas de atención de la universidad:");
        console.log("Cantidad total de usuarios atendidos: ", this.getTotalAtendidos());
        console.log("Atendidos por día y especificación por segmento:");
        console.log("Terminal:");
        console.log("   Estudiantes:", this.atenciones.terminal.estudiantes);
        console.log("   Docentes:", this.atenciones.terminal.docentes);
        console.log("Oficina:");
        console.log("   Estudiantes:", this.atenciones.oficina.estudiantes);
        console.log("   Docentes:", this.atenciones.oficina.docentes);
        console.log("Total de transferencias realizadas: ", this.transferencias);
    }

    getTotalAtendidos() {
        return (
            this.atenciones.terminal.estudiantes +
            this.atenciones.terminal.docentes +
            this.atenciones.oficina.estudiantes +
            this.atenciones.oficina.docentes
        );
    }
}

const universidad = new Universidad();

universidad.atenderUsuario('terminal', 'estudiantes');
universidad.atenderUsuario('oficina', 'docentes');
universidad.transferirUsuario('terminal', 'oficina', 'estudiantes');
universidad.atenderUsuario('terminal', 'docentes');
universidad.atenderUsuario('oficina', 'estudiantes');

universidad.obtenerEstadisticas();