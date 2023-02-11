/********************************************************************************************************************
* Autor: Lohannes
* Data: 11/02/2023
* Versão: 1.0.2.11.23
* Objetivo: Aplicativo que criará tabuadas na preferência do usuário.
********************************************************************************************************************/

var readline = require('readline');
var tabuada = require('./modulo/calcularTabuadas.js');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite por qual tabuada irá começar entre 2 e 100: ', function(tabuadaInicial){
    let inicio = tabuadaInicial.replace(',','.');
    entradaDados.question('Digite qual será a última tabuada entre 2 e 100: ', function(tabuadaFinal){
        let fim = tabuadaFinal.replace(',','.');
        entradaDados.question('Digite por qual número começará as multiplicações entre 1 e 50: ', function(multiplicadorInicial){
            let minMulti = multiplicadorInicial.replace(',','.');
            entradaDados.question('Digite em qual número terminará as multiplicações entre 1 e 50: ', function(multiplicadorFinal){
                let maxMulti = multiplicadorFinal.replace(',','.');

                if( inicio === '' || fim === '' || minMulti === '' || maxMulti === ''){
                    console.log('ERRO: Todos os dados devem estar preenchidos.');
                    entradaDados.close()
                } else if (isNaN(inicio) || isNaN(fim) || isNaN(minMulti) || isNaN(maxMulti)){
                    console.log('ERRO: Todos os dados devem ser números.');
                    entradaDados.close()
                } else if (inicio < 2 || inicio > 100 || fim < 2 || fim > 100){
                    console.log('ERRO: Não serão criadas tabuadas de números menores que 2 ou maiores que 100.');
                    entradaDados.close()
                } else if (minMulti < 1 || minMulti > 50 || maxMulti < 1 || maxMulti > 50){
                    console.log('ERRO: Os números não serão multiplicados por valores menores que 1 ou maiores que 50.');
                    entradaDados.close()
                } else if (Number(inicio) > Number(fim)){
                    console.log('ERRO: A tabuada inicial não pode ser maior que a tabuada final.');
                    entradaDados.close()
                } else if (Number(minMulti) > Number(maxMulti)){
                    console.log('ERRO: O multiplicador inicial não pode ser maior que o multiplicador final.');
                    entradaDados.close()
                } else {
                    let criadorTabuada = tabuada.calcularTabuada(inicio, fim, minMulti, maxMulti);

                    if(criadorTabuada === false){
                        entradaDados.close()
                    } else {
                        entradaDados.close()
                    }
                }
            })
        })
    })
})