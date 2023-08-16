let name = [];
let score = [];
let address = [];
let password = [];
let nutzerArray = [name, score, address, password];
function BenutzerNameGueltig (form) {
    var benutzerName = form.Benutzername.value;
    if (benutzerName.length < 1) {
        return "Nutzername zu kurz!";
    }
    else if (benutzerName.length > 12) {
        return "Nutzername zu lang!";
    }
    else {
        speicherNutzerDaten(benutzerName);
    }
}
function speicherNutzerDaten () {
    name.push(benutzerName);
    address.push(anmeldung.html.IPaddress);
}
