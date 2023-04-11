//met toutes les images sans attribut alt doivent avoir un border en rouge
function testAlt() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "2px solid red";
        }
    }
}