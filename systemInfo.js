// completar y require

const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

console.log('Información del sistema operativo:');
const osInfo = getOSInfo();
for (const [key, value] of Object.entries(osInfo)) {
    console.log(`${key}: ${value}`);
}

console.log('Información de las interfaces de red:');
const networkInfo = getNetworkInfo();
for (const [interfaceName, interfaces] of Object.entries(networkInfo)) {
    console.log(`Interfaz ${interfaceName}:`);
    interfaces.forEach(interface => {
        console.log(`  Familia: ${interface.Familia}`);
        console.log(`  Dirección: ${interface.Dirección}`);
        console.log(`  Interno: ${interface.Interno}`);
    });
}
