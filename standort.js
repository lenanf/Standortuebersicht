let myApp;


class PageStandort {
    constructor(app) {
        this._app = app;
        myApp = app;
    }
    // Methode wird in app.js aufgerufen und gibt den Inhalt der standort.html Seite an app.js zurück
    async show() {
        console.log("Standortseite");
        let html = await fetch("standort.html");

        let htmlContent = "";
        if (html.ok) {
            htmlContent = await html.text();
        }
        this._app.setPageContent(htmlContent);

        //Erzeugen der Variablen für die Eventlistener und zu leerende/befüllende Felder
        let firstButton = document.getElementById("button1");
        let secondButton = document.getElementById("button2");
        let memoList = document.querySelector("textar");
        let textlist = document.getElementById("listeul");

        // Eventlistener des erstenn Buttons für die Möglichkeit zu Löschen
        firstButton.addEventListener("click", function() {
            console.log("HI");
            let b = new Delete();
            b.loeschen(memoList);
        });
        // Eventlistener des zweiten Buttons für die Möglichkeit zu "senden"
        secondButton.addEventListener("click", function() {
            let s = new Post();
            s.senden(memoList,textlist);
        });

        let neu = new Neu();
        myApp._questions.forEach(function(item, index) {
            neu.instertFull(item);
        })

    }


}
//Klasse zum löschen des aktuellen Textes in der textarea
class Delete {
    constructor(){
    }
    // Löschen Methode
loeschen(memoList) {
    let textar = document.getElementById("textar").value = "";
      }
}
// Klasse zum "senden" des aktuellen Texts der Textarea (Senden= Namenabfrage - löschen des Textes - Frage in Liste anfügen)
class Post {
    constructor(){
    }
// Methode frägt den Name ab. Wenn ein Name eingegeben wird, kann der Frage gesendet werden, wenn nicht, bleibt sie bestehen.
senden(memoList,textlist) {
    let stext = document.getElementById("textar").value;
    var data = stext.length;
    let name = prompt("Danke für deine Nachicht! Bitte gib noch deinen Namen ein: ");
    if (name === "" || name === null){
        return;
    } else {
        // Name ist vorhanden und Frage kann an die Liste angehängt werden
        let z = new Delete();
        z.loeschen(memoList);
        let t = new Neu();
        t.insert(textlist,stext,name);
    }
      }
}
// Klasse zum hinzufügen der Frage in die Liste
let neuClass;
class Neu {
    constructor() {
        neuClass = this;
    }
// Mehode mit der die Frage + der Name der List angehängt wird
insert(textlist,stext,name){
            let lElement = document.createElement("li");
            textlist.appendChild(lElement);
            lElement.innerText = stext + " - gestellt von : " + name;
            let bu = document.createElement("button");
            lElement.appendChild(bu);
            bu.innerText = "Löschen";
            myApp._questions.push(stext + " - gestellt von : " + name);
            let index = myApp._questions.length - 1;
            bu.addEventListener("click", function() {
                textlist.removeChild(lElement);
                myApp._questions.splice(index, 1);
            });

    }

instertFull(text) {
    let textlist = document.getElementById("listeul");
    let lElement = document.createElement("li");
    textlist.appendChild(lElement);
    lElement.innerText = text;
    let bu = document.createElement("button");
    lElement.appendChild(bu);
    bu.innerText = "Löschen";

    let index = myApp._questions.length - 1;

    bu.addEventListener("click", function() {
        textlist.removeChild(lElement);
        myApp._questions.splice(index, 1);
    });
}
}
