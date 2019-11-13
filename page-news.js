class PageNews {
    constructor(app) {
        this._app = app;
    }
    async show() {
        console.log("Newsseite");
        let html = await fetch("page-news.html");

        let htmlContent = "";
        if (html.ok) {
            htmlContent = await html.text();
        }
        this._app.setPageContent(htmlContent);
    }

}
