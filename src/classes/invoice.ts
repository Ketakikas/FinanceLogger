//import hasformatter interface functionality
import {HasFormatter } from "../model/hasformat";

export class Invoice implements HasFormatter{
    constructor(private title:string,private createdAt:Date,private amount:number){
    }
    format(){
        const day=this.createdAt.toLocaleString("en-us",{day:"numeric"});
        const month=this.createdAt.toLocaleString("en-us",{month:"numeric"});
        const year=this.createdAt.toLocaleString("en-us",{year:"numeric"});

        return `${month}/${day}/${year}:  Amount: ${'$'+this.amount} to be charged for ${this.title}`;
    }
}