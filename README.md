# Standortuebersicht
Standortübersicht der DHBW mit News und Detailseiten

Um unsere Seite aufzurufen müssen sie node installiert haben und über cmd zu dem Ordner navigieren und die Datei server.js mit „node server.js“ aufrufen. Dann kann im Browser über „localhost:8080“ die Seite aufgerufen werden.

## Allgemeine Beschreibung:
Von der Startseite standort.html kann mit Klick auf eins der Kachelbilder auf die Detailseiten des jeweiligen Standorts navigiert werden. Der Link der ersten Detailseite ist ausprogrammiert. Über den Link „Hier geht es zu den News“ wird per Klick die News-Weite aufgerufen. Auf der Startseite selbst können noch Fragen zu der DHBW gestellt und die gestellten Fragen eingesehen werden.

## Gerüst und Head: index.html, app.js und app.css:
In der index.html sind alle JavaScript-Dateien sowie die CSS-Dateien eingebunden. Hier wird die app.js aufgerufen und darüber auf die jeweils aufgerufene JS-Klasse bzw. deren Datei verwiesen. Über die app.js wird außerdem der „content“-Part der index.html mit der aufgerufenen Datei ersetzt und deren Inhalt aufgerufen. Im index.html befindet sich ebenfalls der Head mit Überschrift und dem DHBW-Logo, das dauerhaft bestehen bleibt.Die CSS-DAtei hierzu ist die app.css.(erstellt von Lena)

## Startseite: standort.html und standort.js :
Die standort.html wird als Startseite und immer wenn auf den „zurück“-Pfeil geklickt wird aufgerufen. Dies geschieht mit Hilfe der app.js und der standort.js, mit der der Inhalt der standort.html in die index.html geladen wird. Sie zeigt vorerst eine große Übersicht der DHBW Standorte auf der linken Seite und Bilder der einzelnen Standorte in Rasterform auf der Rechten. Durch Klicken auf diese Bilder (hier und das erste) wird auf die Detailseiten navigiert. Darunter befindet sich der Link zu den News-Seiten. Am Ende der Seite kann der User Fragen in ein Textfeld eingeben, diese wieder löschen oder senden. Bevor die Frage gesendet wird muss ein Name eingetragen werden, sonst passiert nichts. Unter senden wird hier verstanden, dass die Frage mit dem Namen in die Liste unterhalb, sowie die das Array der app.js eingefügt wird. Ebenfalls wird die Frage im Eingabefeld gelöscht. Es ist außerdem möglich eine einzelne Frage aus der Liste zu löschen. Bei navigieren auf die anderen Unterseiten werden die Fragen „gespeichert“ und wieder neu geladen. Die CSS-Datei zu der Startseite ist die standort.css.(erstellt von Lena)

## Detailseite (page-detailDHBW.html, page-detail.css und page-detail.js): 
Die page-detailDHBW.html Seite beschreibt Details aller DHBWs und kann als weitere Seite aufgerufen werden. Ausgehend von der standort.html (Startseite) wird der User durch einen Klick auf das gewünschte Bild (Link) auf die Detailseite navigiert. Durch den „zurück“-Pfeil wird wieder die Startseite aufgerufen. 
Die Detailseite zeigt die „Zahlen und Fakten“ aller Standorte der Dualen Hochschule in Baden-Württemberg. Als Quelle zur Darstellung der „Zahlen und Fakten“ diente die Online-Quelle: https://www.dhbw.de/fileadmin/user_upload/Dokumente/Schrifterzeugnisse/DHBW_Jahresbericht_2017_2018.pdf. Alle Informationen sind belegt und daher wahrheitsgetreu. 
Die Seite zeigt eine Übersicht der DHs mit Bild und Kennzahlen. Durch Klicken auf den Namen der gewünschten DH wird man direkt auf deren Homepage weitergeleitet. Ursprünglich sollte es so gedacht sein, dass der User durch klicken des Bildes der gewünschten DHBW auf der Startseite, auf eine einzelne Seite mit nur deren „Zahlen und Fakten“ weitergeleitet wird. Da dies jedoch sehr wenig für dieses Portfolio gewesen wäre, wurde beschlossen alle DHs auf einer Seite darzustellen. 
Um dem User das lesen angenehmer zu gestalten, wird die DH, welche mit der Maus in fiktive Berührung kommt, hellgrau unterlegt. 
Im letzten Drittel der Seite wird ein Textfeld dargestellt. Dort können Fragen und Anregungen gesendet werden und wie auf der Startseite, wird nach Eingabe des gewünschten Textes und klicken des „Eingabe senden“ – Buttons, der User nach seinem Namen gefragt. Die Speicherung folgt in einem Array (oder einer Datenbank).
Des Weiteren kann der User, wenn er möchte, eine Bewertung dieser Seite abgeben. Durch klicken der gewünschten Anzahl an Sternen, kann die Bewertung eingeloggt werde. Diese kann nach ausgewählter Wunschbewertung ebenso durch den „Eingabe senden“ – Button versendet werden. Die Speicherung folgt in einem Array (oder einer Datenbank). Die Sterne leuchten bei einer fiktiven Berührung mit der Maus auf (in Gelb) und können durch klicken des Buttons links neben „Ihre Bewertung“ gelöscht oder zurückgesetzt werden. 
Die Umsetzung war leider sehr schwierig. Diese hat teils funktioniert und teilweise wird von einer Annahme ausgegangen. 
Am Ende der Seite wird angedeutet, dass man durch klicken der Buttons „Impressum“, “Datenschutz“ und „Kontakt“ auf die jeweiligen Seiten weitergeleitet wird. Ebenso gelangt man durch klicken auf „Zum Anfang der Seite“ zurück zum Anfang und der User wird auf eine neue Seite weitergeleitet. 
Die Schriftgröße und Schriftart, wurde bewusst gewählt und die Webseite ist „Responsive“. Sie wurde in mehreren digitalen Formaten in Atom unter „Responsive“ getestet. 
(Erstellt von Larissa)

## Probleme mit Git-Hub:
Wir hatten beim zuammenführen der Dateien gerheblich Probleme mit Git-Hub, wobei schon erstellte Dateien beieinem merge plötzlich fehlten. Daher kann über die Anazahl an commits keine Aussage darüber geben, wie viel welches Gruppenmitglied erstellt hat. Hierzu dient die Beschreibung oben. 
