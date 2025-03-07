function beregnSum() {
    const gamingPC = document.getElementById('gamingPC').value;
    const enkelPC = document.getElementById('enkelPC').value;
    const sum = (gamingPC * 18000) + (enkelPC * 9000); // Oppdaterte priser
    document.getElementById('resultat').innerText = `Total sum: ${sum} NOK`;
}

function visOppsummering() {
    const gamingPC = document.getElementById('gamingPC').value;
    const enkelPC = document.getElementById('enkelPC').value;
    const sum = (gamingPC * 18000) + (enkelPC * 9000);
    document.getElementById('oppsummering').innerText = `Du har bestilt ${gamingPC} Gaming PC og ${enkelPC} Enkel PC. Total sum: ${sum} NOK. Takk for din bestilling!`;
}