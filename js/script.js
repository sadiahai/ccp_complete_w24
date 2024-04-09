// Hamburger Menu for mobile (used W3 schools)
function myFunction() {
    var x = document.getElementById("Links");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Hiding elements
function hideParagraphs() {
    var paragraphs = document.getElementsByTagName("p");
    var button = document.querySelector("button");

    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].style.display === "none" || paragraphs[i].style.display === "") {
            paragraphs[i].style.display = "block";
            button.textContent = "Hide";
        } else {
            paragraphs[i].style.display = "none";
            button.textContent = "Unhide";
        }
    }
}
