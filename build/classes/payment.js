export class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        const day = this.createdAt.toLocaleString("en-us", { day: "numeric" });
        const month = this.createdAt.toLocaleString("en-us", { month: "numeric" });
        const year = this.createdAt.toLocaleString("en-us", { year: "numeric" });
        return `${month}/${day}/${year}:  Amount: ${'$' + this.amount} to be paid for ${this.title}`;
    }
}
