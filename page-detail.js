class PageDetail {
    constructor(app) {
        this._app = app;
    }
    async show() {
        console.log("Detailseite");
        let html = await fetch("page-detailDHBW.html");

        let htmlContent = "";
        if (html.ok) {
            htmlContent = await html.eingabe();
        }
        this._app.setPageContent(htmlContent);

            //Hier werden die Variablen für die Eventlistener und zu leerende/befüllende Felder erzeugt
            let firstButton = document.getElementById("buttonA");
            let secondButton = document.getElementById("buttonB");
            let memoList = document.querySelector("text");

            // Eventlistener des erstenn Buttons für die Möglichkeit die Eingabe zu löschen
            firstButton.addEventListener("click", function() {
                console.log("HI");
                let b = new Remove();
                b.loeschen(memoList);
            });
            // Eventlistener des zweiten Buttons für die Möglichkeit die Eingabe zu senden
            secondButton.addEventListener("click", function() {
                let s = new Posten();
                s.senden(memoList,textlist);
            });
   }
}
    
    //Klasse zum "löschen" des Textes im Textfeld
    class Remove{
        constructor(){
        }
        // Löschen Methode
        loeschen(memoList) {
            let text = document.getElementById("textar").value = "";
        }
    }
    // Klasse zum "senden" des aktuellen Textes im Textfeld
    class Posten {
        constructor(){
        }
    // Methode frägt den Name ab, wenn ein Name eingegeben wird, kann der Frage gesendet werden, wenn nicht, bleibt sie bestehen.
        senden(memoList,textlist) {
            let stext = document.getElementById("textar").value;
            var data = stext.length;
            let name = prompt("Danke für deine Nachicht! Bitte gib noch deinen Namen ein: ");
            if (name === "" || name === null){
                return;
            }
        }
     }
