export class ListTemplate {
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
