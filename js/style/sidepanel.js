function openNav(dir) {
    //dir debe ser Left o Right
    document.getElementById("menu"+dir).setAttribute("class", "plegable"+dir+" sidepanelOpen");
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav(dir) {
    //dir debe ser Left o Right
    document.getElementById("menu"+dir).setAttribute("class", "plegable"+dir);
}
  