const os = require('node:os');

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const networkInfo = {};

    for (const [interfaceName, interfaces] of Object.entries(networkInterfaces)) {
        networkInfo[interfaceName] = interfaces.map(interface => ({
            Familia: interface.family,
            Dirección: interface.address,
            Interno: interface.internal
        }));
    }

    return networkInfo;
}

module.exports = getNetworkInfo;
