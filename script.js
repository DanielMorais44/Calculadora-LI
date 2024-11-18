let valores = "";

function addVal(i) {
    if (valores === "0" && i === "0") return;
    if (valores === "0" && !isNaN(i)) valores = "";

    valores += i;
    atualizarVisor();
}

function operation(i) {
    if (i === "C") {
        valores = "";
    } else if (i === "⌫") {
        valores = valores.slice(0, -1);
    } else {
        const ultimoCaractere = valores[valores.length - 1];
        if (["+", "-", "*", "/"].includes(ultimoCaractere) && ["+", "-", "*", "/"].includes(i)) {
            valores = valores.slice(0, -1);
        }
        valores += i;
    }
    atualizarVisor();
}

function calculate() {
    try {
        if (["+", "-", "*", "/"].includes(valores[valores.length - 1])) {
            valores = valores.slice(0, -1);
        }

        const resultado = Function(`return ${valores}`)();
        valores = resultado.toString();
    } catch (e) {
        valores = "Erro";
    }
    atualizarVisor();
}

function atualizarVisor() {
    document.getElementById("resultados").value = valores || "0";
}
