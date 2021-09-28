function createCollection(series, cantVol, where, sFile, status){
	for(i=1; i<=cantVol; i++){
		sType = status;
		name = series + " " + i
		if(!sFile){
			sFile = sinCaracteresEspeciales(series);
		}
		file = lowKeySnake(sFile);
		imgName = file + "_"+ i +".jpg";
		if(cantVol == 1){
			name = series;
			imgName = file + ".jpg";
			if(status == "F"){
				sType = "O";
			}
		}
		manga = new Manga(name, imgName, i, series, sFile, sType);
		where.push(manga);
	}
}
function lowKeySnake(string){
	a = string
	a = a.toLowerCase();
	a = replaceSpace(a);
	return a;
}
function sinCaracteresEspeciales(s){
	string = s +"";
	return string.replace(/[^a-zA-Z0-9]/g, '');
}

function replaceSpace(string){
	return string.replaceAll(" ", "_");
}