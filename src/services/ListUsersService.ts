import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {

  async execute(){
    const clientRepositories = getCustomRepository(UsersRepositories);

    const users = await clientRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };