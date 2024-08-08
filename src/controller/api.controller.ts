import {Inject, Controller, Get, Post, Body} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import {ApiOperation} from "@midwayjs/swagger";

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @ApiOperation({ summary: '获取单个用户' })
  @Post('/get_user')
  async getUser(@Body() form:{
      username: string;
      password: string;
  }) {
    const user = await this.userService.getUser(form);
    console.log(user);
    if (user === null) {
      return {success: false, message: 'error', data: user };
    }
    if(user.password === form.password){
      return { success: true, message: 'OK', data: user };
    } else{
      return {success: false, message: 'error', data: user };
    }

  }

  @ApiOperation({summary: '增加单个用户'})
  @Post('/add_user')
  async addUser(@Body() form:{
    username: string;
    password: string;
  }) {
    const user = await this.userService.addUser(form);
    return { success: true, message: 'OK', data: user };
  }

  @ApiOperation({ summary: '获取用户列表'})
  @Get('/get_user_list')
  async getUserList() {
    const user = await this.userService.getUserList();
    return { success: true, message: 'OK', data: user };
  }

  @ApiOperation({summary: '更新单个用户'})
  @Get('/update_user')
  async update_user() {
    const user = await this.userService.updateUser();
    return { success: true, message: 'OK', data: user };
  }

  @ApiOperation({ summary:'删除单个用户'})
  @Get('/delete_user')
  async delete_user() {
    const user = await this.userService.deleteUser()
    return { success: true, message: 'OK', data: user };
  }
}

