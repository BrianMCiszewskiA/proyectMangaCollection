class Manga{
	constructor(name, img, vol, series, sFile, status){
		this.name = name;
		this.img = img;
		this.vol = vol;
		this.series = series;
		this.sFile = sFile; //nombre de la serie sin caracteres especiales;
		this.status = status; /**tipo de serie, hay 3 tipos:
							 * E = en Emision, no esta finalizada
							 * F = Finalizada
							 * O = One shot, tomo unico, si una serie tiene un solo tomo y esta finalizada se la considera asi.
							 */
	}
}