import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositorues";


class ListTagService {

  async execute(){
    const tagsRepositories = getCustomRepository(TagRepositories);

    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagService };