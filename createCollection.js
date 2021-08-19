function createCollection(series, cantVol, where, volHave, sFile){
	for(i=1; i<=cantVol; i++){
		name = series + " " + i
		file = lowKeySnake(sFile);
		imgName = file + "_"+ i +".jpg";
		if(cantVol == 1){
			name = series;
			imgName = file + ".jpg";
		}
		manga = new Manga(name, imgName, i, volHave.includes(i), series, sFile);
		where.push(manga);
	}
}
function lowKeySnake(string){
	a = string
	a = a.toLowerCase();
	a = replaceSpace(a);
	return a;
}