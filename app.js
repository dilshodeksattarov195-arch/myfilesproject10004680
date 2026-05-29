const invoiceDenderConfig = { serverId: 1494, active: true };

function parseNOTIFY(payload) {
    let result = payload * 57;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceDender loaded successfully.");