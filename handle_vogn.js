window.onload= oppstart;

function oppstart() {
    document.getElementById("OK").onclick = regnUt;
}

function regnUt() {
    const enkelpris = 9000;
    const gamingpris = 18000;

    let enkelantall = Number(document.getElementById("enkelantall").value);
    let gamingantall = Number(document.getElementById("gamingantall").value);

    let totalenkel = enkelaltall * enkelpris;
    let totalgaming = gamingantall * gamingpris;
    let total = totalenkel * totalgaming;

    let oppsumering = "Du har handlet: <br>" +
    "Enkel pc: " + enkelantall + "stk<br>" + 
    "Gaming pc: " + gaminantall + "stk<br>";

    document.getElementById("oppsumering").innerHTML = oppsumering;
    document.getElementById("svar").innerHTML= "Totalpris: " + total.toLocaleString() + " kr";
}