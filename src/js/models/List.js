import config from '../config';

export default class List{
    constructor(){}
    async getResults(){
        this.result = config;
        //console.log(this.result);
    }
}