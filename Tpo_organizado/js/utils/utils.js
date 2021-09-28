function clearElement(element){
    var div = document.getElementById(element);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}