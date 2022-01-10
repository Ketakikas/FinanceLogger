"use strict";
class Invoice {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `Amount: ${'$' + this.amount} to be charged for ${this.title}`;
    }
}
class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `Amount: ${'$' + this.amount} to be paid for ${this.title}`;
    }
}
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        const h4 = document.createElement("h5");
        h4.className = "float-right";
        h4.innerHTML = heading.toUpperCase();
        li.append(h4);
        const p = document.createElement("p");
        p.innerHTML = item.format();
        li.append(p);
        this.container.append(li);
    }
}
window.onload = () => {
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
    var btnAdd = document.querySelector("#btnAdd");
    var selType = document.querySelector("#selType");
    var title = document.querySelector("#amount");
    var createdAt = document.querySelector("#createdAt");
    var amount = document.querySelector("#amount");
    var btnReset = document.querySelector("#btnReset");
    const lists = document.querySelector("#lists");
    let container = new ListTemplate(lists);
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        //console.log(selType.value+" "+title.value+" "+amount.value);
        let doc;
        if (selType.value == "payment") {
            doc = new Payment(title.value, new Date(createdAt.value), Number.parseFloat(amount.value));
        }
        else {
            doc = new Invoice(title.value, new Date(createdAt.value), Number.parseFloat(amount.value));
        }
        container.render(doc, selType.value);
        console.log(doc);
    });
    btnReset.addEventListener("click", (event) => {
        selType.value = "";
        title.value = "";
        amount.value = "";
    });
};
