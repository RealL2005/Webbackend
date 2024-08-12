import {Inject, Controller, Get, Body, Post} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

import {NewUserService} from "../service/new_user_service";

@Controller('/register')
export class REGController {
  @Inject()
  ctx: Context;

  @Inject()
  newUserService: NewUserService;


  @Post('/add_user')
  async addUser(@Body() form:{
    username: string;
    age: string;
    password: string;
  }) {

    const user = await this.newUserService.addUser(form);
    return { success: true, message: 'OK', data: user };

  }


  @Get('/update_user')
  async update_user() {
    const user = await this.newUserService.updateUser();
    return { success: true, message: 'OK', data: user };
  }


  @Get('/delete_user')
  async delete_user() {
    const user = await this.newUserService.deleteUser()
    return { success: true, message: 'OK', data: user };
  }
}

