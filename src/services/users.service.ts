import { users } from "../repos/users.repo"


export class UserService {
    getUsers(){
        return users;
    }
}  