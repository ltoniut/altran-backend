
export interface Source {
    id: string;
    amountInsured: number;
    email: string;
    inceptionDate: Date;
    installmentPayment: boolean;
    clientId: string;
}

export class Policy {
    id: string;
    amountInsured: number;
    email: string;
    inceptionDate: Date;
    installmentPayment: boolean;
    clientId: string;

    constructor(source: Source) {
        this.id = source.id;
        this.amountInsured = source.amountInsured;
        this.email = source.email;
        this.inceptionDate = source.inceptionDate;
        this.installmentPayment = source.installmentPayment;
        this.clientId = source.clientId;
    }
}
