function createDivs(){
	for(i=0; i<mangaCollection.length; i++){
		createDiv(mangaCollection[i]);
	}
}

function createDiv(mangas){
	seriesFName = mangas[0].sFile;
	where = document.getElementById("main");
	pBox = document.createElement("div");
	nBox = document.createElement("div");
	sBox = document.createElement("div");
	sName = document.createElement("h2");
	tName = document.createTextNode(mangas[0].series + " " +completionOf(mangas));

	//series name 
	sName.appendChild(tName);
	nBox.appendChild(sName);
	//
	pBox.setAttribute("id", seriesFName + "main");
	pBox.setAttribute("class", "mangaPrimaryBox");
	nBox.setAttribute("id", seriesFName + "name");
	nBox.setAttribute("class", "mangaNameBox");
	sBox.setAttribute("id", seriesFName);
	sBox.setAttribute("class", "mangaDisplay")
	sBox = createMangaImages(mangas, sBox);
	sBox.style.display = "none";
	//config button
	nBox.appendChild(showSeriesButton(seriesFName))
	//
	pBox.appendChild(nBox);
	pBox.appendChild(sBox);
	where.appendChild(pBox);
}

function showSeriesButton(name){
	button = document.createElement("button");
	text = document.createTextNode("Show");
	button.setAttribute("id", name+"button");
	button.setAttribute("onclick", "showHideBox(" + name + ")");
	button.appendChild(text);

	return button;
}

function mangaImage(manga){
	image = document.createElement("img");
	image.setAttribute("src", "Mangas/" + manga.sFile + "/"+ manga.img);
	image.setAttribute("alt", manga.name);
	image.setAttribute("title", manga.name);
	image.setAttribute("width", "10%");
	image.setAttribute("heigth", "auto");
	image.setAttribute("onerror", "this.onerror=null;this.src='Mangas/nowPrinting.jpg';");

	if(!manga.have){
		image.style.opacity = "0.5";
	}
	return image;
}

function createMangaImages(mangas, where){
	for(j=0; j<mangas.length; j++){
		where.appendChild(mangaImage(mangas[j]));
	}
	return where;
}
function showHideBox(box){
	button = document.getElementById(box.id + "button");
	boxName = document.getElementById(box.id + "name");
	if(box.style.display == "block"){
		box.style.display = "none";
		boxName.setAttribute("class", "mangaNameBox");
		button.replaceChild(document.createTextNode("Show"), button.childNodes[0]);
	} else {
		box.style.display = "block";
		boxName.setAttribute("class", "mangaNameBoxOpen");
		button.replaceChild(document.createTextNode("Hide"), button.childNodes[0]);
	}
}

function replaceSpace(string){
	return string.replaceAll(" ", "_");
}
function reSpace(string){
	return string.replaceAll("_", " ")
}

function completionOf(mangas){
	iHave = mangas.filter(manga=>manga.have).length;
	total = mangas.length;
	return iHave + "/" + total;
}

function search(){
	input = document.getElementById("searchBar");
	filter = input.value.toUpperCase();

	for(i=0; i<mangaCollection.length; i++){
		manga = mangaCollection[i][0];
		a= manga.series;
		div= document.getElementById(manga.sFile + "main");
		if(a.toUpperCase().indexOf(filter)>-1){
			div.style.display = "";
		} else {
			div.style.display = "none";
		}
	}
}