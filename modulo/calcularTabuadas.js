/********************************************************************************************************************

* Autor: Lohannes

* Data: 09/02/2023

* Versão: 1.0.2.09.23

* Objetivo: .

********************************************************************************************************************/

//Retorna o processamento de uma qualquer até um contador qualquer.

const calcularTabuada = function (minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador) {

    let valorMin = Number(String(minMultiplicando).replace(',','.'));

    let valorMax = Number(String(maxMultiplicando).replace(',','.'));

    let maxMulti = Number(String(maxMultiplicador).replace(',','.'));

    let resultado;

    let status = true;

        while(valorMin < valorMax){

                let minMulti = Number(String(minMultiplicador).replace(',','.'));

                console.log('\n\nTabuada do ' + valorMin);

            while(minMulti < maxMulti){

                resultado = valorMin * minMulti;

                console.log(valorMin + ' X ' + minMulti + ' = ' + resultado);

                minMulti++;

                }

                valorMin++;

         }

    

    return status;

    

};

calcularTabuada(0, 10, 5, 12);

