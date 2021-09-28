function startMangaDivs(){
    createMangaDivs(0, 10);
    createPageButtons(10);
}

/**
 * Crea el div de mangas desde el indice dado y muestra la cantidad dicha si puede
 * @param from intmayor o igual a 0, y menor a la longitud de mangaCollection
 * @param cant cantidad deseada a mostrar en lo posible. 
 */
function createMangaDivs(from, cant){
    for(i=from; i<from+cant&&i<mangaCollection.length; i++){
		id = document.getElementById(mangaCollection[i][0].sFile+"main");
		if(!id){
			createMangaDiv(mangaCollection[i]);
		}
	}
}

function createMangaDiv(mangas){
    where = document.getElementById("mangaDiv");
    where.appendChild(createDiv(mangas[0].sFile));
    createNameBox(mangas);
    createImageBox(mangas);
}

function createDiv(mangaName){
    mangaDiv = document.createElement("div");
    mangaDiv.setAttribute("id", mangaName + "MainDiv");
    mangaDiv.setAttribute("class", "collectionDiv");
    return mangaDiv;
}

function createNameBox(mangas){
    tName = document.createTextNode(mangas[0].series);
    tStatus = document.createTextNode(mangaStatusText(mangas));
    hName = document.createElement("h2");
    hStatus = document.createElement("h2");
    tBox = document.createElement("div");
    tBox.setAttribute("class", "mangaNameBox");
    hName.appendChild(tName);
    hStatus.appendChild(tStatus);
    tBox.appendChild(hName);
    tBox.appendChild(hStatus);
    document.getElementById(mangas[0].sFile+"MainDiv").appendChild(tBox);
}

function createImageBox(mangas){
    seriesName = mangas[0].sFile;
    imgBox = document.createElement("div");
    imgBox.setAttribute("class", "mangaImageBox " + typeOfClassImage(mangas.length));
    imgBox.setAttribute("id", seriesName + "ImageBox");
    document.getElementById(seriesName+"MainDiv").appendChild(imgBox);
    createMangaImages(mangas);
}

function typeOfClassImage(cant){
    //cant debe ser mayor a 0
    //define la clase extra dependiendo la cantidad de mangas
    if(cant <= 1){ return "oneShot"}
     else if(cant <=4) {return "smallerCollection"}
     else if (cant <=9) {return "smallCollection"}
     else {return ""}
}

function createMangaImages(mangas){
    box = document.getElementById(mangas[0].sFile + "ImageBox");
    for(j=0; j<mangas.length; j++){
        box.appendChild(mangaImage(mangas[j]));
    }
}

function mangaImage(manga){
    image = document.createElement("img");
	image.setAttribute("src", "img/Mangas/" + manga.sFile + "/"+ manga.img);
	image.setAttribute("alt", manga.name);
	image.setAttribute("title", manga.name);
	image.setAttribute("class", "mangaImage");
	image.setAttribute("id", manga.sFile+"Vol"+manga.vol);
	image.setAttribute("onerror", "this.onerror=null;this.src='img/Mangas/nowPrinting.jpg';");
	return image;
}
function mangaStatusText(mangas){
    switch(mangas[0].status){
        case "O": return "Tomo Unico!";
        case "E": return "Serie en Emision!";
        case "F": return "Serie de " + mangas.length + " Tomos!";
        default: Error(mangas[0].status + " no es un status de serie valido. En serie: " + mangas[0].series);
    }
}

function createPageButtons(cant){
    //pendiente
}