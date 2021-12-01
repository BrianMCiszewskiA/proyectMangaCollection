//Another
const anotherCero = new Manga("Another 0", "Another_0.jpg", 0, "Another", "Another", "F");
const another = [anotherCero];
createCollection("Another", 4, another, "Another", "F");
//Baoh
const baoh = [];
createCollection("Baoh", 1, baoh, "Baoh", "O"); //Oneshot

//
const btooom = [];
const btooomLight = new Manga("Btooom! 26 Light", "btooom_26_light.jpg", 26, "Btooom!", "Btooom");
const btooomDark = new Manga("Btooom! 26 Dark", "btooom_26_dark.jpg", 26, "Btooom!", "Btooom");
createCollection("Btooom!", 25, btooom, "Btooom", "F"); //son 26 tomos, pero el tomo 26 tiene dos versiones, la light y la dark
btooom.push(btooomLight);
btooom.push(btooomDark);

//Chainsaw Man
const csm = [];
createCollection("Chainsaw Man", 11, csm, "Chainsaw_Man", "F"); //aca llego hasta el 7, y la parte uno tiene 11(18/08/21)

//Danganronpa The Animation
const dangan = [];
createCollection("DanganRonpa", 4, dangan, "Danganronpa", "F"); //Coleccion completa, me faltan 2

//Demon Slayer
const demonSlayer = [];
createCollection("Demon Slayer", 23, demonSlayer, "Demon_Slayer", "F"); //Aca salio hasta el 15, pero la serie ya finalizo.

//Fragmentos del Horror
const fragHorror = [];
createCollection("Fragmentos del Horror", 1, fragHorror, "Fragmentos_del_Horror", "O"); //tomo unico.

//Highschool of the Dead
const hotd = [];
createCollection("Highschool of the Dead", 7, hotd, "Highschool_of_the_Dead", "F"); //Coleccion "completa"

//Jujutsu Kaisen
const jujuCero = new Manga("Jujutsu Kaisen 0", "Jujutsu_Kaisen_0.jpg", 0, "Jujutsu Kaisen", "Jujutsu_Kaisen", "E");
const jujuKaisen = [jujuCero, ];
createCollection("Jujutsu Kaisen", 16, jujuKaisen, "Jujutsu_Kaisen"); //Aca llego hasta el 10, y el tomo 0 q es un caso especial. sigue en emision y va por el 16

//Komi san
const komiSan = [];
createCollection("Komi-san", 10, komiSan, "Komi_San", "E"); //10 en japon y se sigue publicando, aca llego 1

//Konosuba
const konosuba = [];
createCollection("Konosuba", 6, konosuba, "Konosuba", "E"); // 6 en japon y sigue en emision, aca llegaron 3 y el 4 sale en un mes.

//Pokemon Red Green Blue
const pkmrgb = [];
createCollection("Pokemon: Red Green Blue", 3, pkmrgb, "PokemonRGB", "F"); //Todavia no salio el 3, y no cuento el resto porq los voy a dividir por juego

//Tomie
const tomie = [];
createCollection("Tomie", 2, tomie, "Tomie", "F"); //Serie completa

//Uzumaki
const uzumaki = [];
createCollection("Uzumaki", 1, uzumaki, "Uzumaki", "O"); //"Oneshot" (tomo recopilatorio 3en1)


//Yugioh
const yugi = [];
createCollection("Yu-Gi-Oh!", 22, yugi, "Yugioh", "F"); //creo q son 22, hasta ahora salieron 2

//Collections
const mangaCollection = [another, baoh, btooom, csm, dangan, demonSlayer, fragHorror, hotd, jujuKaisen, komiSan, konosuba, pkmrgb, tomie, uzumaki, yugi]; //algun dia hare algo mas automatico q esto, pero hoy no sera ese dia

/*
Template
//
const _ = [];
_Have = [];
createCollection("", , _, _Have, ""); //

*/