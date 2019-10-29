
class App {
    constructor (pageList){
        this._pages = pageList;
    }
    run () {
        console.log("Anwendung gestartet");

        window.addEventListener("hashchange", () => {
            console.log("Hash changed");
            this._handleRouter();
        });
    }
    _handleRouter() {
        let pageUrl = location.hash.slice(1);
        let matches = null;
        let page = this._pages.find(p => matches = pageUrl.match(p.url));
        //location.href = ("." + page.resource);
        this.currentPageOj = new page.klasse(this);
        this.currentPageOj.show();
    }
}
window.addEventListener("load", function() {
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
});
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
    if (name === ""){
        return;
    } else {
        let z = new Delete();
        z.loeschen(memoList);
        let t = new Neu();
        t.insert(textlist,stext);
    }
      }
}
class Neu {
    constructor() {

    }
insert(textlist,stext){
            let lElement = document.createElement("li");
            textlist.appendChild(lElement);

            let lTextElement = document.createElement("label");
            lTextElement.textContent = stext;
            lElement.appendChild(lTextElement);
    }
}
