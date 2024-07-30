//sacar los siguientes datos:
//- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
//- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

const os = require('node:os');

function getOSInfo() {
    const totalMemMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const libMemMB = (os.freemem() / (1024 * 1024)).toFixed(2);

    return {
        Nombre: os.platform(),
        Tipo: os.type(),
        Versión: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: `${totalMemMB} MB`,
        MemoriaLibre: `${libMemMB} MB`
    };
}

module.exports = getOSInfo;


