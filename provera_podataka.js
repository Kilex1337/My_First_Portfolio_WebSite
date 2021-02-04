
function provera(){
    let uzorak_ime = document.querySelector("#ime").value
    let uzorak_prezime = document.querySelector("#prezime").value
    let uzorak_username = document.querySelector("#username").value
    let uzorak_email = document.querySelector("#email").value
    let uzorak_sifra1 = document.querySelector("#sifra1").value
    let uzorak_sifra2 = document.querySelector("#sifra2").value

    if (uzorak_ime === "" || uzorak_ime === null){
        alert("Niste uneli ime.");
        return false;
    }

    if (uzorak_prezime === "" || uzorak_prezime === null){
        alert("Niste uneli prezime.");
        return false;
    }

    if (uzorak_username === "" || uzorak_username === null){
        alert("Niste uneli korisničko ime.");
        return false;
    }

    if (uzorak_email === "" || uzorak_email === null){
        alert("Niste uneli email.");
        return false;
    }

    if (uzorak_sifra1 === "" || uzorak_sifra1 === null){
        alert("Niste uneli sifru");
        return false;
    }

    if (uzorak_sifra2 === "" || uzorak_sifra2 === null){
        alert("Niste potvrdili lozinku");
        return false;
    }

    if (uzorak_sifra1==uzorak_sifra2) {
        alert("Šifre se poklapaju");
    }
    else
    {
        alert("Šifre se ne poklapaju");
    }
}







