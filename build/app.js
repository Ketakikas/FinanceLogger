import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './model/listTemplate.js';
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
