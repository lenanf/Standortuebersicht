//Um auf
class PageStandort {
    constructor(app) {
        this._app = app;
    }
    async show() {
        console.log("Standortseite");
        let html = await fetch("standort.html");

        let htmlContent = "";
        if (html.ok) {
            htmlContent = await html.text();
        }
        this._app.setPageContent(htmlContent);

        //Klassen etc.
        let firstButton = document.getElementById("button1");
        let secondButton = document.getElementById("button2");
        let memoList = document.querySelector("body > footer > section > p > textarea");
        let textlist = document.querySelector("body > footer > section > ul");

        firstButton.addEventListener("click", function() {

            let b = new Delete();
            b.loeschen(memoList);
        });
        secondButton.addEventListener("click", function() {
            let s = new Post();
            s.senden(memoList,textlist);
        });

    }


}
//Zur Anwendung, Frage schreiben etc.
class Delete {
    constructor(){

    }
loeschen(memoList) {
    let text = document.getElementById("text").value = "";
      }
}
class Post {
    constructor(){

    }
senden(memoList,textlist) {
    let stext = document.getElementById("text").value;
    var data = stext.length;
    let name = prompt("Danke für deine Nachicht! Bitte gib noch deinen Namen ein: ");
    if (name === "" || name === null){
        return;
    } else {
        let z = new Delete();
        z.loeschen(memoList);
        let t = new Neu();
        t.insert(textlist,stext,name);
    }
      }
}
class Neu {
    constructor() {

    }
insert(textlist,stext,name){
            let lElement = document.createElement("li");
            textlist.appendChild(lElement);

            let lTextElement = document.createElement("label");
            lTextElement.textContent = stext + " - gefragt von : " + name;
            lElement.appendChild(lTextElement);
            //let neuname = document.creatElement
            //neuname.textContant = "-" + name;
            //lElement.appendChild()
    }
}
