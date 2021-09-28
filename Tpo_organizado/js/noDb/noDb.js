//js temporario hasta que implemente bases de datos
function getLastThree(){
	//esta funcion agarra los ultimos elementos de "mangaColeccion", y los devuelve en una lista de 3, con el ultimo elemento en la posicion 0
	const c = [];
	let length = mangaCollection.length;
	for(j= length-1; j>length-4&&j>=0; j--){
		c.push(mangaCollection[j]);
	}
	return c;
}

//activity
const users = [new Usuario("Pepito"), new Usuario("Juanito"), new Usuario("Josefo"), new Usuario("Roberto"), new Usuario("El wachin"), new Usuario("Tu vieja"), new Usuario("El hombre Sexo"), new Usuario("Mike")];
const randomPost = [];
numeroIndexActual = randomPost.length -1;
function indexActual(){
	return numeroIndexActual;
}
function getActivity(index){
	return randomPost[index];
}


function createRandomPosts(cant){
	for(l=0; l<cant;l++){
		randomPost.push(crearPost(users[getRandomInt(0, users.length-1)], mangaCollection[getRandomInt(0, mangaCollection.length-1)]));
	}
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function resetearIndexActual(){
	numeroIndexActual = randomPost.length -1;
}

//"mi usuario/coleccion"
const yo = new Usuario("Brian");
yo.addCollection("Another", [0,1,2,3,4]);
yo.addCollection("Baoh", [1]);
yo.addCollection("Btooom!", [1,2,3,4,7]);
yo.addCollection("Chainsaw Man", [1,2,3,4,5,6,7]);
yo.addCollection("DanganRonpa", [1,2]);
yo.addCollection("Demon Slayer", [1,2,3,4]);
yo.addCollection("Fragmentos del Horror", [1]);
yo.addCollection("Highschool of the Dead", [1,2,3,4,5,6,7]);
yo.addCollection("Jujutsu Kaisen", [0,1,2,3,4,5,6,7,8,9,10,11]);
yo.addCollection("Komi-san", [1,2]);
yo.addCollection("Konosuba", [1,2,3]);
yo.addCollection("Pokemon: Red Green Blue", [1,2]);
yo.addCollection("Tomie", [1,2]);
yo.addCollection("Uzumaki", [1]);
yo.addCollection("Yu-Gi-Oh!", [1,2,3]);