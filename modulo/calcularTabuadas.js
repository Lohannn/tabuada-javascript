/********************************************************************************************************************
* Autor: Lohannes
* Data: 11/02/2023
* Versão: 1.0.2.11.23
* Objetivo: Calculará as tabuadas dos números escolhidos e fará as multiplicações apenas entre os números escolhidos.
********************************************************************************************************************/

//Retorna o processamento de uma qualquer até um contador qualquer.

const calcularTabuada = function (minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador) {
    let valorMin = Number(minMultiplicando);
    let valorMax = Number(maxMultiplicando);
    let maxMulti = Number(maxMultiplicador);
    let minMultiFixo = Number(minMultiplicador);
    let resultado;
    let status = true;

    if (isNaN(valorMin) || isNaN(valorMax) || isNaN(maxMulti) || isNaN(minMultiFixo)) {
        status = false;
    } else if (valorMin > valorMax || minMultiFixo > maxMulti) {
        status = false;
    } else if(valorMin < 2 || valorMin > 100 || valorMax < 2 || valorMax > 100){
        status = false;
    } else if(minMultiFixo < 1 || minMultiFixo > 50 || maxMulti < 1 || maxMulti > 50){
        status = false;
    } else {
        while (!(valorMin > valorMax)) {
            console.log('\n\nTabuada do ' + valorMin);
            let minMulti = Number(minMultiplicador);
            while (!(minMulti > maxMulti)) {
                resultado = valorMin * minMulti;
                console.log(valorMin + ' X ' + minMulti + ' = ' + resultado);
                minMulti++;
            }
            valorMin++;
        }
    }
    return status;
};

module.exports = {
    calcularTabuada
}
