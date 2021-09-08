function generateLastThreeCollections(){
	let collections = getLastThree();//deberia recibir las ultimas 3 colecciones, teniendo la mas reciente en la posicion 0;
	for (i=0; i<3; i++){
		showInLastCollections(collections[i]);
	}
}

function showInLastCollections(collection){
	let mangaSerie = collection[0].series;
	let where = document.getElementById("collectionsSlideshow");
	let box = document.createElement("div");
	let imgBox = document.createElement("div");
	let h = document.createElement("H3");
	let t = document.createTextNode(mangaSerie);

	h.appendChild(t);
	box.setAttribute("id", mangaSerie +"Slideshow");
	box.setAttribute("class", "mangaSlideshow fade");
	imgBox.setAttribute("id", mangaSerie +"ImgSlide");
	imgBox.setAttribute("class", "imgSlide");
	box.appendChild(h);
	box.appendChild(imgBox);

	generateFiveImg(imgBox, collection);
	where.appendChild(box);
}

function generateFiveImg(imgBox, collection){
	for(k=0; k<5&&k<collection.length; k++){
		imgBox.appendChild(createMangaImg(collection[k]));
	}
}
function createMangaImg(manga){
	image = document.createElement("img");
	image.setAttribute("src", "../Mangas/" + manga.sFile + "/"+ manga.img);
	image.setAttribute("alt", manga.name);
	image.setAttribute("title", manga.name);
	image.setAttribute("width", "150px");
	image.setAttribute("heigth", "auto");
	image.setAttribute("onerror", "this.onerror=null;this.src='../Mangas/nowPrinting.jpg';");
	return image;
}

//funcion muy verde
function loadLastActivity(cant){
	let indexInicial = indexActual();
	let index = indexInicial;
	where= document.getElementById("friendsActivity");
	for(index; index>=indexInicial-cant&&index>=0; index--){
		where.appendChild(getActivity(index));
	}
}