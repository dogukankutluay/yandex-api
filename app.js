eventListeners();

function eventListeners() {
    document.getElementById("translate-from").addEventListener("submit", translateWord);
}

function translateWord(e) {

    //console.log(e.target);
    e.preventDefault();
}