import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  
  async create(createUserDto: any) {
    // return 'This action adds a new user';
    console.log(createUserDto);
    await this.userRepository.save(createUserDto);
    
  }

  async findAll() {
    // return `This action returns all user`;
   return await this.userRepository.find();

  }

  async findOne(id: any) {
    // return `This action returns a #${id} user`;
    return await this.userRepository.findOne({where :{id:id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    return await this.userRepository.update(id,updateUserDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
     await this.userRepository.softDelete(id);
     await this.userRepository.update(id,{isActive:false});
  }
}
