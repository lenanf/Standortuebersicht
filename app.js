// Klasse, die für das Aufrufen der anderen Seiten zuständig ist und in der index.html aufgerufen wird
class App {
    constructor (pageList){
        this._pages = pageList;
        this._questions = ["Wie viele Studenten hat die DHBW? - gestellt von: Anna Müller", "Wann wurde die DHBW gegründet? - gestellt von: Theo Schulz"];

        this._handleRouter();

    }
    // Methoden zum Aufrufen der aktuellen Klasse bzw. deren js-Datein
    run () {
        console.log("Anwendung gestartet");

        window.addEventListener("hashchange", () => {
            console.log("Hash changed");
            this._handleRouter();
        });
    }
    // Wird durch run() aufgerufen, ordnet die zu findene Seite der Variable page zu und ruft deren Kasse und die show() Methode
    _handleRouter() {
        let pageUrl = location.hash.slice(1);
        let matches = null;
        let page = this._pages.find(p => matches = pageUrl.match(p.url));
        //let index = 0;

        this.currentPageOj = new page.klasse(this);
        this.currentPageOj.show();
        //index++;
    }
    // ersetzt den vorherigen Hinhalt mit dem der neuen Seite
    setPageContent(htmlContent){
        document.getElementById("content").innerHTML = htmlContent;
    }

}
