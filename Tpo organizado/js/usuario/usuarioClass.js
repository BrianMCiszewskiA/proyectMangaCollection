class Usuario{
	constructor(name, email, pass){
		this.name = name; 
		this.mail = email;
		this.pass = pass;
	}
	icon(){
		return this.name +".png";
	}
	profileLink(){
		return "";
	}
}