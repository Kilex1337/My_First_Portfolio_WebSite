function provera_sifre(sifra1,sifra2)
    {
        var password1=sifra1;
        var password2=sifra2;
            if (password1=="" || password2=="") 
        {
            alert("Niste uneli sve podatke")
        }
        else
        {
            if (password1==password2) {
                alert("Sifre se poklapaju");
            }
            else
            {
                alert("Sifre se ne poklapaju");
            }
        }
    }







