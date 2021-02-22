var nome, km, eta, offerta, carrozza, codice, costo, genera, ticket;

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
            offerta = "Sconto 20%"
        }

        else if (eta == "anziano") {
            costo = EUROPERKM * km * SCONTO40;
            offerta = "Sconto 40%"
        }

        else {
            costo = EUROPERKM * km;
            offerta = "Base"
        }

        ticket = document.getElementById("ticket");
        ticket.className = "visible";

        console.log(costo.toFixed(2)+VALUTA);

        carrozza = Math.floor(Math.random()*10+1);
        console.log(carrozza);

        codice = Math.floor(Math.random()*10000+89999);
        console.log(codice);

        document.getElementById("fullname").innerHTML = nome;
        document.getElementById("offerta").innerHTML = offerta;
        document.getElementById("carrozza").innerHTML = carrozza;
        document.getElementById("codice").innerHTML = codice;
        document.getElementById("costo").innerHTML = costo.toFixed(2)+VALUTA;
    }
    
    )
    
    annulla = document.getElementById("annulla");
    annulla.addEventListener ('click',
        function() {
        nome = document.getElementById("nome").innerHTML = " ";
        km = document.getElementById("km").innerHTML = " ";
        console.log(nome);
        console.log(km);
        ticket.className = "invisible";
        }
    )
