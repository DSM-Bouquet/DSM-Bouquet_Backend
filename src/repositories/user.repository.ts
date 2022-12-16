import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

import { UserJoinInfo, UserLoginInfo } from "../shared/dto/user.dto";

export class UserRepository{
    constructor(
        private readonly userRepository: Repository<User>
    ) {}

    async createUser(userJoinInfo: UserJoinInfo) {
        const newUser = this.userRepository.create(userJoinInfo);
        const user = await this.userRepository.save(newUser);
        return user;
    }

    async findUserByEmail(email: string) {
        const user = await this.userRepository.findOneBy({ email });
        return user;
    }

    async findUserById(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        return user;
    }

}