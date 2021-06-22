import { Request, Response } from 'express'
import { CreateUserSerivce } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserSerivce();
    
    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController }