import { Policy } from './policy'

export interface Source {
    id: string;
    name: string;
    email: string;
    role: Role;
}

type Role = 'admin' | 'user'

export class User {
    id: string;
    name: string;
    email: string;
    role: Role;
    policies = [];

    constructor(source: Source) {
        this.id = source.id;
        this.name = source.name;
        this.email = source.email;
        this.role = source.role;
    }

    assignPolicies = function(policyArray: Policy[]) {
        this.policies.push(policyArray);
    }
}
