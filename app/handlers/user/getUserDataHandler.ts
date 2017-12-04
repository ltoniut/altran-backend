import { User, Source as UserSrc } from '../../models/user'
import { clients as clientsProvider } from '../../assets/providers/urls';

async function getUserData(searchParam: string) {
    const clients: UserSrc[] = JSON.parse(clientsProvider).clients as UserSrc[];

    
}

function findUser(source: UserSrc[], searchParam: string): User {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === searchParam || source[i].name === searchParam) {
            return new User(source[i]);
        }
    }

}
