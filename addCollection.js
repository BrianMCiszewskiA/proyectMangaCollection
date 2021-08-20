const newCollections=[];
let actualId = 0;

function showAddDiv(){
	//momentaneo, debo hacerlo pop up
	document.getElementById("addMenuModal").style.display = "block";
}
function closeAddDiv(){
	//rt lo de arriba
	document.getElementById("addMenuModal").style.display = "none";
	resetAddDiv();
}
function createNewCollection(){
	series = document.getElementById("seriesName").value;
	cantVol = document.getElementById("cantVol").value;
	volHave = document.getElementById("tomoObtenido").value;
	collection = [];
	createCollection(series, cantVol, collection, toArray(volHave));
	addCollectionPreview(collection);
	newCollections.push(collection);
}

function updateWithNewCollections(){
	for(i=0; i<newCollections.length; i++){
		mangaCollection.push(newCollections[i]);
	}
	mangaCollection.sort(function (a, b) {
		a1 = a[0].series;
		b1 = b[0].series;
  		return a1.localeCompare(b1);
		})
	createDivs();
	closeAddDiv();
}


function addCollectionPreview(collection){
	manga = collection[0];
	where = document.getElementById("newCollectionsPreview");
	div = document.createElement("div");
	h = document.createElement("h3");
	text = document.createTextNode(manga.series);
	desc = document.createTextNode("Serie de " + collection.length + " tomo/s \n Obtenidos: " + completionOf(collection));
	//config id
	div.setAttribute("id", actualId);
	actualId = actualId +1;

	h.appendChild(text);
	div.appendChild(h);
	div.appendChild(desc);
	where.appendChild(div);
	//pendiente boton de eliminado
	//usar id para eliminar el div y sacar de "newCollections" mediante index
}
function toArray(string){
	array = string.split(",");
	arrayNum = [];
	array.forEach(e=>arrayNum.push(Number(e)));
	return arrayNum;
}

function copyNewCollections(){
	eliminarElemento("copyText");
	where = document.getElementById("newCollectionsPreview");
	box = document.createElement("div");
	box.setAttribute("id", "copyText");
	for(i=0; i<newCollections.length; i++){
		manga = newCollections[i][0];
		mangaConstName = sinCaracteresEspeciales(lowKeySnake(manga.sFile));
		mangaHaveNumList = newCollections[i].filter(manga=>manga.have).map(manga=>manga.vol);
		text = document.createTextNode(
			"//" + manga.name + "\n" +
			"const " + mangaConstName + " = []; \n" +
			"const " + mangaConstName + "Have =[" + mangaHaveNumList + "]; \n" + 
			"createCollection('" + manga.series + "', " + newCollections[i].length + ", " + mangaConstName + ", " + mangaConstName + "Have, '" + manga.sFile + "'); \n \n"
			)
		box.appendChild(text);
	}
	text = document.createTextNode("Esta funcion esta hecha para facilitar el agregar nuevas colecciones de forma manual/hardcodeada, no esta supuesta para que quede en la version final");
	box.appendChild(text);
	where.appendChild(box);
}
function resetAddDiv(){
	for(actualId; actualId>0;actualId--){
		newCollections.splice(actualId, 1);
		eliminarElemento(String(actualId));
	}
	newCollections.splice(actualId, 1);
	eliminarElemento(String(actualId));

	document.getElementById("seriesName").value = "";
	document.getElementById("cantVol").value = "";
	document.getElementById("tomoObtenido").value = "";

	eliminarElemento("copyText");
}

function eliminarElemento(id) {
  imagen = document.getElementById(id);
  if (!imagen) {
  } else {
    padre = imagen.parentNode;
    padre.removeChild(imagen);
  }
}