class Invoice implements HasFormatter{
    constructor(private title:string,private createdAt:Date,private amount:number){
    }
    format(){
        return `Amount: ${'$'+this.amount} to be charged for ${this.title}`;
    }
}

class Payment implements HasFormatter{
    constructor(private title:string,private createdAt:Date,private amount:number)
    {

    }
    format(){
        return `Amount: ${'$'+this.amount} to be paid for ${this.title}`;
    }
}

interface HasFormatter{
    format:()=>string;
}

class ListTemplate{
    constructor(private container:HTMLUListElement){}
    render(item:HasFormatter,heading:string){
        const li=document.createElement("li");
        li.className="list-group-item";
        const h4=document.createElement("h5");
        h4.className="float-right";
        h4.innerHTML=heading.toUpperCase();
        li.append(h4);
        const p=document.createElement("p");
        p.innerHTML=item.format();
        li.append(p);
        this.container.append(li);
    }
}

window.onload=()=>{
//     let Uname:string;
//     const btnClick=document.getElementById("btnClick") as HTMLButtonElement;
//     const input=document.getElementById("txtname") as HTMLInputElement;
//     Uname=input.value as string;
//     console.log(Uname);
// //? is to mention that btnclick can be nullable.
// //if using type as htmlbuttonelement then ? is not to be used
//     btnClick.addEventListener("click",(event:Event)=>{
//         event.preventDefault();
//         alert(`Welcome, ${Uname}`);
//     });

var btnAdd=document.querySelector("#btnAdd") as HTMLButtonElement;
var selType=document.querySelector("#selType") as HTMLSelectElement;
var title=document.querySelector("#amount") as HTMLInputElement;
var createdAt=document.querySelector("#createdAt") as HTMLInputElement;
var amount =document.querySelector("#amount") as HTMLInputElement;
var btnReset=document.querySelector("#btnReset") as HTMLButtonElement;
const lists=document.querySelector("#lists") as HTMLUListElement;
let container=new ListTemplate(lists);

btnAdd.addEventListener("click",(event:Event)=>{
    event.preventDefault();
    //console.log(selType.value+" "+title.value+" "+amount.value);
    let doc:HasFormatter;
    if(selType.value=="payment")
    {
        doc=new Payment(title.value,new Date(createdAt.value),Number.parseFloat(amount.value));
    }
    else{
        doc=new Invoice(title.value,new Date(createdAt.value),Number.parseFloat(amount.value));
    }
    container.render(doc,selType.value);
    console.log(doc);
})

btnReset.addEventListener("click",(event:Event)=>{
    selType.value="";
    title.value="";
    amount.value="";
});
};