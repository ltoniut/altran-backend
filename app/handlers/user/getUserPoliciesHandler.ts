import { User, Source as UserSrc } from '../../models/user';
import { Policy, Source as PolicySrc } from '../../models/policy';
import { clients as clientsProvider } from '../../assets/providers/urls';
import { policies as policiesProvider } from '../../assets/providers/urls';

function getUserPolicies(clientId: string): Policy[] {
    const clients: UserSrc[] = JSON.parse(clientsProvider).clients as UserSrc[];
    const user: User = findUserById(clients, clientId);
    // TODO Throw an error if user isn't found

    const policies: PolicySrc[] = JSON.parse(policiesProvider).policies as PolicySrc[];
    return findPolicies(policies, clientId);
}

function findPolicies(source: PolicySrc[], clientId: string): Policy[] {
    const policies: Policy[] = [];

    for (let i = 0; i < source.length; i++) {
        if (source[i].clientId === clientId) {
            policies.push(source[i]);
        }
    }

    return policies;
}

function findUserById(source: UserSrc[], clientId: string): User {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === clientId) {
            return new User(source[i]);
        }
    }
}
