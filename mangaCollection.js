//Baoh
const baoh = [];
baohHave = [1];
createCollection("Baoh", 1, baoh, baohHave, "Baoh"); //Oneshot

//
const btooom = [];
const btooomLight = new Manga("Btooom! 26 Light", "btooom_26_light.jpg", 26, false, "Btooom!", "Btooom");
const btooomDark = new Manga("Btooom! 26 Dark", "btooom_26_dark.jpg", 26, false, "Btooom!", "Btooom");
btooomHave = [1,2,3,4,7];
createCollection("Btooom!", 25, btooom, btooomHave, "Btooom"); //son 26 tomos, pero el tomo 26 tiene dos versiones, la light y la dark
btooom.push(btooomLight);
btooom.push(btooomDark);

//Chainsaw Man
const csm = [];
csmHave = [1,2,3,4,5,6,7];
createCollection("Chainsaw Man", 11, csm, csmHave, "Chainsaw_Man"); //aca llego hasta el 7, y la parte uno tiene 11(18/08/21)

//Danganronpa The Animation
const dangan = [];
danganHave = [1,2];
createCollection("DanganRonpa", 4, dangan, danganHave, "Danganronpa"); //Coleccion completa, me faltan 2

//Demon Slayer
const demonSlayer = [];
demonSlayerHave = [1,2,3,4];
createCollection("Demon Slayer", 23, demonSlayer, demonSlayerHave, "Demon_Slayer"); //Aca salio hasta el 15, pero la serie ya finalizo.

//Fragmentos del Horror
const fragHorror = [];
fragHorrorHave = [1];
createCollection("Fragmentos del Horror", 1, fragHorror, fragHorrorHave, "Fragmentos_del_Horror"); //tomo unico.

//Highschool of the Dead
const hotd = [];
hotdHave = [1,2,3,4,5,6,7];
createCollection("Highschool of the Dead", 7, hotd, hotdHave, "Highschool_of_the_Dead"); //Coleccion "completa"

//Jujutsu Kaisen
const jujuCero = new Manga("Jujutsu Kaisen 0", "Jujutsu_Kaisen_0.jpg", 0, true, "Jujutsu Kaisen", "Jujutsu_Kaisen");
const jujuKaisen = [jujuCero, ];
jujuKaisenHave = [0,1,2,3,4,5,6,7,8,9,10];
createCollection("Jujutsu Kaisen", 16, jujuKaisen, jujuKaisenHave, "Jujutsu_Kaisen"); //Aca llego hasta el 10, y el tomo 0 q es un caso especial. sigue en emision y va por el 16

//Komi san
const komiSan = [];
komiSanHave = [1];
createCollection("Komi-san", 10, komiSan, komiSanHave, "Komi_San"); //10 en japon y se sigue publicando, aca llego 1

//Konosuba
const konosuba = [];
konosubaHave = [1,2,3];
createCollection("Konosuba", 6, konosuba, konosubaHave, "Konosuba"); // 6 en japon y sigue en emision, aca llegaron 3 y el 4 sale en un mes.

//Pokemon Red Green Blue
const pkmrgb = [];
pkmrgbHave = [1,2];
createCollection("Pokemon: Red Green Blue", 3, pkmrgb, pkmrgbHave, "PokemonRGB"); //Todavia no salio el 3, y no cuento el resto porq los voy a dividir por juego

//Tomie
const tomie = [];
tomieHave = [1,2];
createCollection("Tomie", 2, tomie, tomieHave, "Tomie"); //Serie completa

//Uzumaki
const uzumaki = [];
uzumakiHave = [1];
createCollection("Uzumaki", 1, uzumaki, uzumakiHave, "Uzumaki"); //"Oneshot" (tomo recopilatorio 3en1)


//Yugioh
const yugi = [];
yugiHave = [1,2];
createCollection("Yu-Gi-Oh!", 22, yugi, yugiHave, "Yugioh"); //creo q son 22, hasta ahora salieron 2

//Collections
const mangaCollection = [baoh, btooom, csm, dangan, demonSlayer, fragHorror, hotd, jujuKaisen, komiSan, konosuba, pkmrgb, tomie, uzumaki, yugi]; //algun dia hare algo mas automatico q esto, pero hoy no sera ese dia

/*
Template
//
const _ = [];
_Have = [];
createCollection("", , _, _Have, ""); //

*/