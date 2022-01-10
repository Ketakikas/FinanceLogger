//import hasformatter interface functionality
import {HasFormatter } from "../model/hasformat";

export class Invoice implements HasFormatter{
    constructor(private title:string,private createdAt:Date,private amount:number){
    }
    format(){
        return `${this.createdAt.getDate()+"/"+this.createdAt.getMonth()+"/"+this.createdAt.getFullYear()}:Amount: ${'$'+this.amount} to be charged for ${this.title}`;
    }
}