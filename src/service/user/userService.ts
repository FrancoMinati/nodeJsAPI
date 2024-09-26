import { CreateUserRequest } from "../../interfaces/UserRequest";
import User from "../../models/User";



export const createUserService = async (data: CreateUserRequest) => {
    console.log(data)
    const { email, name, surname } = data;// Access request body
    try {
        const newUser = await User.create({
            email,
            name,
            surname,
        });
        return newUser;
    } catch (error) {
       return error;
    }
};
