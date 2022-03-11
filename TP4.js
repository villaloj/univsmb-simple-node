const fs = require("fs");
class GestionFichier{
    constructor(fichier){
        this.fichier = fichier;
    }

    LireFichier(){
        this.contenu = fs.readFile(this.fichier, "utf8", function (err,data) {
        if (err) {
            return console.log(err);
        }
        if (data!=undefined)
            console.log(data);
        });
    }
    EcrireFichier(text){
        fs.writeFileSync(this.fichier, text, {flag: 'a+'}, function (err,data) {
        if (err) {
            return console.log(err);
        }
        });
    }
    SupprimerFichier(){
        fs.unlink(this.fichier, function (err) {
        if (err) {
            return console.log(err);
        }
        });
    }
}


/*
let libro = new GestionFichier("test.txt");
console.log(libro.LireFichier());
libro.EcrireFichier("eoeoe oue \n");
console.log(libro.LireFichier());
*/

class GestionFichierJson extends GestionFichier{
    constructor(fichier){
        super(fichier);
    }
    LireJson(){
        this.contenuJson = JSON.parse(this.LireFichier());
        
    }
    EcrireJson(cle, valeur){
        this.contenuJson[cle]=valeur;
        this.SupprimerFichier();
        this.EcrireFichier(JSON.stringify(this.contenuJson));
    }
}    

let jsonfich = new GestionFichierJson("test.txt");
let jsoncode = jsonfich.LireJson();
console.log(jsoncode.color);
