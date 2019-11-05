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
    setPageContent(htmlContent){
        document.getElementById("content").innerHTML = htmlContent;
    }
}
