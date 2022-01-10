export class Invoice {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `${this.createdAt.getDate() + "/" + this.createdAt.getMonth() + "/" + this.createdAt.getFullYear()}:Amount: ${'$' + this.amount} to be charged for ${this.title}`;
    }
}
