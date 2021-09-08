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