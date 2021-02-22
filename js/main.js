var nome, km, eta, offerta, carrozza, codice, costo, genera;

const EUROPERKM = 0.21;
const VALUTA = '€';
const SCONTO20 = 0.8;
const SCONTO40 = 0.6;

genera = document.getElementById("genera");

genera.addEventListener ('click',

    function() {
        nome = document.getElementById("nome").value;
        console.log(nome);

        km = document.getElementById("km").value;
        console.log(km);

        eta = document.getElementById("eta").value;   
        console.log(eta);

        if (eta == "minorenne") {
            costo = EUROPERKM * km * SCONTO20;
        }

        else if (eta == "anziano") {
            costo = EUROPERKM * km * SCONTO40;
        }

        else {
            costo = EUROPERKM * km;
        }

        console.log(costo.toFixed(2)+VALUTA);
    }
    
    )
    


