function crearPost(usuario, coleccion){
	//de momento solo van a haber post de tipo "este usuario agrego esta coleccion";
	box = document.createElement("div");
	icon = crearIcono(usuario);
	a1= document.createElement("a");
	p= document.createElement("p");
	a2= document.createElement("a");
	ta1 = document.createTextNode(usuario.name);
	tp = document.createTextNode(" ahora tiene: ");
	ta2 = document.createTextNode(coleccion[0].series);

	a1.appendChild(ta1);
	a2.appendChild(ta2);

	a1.setAttribute("onclick", "irAPerfilDe(" + usuario + ")");
	a1.setAttribute("class", "infoPost");
	a2.setAttribute("onclick", "irAInfoDe(" + coleccion + ")");
	a2.setAttribute("class", "infoPost");

	p.appendChild(a1);
	p.appendChild(tp);
	p.appendChild(a2);

	box.appendChild(icon);
	box.appendChild(p);
	box.setAttribute("class", "post");
	return box;
}

function crearIcono(usuario){
	image = document.createElement("img");
	image.setAttribute("src", "usuario/" + usuario.icon());
	image.setAttribute("alt", usuario.name);
	image.setAttribute("title", usuario.name);
	image.setAttribute("width", "50px");
	image.setAttribute("heigth", "50px");
	image.setAttribute("onerror", "this.onerror=null;this.src='usuario/demoUser.png';");
	return image;
}
