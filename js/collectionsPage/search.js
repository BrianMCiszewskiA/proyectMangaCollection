function search(){
    input = document.getElementById("searchBar").value
    mangasFiltrados = filtrarMangasPorNombre(input);
    clearElement("mangaDiv");
    clearElement("mangaNavButtons");
    createMangaResults(mangasFiltrados);
}

function createMangaResults(mangasFiltrados){
    for(i=0; i<mangasFiltrados.length; i++){
        createMangaDiv(mangasFiltrados[i]);
    }
}

function filtrarMangasPorNombre(filter){
    resultado = [];
	for(i=0; i<mangaCollection.length; i++){
		manga = mangaCollection[i][0];
		a= manga.series;
		if(a.toUpperCase().indexOf(filter.toUpperCase())>-1){
			resultado.push(mangaCollection[i]);
		}
	}
    return resultado;
}