import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpStatus, Res, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request,Response } from "express";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('insert')
  async create(@Req() req:Request, @Res() res:Response,@Body() createUserDto: CreateUserDto) {
    // return this.userService.create(createUserDto);
    try {
   await this.userService.create(createUserDto);
    res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      // data: result,
    });
  } 
  catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Error: User not created!'
      // status: 400,
    });
  }
}

  @Get('get')
  async findAll(@Req() req:Request, @Res() res:Response) {
    try{
    let user=await this.userService.findAll();
    res.status(HttpStatus.OK).json({
      // message: 'User has been created successfully',
      data:user
    });
  }
  catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Error: User not created!',
      // status: 400,
    });
  }
}

  @Get('get/:id')
  async findOne(@Param('id') id: number, @Req() req:Request, @Res() res:Response) {
    try{
    let result=await this.userService.findOne(id);
    res.status(HttpStatus.OK).json({
      // message: 'User has been created successfully',
      data: result,
    });
   }
   catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Error: User not created!',
      // status: 400,
    });
  }
}

  @Put('update/:id')
  async update(@Param('id') id: number, @Req() req:Request,@Res() res:Response, @Body() updateUserDto: UpdateUserDto) {
    try{
   let result=await this.userService.update(id, updateUserDto);
    res.status(HttpStatus.OK).json({
      // message: 'User has been updated successfully',
      data: result,
    });
  }
  catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Error: User not created!',
      // status: 400,
    });
  }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number, @Req() req:Request,@Res() res:Response) {
    try{
    let result=await this.userService.remove(id);
    res.status(HttpStatus.OK).json({
      message: 'User has been deleted successfully',
      data: result,
    });
  }
  
  catch (err) {
    console.log(err);
    res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Error: User not created!',
      // status: 400,
    });
  }
  }
}
