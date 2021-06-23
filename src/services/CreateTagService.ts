import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositorues";

class CreateTagService {

  async execute(name: string) {
    const tagRepositories = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Incorrect name!");
    }

    const tagAlredyExists = await tagRepositories.findOne({
      name,
    })

    if (tagAlredyExists) {
      throw new Error("Tag alredy exists!");
    }

    const tag = tagRepositories.create({
      name,
    });

    await tagRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };