//Definimos el arreglo que estaremos usando parqa almacenar todas las conversiones

let arrayDivisaOrigen = []; //Array con el valor numerico
let arrayDivisaFinal = [];
let arrayMonedaOrigen = []; //Array con el nombre de la moneda
let arrayMonedaFinal =[];

//Constante donde haremos una tabla con las conversiones
const containerTabla = document.getElementById("containerTabla");

//Accedemos a los botones mediante la API DOM
const btnConvertir = document.getElementById("btnConvertir");

let selectOrigen = document.getElementById("selectOrigen").value;
let selectFinal = document.getElementById("selectFinal").value;

//Agregamos el evento al respectivo boton
btnConvertir.addEventListener("click", addDivisa);

//Codificamos el evento antes colocado
function addDivisa(){

    let valorOrigen = document.getElementById("inputValorBase").value;
    let valorFinal;
    
    //Realizamos las diversas convinaciones de divisas

    //Moneda origen DOLAR ESTADOUNIDENSE
    if (selectOrigen == "0" && selectFinal == "1") {
        valorFinal = valorOrigen * 19.50;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Estadounidense");
        arrayMonedaFinal.push("Peso Mexicano");

        alert(`El valor es:` + valorFinal);
    }
    
    if (selectOrigen == "0" && selectFinal == "2") {
        valorFinal = valorOrigen * 8.75;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Estadounidense");
        arrayMonedaFinal.push("Colón Salvadoreños");
    }

    if (selectOrigen == "0" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.88;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "0" && selectFinal == "4") {
        valorFinal = valorOrigen * 1.35;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "0" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.99;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "0" && selectFinal == "6") {
        valorFinal = valorOrigen * 1.55;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "0" && selectFinal == "7") {
        valorFinal = valorOrigen * 1.40;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "0" && selectFinal == "8") {
        valorFinal = valorOrigen * 5038.96;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "0" && selectFinal == "9") {
        valorFinal = valorOrigen * 1406.50;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "0" && selectFinal == "10") {
        valorFinal = valorOrigen * 5.04;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "0" && selectFinal == "11") {
        valorFinal = valorOrigen * 80.04;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "0" && selectFinal == "12") {
        valorFinal = valorOrigen * 7.82;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen PESO MEXICANO

    if (selectOrigen == "1" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.051;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "1" && selectFinal == "2") {
        valorFinal = valorOrigen * 0.45;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Colón Salvadoreños");
    }

    if (selectOrigen == "1" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.045;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "1" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.069;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "1" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.051;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "1" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.080;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "1" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.072;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "1" && selectFinal == "8") {
        valorFinal = valorOrigen * 259.39;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "1" && selectFinal == "9") {
        valorFinal = valorOrigen * 72.23;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "1" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.26;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "1" && selectFinal == "11") {
        valorFinal = valorOrigen * 4.21;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "1" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.40;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Mexicano");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen COLONES SALVADOREÑOS

    if (selectOrigen == "2" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.11;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "2" && selectFinal == "1") {
        valorFinal = valorOrigen * 2.23;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "2" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.10;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "2" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.15;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "2" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.11;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "2" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.18;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "2" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.16;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "2" && selectFinal == "8") {
        valorFinal = valorOrigen * 579.61;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "2" && selectFinal == "9") {
        valorFinal = valorOrigen * 161.00;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "2" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.58;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "2" && selectFinal == "11") {
        valorFinal = valorOrigen * 9.39;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "2" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.89;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Colón Salvadoreños");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen LIBRA ESTERLINA

    if (selectOrigen == "3" && selectFinal == "0") {
        valorFinal = valorOrigen * 1.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "3" && selectFinal == "1") {
        valorFinal = valorOrigen * 22.05;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "3" && selectFinal == "2") {
        valorFinal = valorOrigen * 9.87;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "3" && selectFinal == "4") {
        valorFinal = valorOrigen * 1.53;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "3" && selectFinal == "5") {
        valorFinal = valorOrigen * 1.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "3" && selectFinal == "6") {
        valorFinal = valorOrigen * 1.75;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "3" && selectFinal == "7") {
        valorFinal = valorOrigen * 1.59;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "3" && selectFinal == "8") {
        valorFinal = valorOrigen * 5758.17;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "3" && selectFinal == "9") {
        valorFinal = valorOrigen * 1590.28;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "3" && selectFinal == "10") {
        valorFinal = valorOrigen * 5.69;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "3" && selectFinal == "11") {
        valorFinal = valorOrigen * 92.57;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "3" && selectFinal == "12") {
        valorFinal = valorOrigen * 8.83;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Libra Esterlina");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen DOLAR CANADIENSE

    if (selectOrigen == "4" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.74;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "4" && selectFinal == "1") {
        valorFinal = valorOrigen * 14.46;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "4" && selectFinal == "2") {
        valorFinal = valorOrigen * 6.48;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "4" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.65;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "4" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.74;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "4" && selectFinal == "6") {
        valorFinal = valorOrigen * 1.15;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "4" && selectFinal == "7") {
        valorFinal = valorOrigen * 1.04;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "4" && selectFinal == "8") {
        valorFinal = valorOrigen * 3785.10;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "4" && selectFinal == "9") {
        valorFinal = valorOrigen * 104.35;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "4" && selectFinal == "10") {
        valorFinal = valorOrigen * 3.75;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "4" && selectFinal == "11") {
        valorFinal = valorOrigen * 60.70;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "4" && selectFinal == "12") {
        valorFinal = valorOrigen * 5.79;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Canadiense");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen FRANCO SUIZO

    if (selectOrigen == "5" && selectFinal == "0") {
        valorFinal = valorOrigen * 1;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "5" && selectFinal == "1") {
        valorFinal = valorOrigen * 19.61;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "5" && selectFinal == "2") {
        valorFinal = valorOrigen * 8.78;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "5" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.89;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "5" && selectFinal == "4") {
        valorFinal = valorOrigen * 1.36;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "5" && selectFinal == "6") {
        valorFinal = valorOrigen * 1.56;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "5" && selectFinal == "7") {
        valorFinal = valorOrigen * 1.41;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "5" && selectFinal == "8") {
        valorFinal = valorOrigen * 5109.85;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "5" && selectFinal == "9") {
        valorFinal = valorOrigen * 1413.21;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "5" && selectFinal == "10") {
        valorFinal = valorOrigen * 5.06;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "5" && selectFinal == "11") {
        valorFinal = valorOrigen * 82.46;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "5" && selectFinal == "12") {
        valorFinal = valorOrigen * 7.87;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Franco Suizo");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen DOLAR AUSTRALIANO

    if (selectOrigen == "6" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.65;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "6" && selectFinal == "1") {
        valorFinal = valorOrigen * 12.65;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "6" && selectFinal == "2") {
        valorFinal = valorOrigen * 5.67;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "6" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.57;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "6" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.87;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "6" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.64;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "6" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.91;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "6" && selectFinal == "8") {
        valorFinal = valorOrigen * 3296.91;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "6" && selectFinal == "9") {
        valorFinal = valorOrigen * 910.22;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "6" && selectFinal == "10") {
        valorFinal = valorOrigen * 3.26;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "6" && selectFinal == "11") {
        valorFinal = valorOrigen * 53.08;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "6" && selectFinal == "12") {
        valorFinal = valorOrigen * 5.07;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Australiano");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen DOLAR SINGAPURENSE

    if (selectOrigen == "7" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.71;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "7" && selectFinal == "1") {
        valorFinal = valorOrigen * 13.92;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "7" && selectFinal == "2") {
        valorFinal = valorOrigen * 6.24;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "7" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.63;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "7" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.96;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "7" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.71;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "7" && selectFinal == "6") {
        valorFinal = valorOrigen * 1.10;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "7" && selectFinal == "8") {
        valorFinal = valorOrigen * 3630.15;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "7" && selectFinal == "9") {
        valorFinal = valorOrigen * 1001.67;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "7" && selectFinal == "10") {
        valorFinal = valorOrigen * 3.59;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "7" && selectFinal == "11") {
        valorFinal = valorOrigen * 58.45;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "7" && selectFinal == "12") {
        valorFinal = valorOrigen * 5.58;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Dolar Singapurense");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen PESO COLOMBIANO

    if (selectOrigen == "8" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.00020;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "8" && selectFinal == "1") {
        valorFinal = valorOrigen * 0.0039;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "8" && selectFinal == "2") {
        valorFinal = valorOrigen * 0.0018;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "8" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.00018;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "8" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.00027;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "8" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.00020;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "8" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.00031;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "8" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.00028;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "8" && selectFinal == "9") {
        valorFinal = valorOrigen * 0.28;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "8" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.0010;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "8" && selectFinal == "11") {
        valorFinal = valorOrigen * 0.016;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "8" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.0016;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Peso Colombiano");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }

    //Moneda origen WON SURCOREANO

    if (selectOrigen == "9" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.00071;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "9" && selectFinal == "1") {
        valorFinal = valorOrigen * 0.014;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "9" && selectFinal == "2") {
        valorFinal = valorOrigen * 0.0062;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "9" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.00018;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "9" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.00096;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "9" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.00071;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "9" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.0011;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "9" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.00100;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "9" && selectFinal == "8") {
        valorFinal = valorOrigen * 3.63;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "9" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.0036;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "9" && selectFinal == "11") {
        valorFinal = valorOrigen * 0.058;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "9" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.0056;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Won Surcoreano");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen REAL BRASILEÑO

    if (selectOrigen == "10" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.20;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "10" && selectFinal == "1") {
        valorFinal = valorOrigen * 3.86;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "10" && selectFinal == "2") {
        valorFinal = valorOrigen * 1.73;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "10" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.17;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "10" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.27;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "10" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.20;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "10" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.31;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "10" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.28;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "10" && selectFinal == "8") {
        valorFinal = valorOrigen * 1006.95;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "10" && selectFinal == "9") {
        valorFinal = valorOrigen * 277.68;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "10" && selectFinal == "11") {
        valorFinal = valorOrigen * 16.21;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Rupia India");
    }

    if (selectOrigen == "10" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.65;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen RUPIA INDIA

    if (selectOrigen == "11" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.012;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "11" && selectFinal == "1") {
        valorFinal = valorOrigen * 0.24;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "11" && selectFinal == "2") {
        valorFinal = valorOrigen * 0.11;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "11" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.011;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "11" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.016;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "11" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.012;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "11" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.019;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "11" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.017;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "11" && selectFinal == "8") {
        valorFinal = valorOrigen * 63.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "11" && selectFinal == "9") {
        valorFinal = valorOrigen * 17.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "11" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.062;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Rupia India");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "11" && selectFinal == "12") {
        valorFinal = valorOrigen * 0.095;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Real Brasileño");
        arrayMonedaFinal.push("Quetzal Guatemalteco");
    }


    //Moneda origen QUETZAL GUATEMALTECO

    if (selectOrigen == "12" && selectFinal == "0") {
        valorFinal = valorOrigen * 0.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Dolar Estadounidense");
    }
    
    if (selectOrigen == "12" && selectFinal == "1") {
        valorFinal = valorOrigen * 2.50;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Pesos Mexicanos");
    }

    if (selectOrigen == "12" && selectFinal == "2") {
        valorFinal = valorOrigen * 1.12;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Colón Salvadoreño");
    }

    if (selectOrigen == "12" && selectFinal == "3") {
        valorFinal = valorOrigen * 0.11;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Libra Esterlina");
    }

    if (selectOrigen == "12" && selectFinal == "4") {
        valorFinal = valorOrigen * 0.17;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Dolar Canadiense");
    }

    if (selectOrigen == "12" && selectFinal == "5") {
        valorFinal = valorOrigen * 0.13;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Franco Suizo");
    }

    if (selectOrigen == "12" && selectFinal == "6") {
        valorFinal = valorOrigen * 0.20;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Dolar Australiano");
    }

    if (selectOrigen == "12" && selectFinal == "7") {
        valorFinal = valorOrigen * 0.18;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Dolar Singapurense");
    }

    if (selectOrigen == "12" && selectFinal == "8") {
        valorFinal = valorOrigen * 651.39;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Peso Colombiano");
    }

    if (selectOrigen == "12" && selectFinal == "9") {
        valorFinal = valorOrigen * 179.63;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Won Surcoreano");
    }

    if (selectOrigen == "12" && selectFinal == "10") {
        valorFinal = valorOrigen * 0.65;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Real Brasileño");
    }

    if (selectOrigen == "12" && selectFinal == "11") {
        valorFinal = valorOrigen * 10.48;
        arrayDivisaFinal.push(valorFinal.toFixed(2));
        arrayDivisaOrigen.push(valorOrigen);
        arrayMonedaOrigen.push("Quetzal Guatemalteco");
        arrayMonedaFinal.push("Rupia India");
    }
}

function mostrarHistorial(){
    //Validamos que existan registros
    let tdivisaF = arrayDivisaFinal.length;
    let tdivisaI = arrayDivisaOrigen.length;
    let tMonedaF = arrayMonedaFinal.length;
    let tMonedaI = arrayMonedaOrigen.length;

    if (arrayDivisaOrigen.length > 0) {
        

        let table = "<table class='table'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col'>#</th>";
        table += "<th scope='col'>Valor</th>";
        table += "<th scope='col'>Moneda</th>";
        table += "<th scope='col'>Converción</th>";
        table += "<th scope='col'>Moneda</th>";
        table += "</tr>";
        table += "</thead>";
        table += "</tbody>";

        //Creamos un bucle para recorrer los arregglos
        for (let i = 0; i < arrayDivisaOrigen.length; i++) {
            
            let valor = arrayDivisaOrigen[i];
            let conver = arrayDivisaFinal[i];
            let coin1 = arrayMonedaOrigen[i]; //Moneda origen
            let coin2 = arrayMonedaFinal[i]; //Moneda convertida
            
            table += `<tr>`;
            table += `<td scope='row' style='font-weight: bold;'>${i +1}</td>`;
            table += `<td>${valor}</td>`;
            table += `<td>${coin1}</td>`;
            table += `<td>${conver}</td>`;
            table += `<td>${coin2}</td>`;
            table += `</tr>`;
        }

        table += "</tbody>";
        table += "</table>";

        containerTabla.innerHTML = table
    } else {
        alert("No se han hecho ninguna conversión")
    }
}