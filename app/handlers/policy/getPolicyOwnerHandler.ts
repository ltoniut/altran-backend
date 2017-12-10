import { User, Source as UserSrc } from '../../models/user';
import { Policy, Source as PolicySrc } from '../../models/policy';
import { clients as clientsProvider } from '../../assets/providers/urls';
import { policies as policiesProvider } from '../../assets/providers/urls';

function getPolicyOwner(policyId: string): User {
    const policies: PolicySrc[] = JSON.parse(policiesProvider).policies as PolicySrc[];
    const policy: Policy = findPolicyById(policies, policyId);
    // TODO Throw an error if policy isn't found

    const clients: UserSrc[] = JSON.parse(policiesProvider).policies as UserSrc[];
    return findUserById(clients, policyId);
}

function findPolicyById(source: PolicySrc[], id: string): Policy {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === id) {
            return new Policy(source[i]);
        }
    }
}

function findUserById(source: UserSrc[], id: string): User {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === id) {
            return new User(source[i]);
        }
    }
}
