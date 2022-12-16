import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserJoinInfo } from "../shared/dto/user.dto";
import { ConflictError } from "../shared/exception";

export class UserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async joinUser(userJoinInfo: UserJoinInfo) {
        if(await this.userRepository.findUserByEmail(userJoinInfo.email)) throw ConflictError;
        else return this.userRepository.createUser(userJoinInfo);
    }
    
}