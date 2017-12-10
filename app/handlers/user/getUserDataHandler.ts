import { User, Source as UserSrc } from '../../models/user'
import { clients as clientsProvider } from '../../assets/providers/urls';

function getUserData(searchParam: string): User {
    const clients: UserSrc[] = JSON.parse(clientsProvider).clients as UserSrc[];

    return findUser(clients, searchParam);
}

function findUser(source: UserSrc[], searchParam: string): User {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === searchParam || source[i].name === searchParam) {
            return new User(source[i]);
        }
    }
    // TODO Throw an error if user isn't found
}
