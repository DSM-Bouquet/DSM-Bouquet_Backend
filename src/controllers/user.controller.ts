import { UserService } from "../services/user.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { UserJoinInfo } from "../shared/dto/user.dto";

export class UserController{
    constructor(
        private readonly userService: UserService
    ) {}

    public joinUser: BusinessLogic = async(req, res) => {
        const userJoinInfo = req.body as UserJoinInfo;
        
        const response = await this.userService.joinUser(userJoinInfo);
        return res.status(202).json(response);
    }
}