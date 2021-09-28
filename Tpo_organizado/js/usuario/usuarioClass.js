class Usuario{
	constructor(name, email, pass){
		this.name = name; 
		this.mail = email;
		this.pass = pass;
		this.collectionsHave = [];
	}
	icon(){
		return this.name +".png";
	}
	profileLink(){
		return "";
	}
	addThisCollection(collection){
		this.collectionsHave.push(collection);
	}
	addCollection(serie, volsHave){
		this.addThisCollection(new CollectionOf(serie, volsHave));
	}
}