//Esto es un reemplazo de lo que eventualmente deberia ser una tabla de relacion entre usuario y serie de manga
class CollectionOf{
    constructor(serie, volumes){
        //serie = String
        //volumes = Array de int
        this.serie = serie;
        this.have = this.haveStart(volumes);
    }
    haveStart(vol){
        if(vol==null){
            return [];
        } else {
            return vol;
        }     
    }
}
//en este caso se supone que el usuario tenga un array de las colecciones que tiene