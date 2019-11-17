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

window.addEventListener("load", () => {
    let newButton = document.getElementById("button-news-Heilbronn")
    let memoList = document.querySelector("body > main > ul");

    let insertMemo = text => {
        let liElement = document.createElement("li");
        memoList.appendChild(liElement);

        let memoTextElement = document.createElement("p");
        memoTextElement.textContent = text;
        liElement.appendChild(memoTextElement);

        let deleteElement = document.createElement("a");
        deleteElement.textContent = "Löschen";
        deleteElement.classList.add("delete");
        liElement.appendChild(deleteElement);

        deleteElement.addEventListener("click", () => {
            liElement.parentNode.removeChild(liElement);
        });
    };

    insertMemo("Klicke auf „Neue Notiz”, um eine neue Notiz anzulegen …")

    // Event Handler für Anlage einer Notiz
    newButton.addEventListener("click", () => {
        // Memotext vom Anwender abfragen
        let text1 = prompt("Geben Sie Ihren Benutzernamen ein");
        let text = prompt("Geben Sie den Notiztext ein");

        if (text === null) return;
        if (text1 === null) return;

        // Neues Element in die HTML-Liste einfügen
        insertMemo(text1 + ": " + text);
    });
});
