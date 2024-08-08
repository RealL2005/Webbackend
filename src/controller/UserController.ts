import {Inject, Controller, Get, Body, Post} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import {ApiOperation} from "@midwayjs/swagger";
import {NewUserService} from "../service/new_user_service";

@Controller('/register')
export class REGController {
  @Inject()
  ctx: Context;

  @Inject()
  newUserService: NewUserService;

  // @ApiOperation({ summary: '获取单个用户' })
  // @Get('/get_user')
  // async getUser() {
  //   const user = await this.userService.getUser();
  //   return { success: true, message: 'OK', data: user };
  // }

  @ApiOperation({summary: '增加单个用户'})
  @Post('/add_user')
  async addUser(@Body() form:{
    username: string;
    age: string;
    password: string;
  }) {

    const user = await this.newUserService.addUser(form);
    return { success: true, message: 'OK', data: user };

  }

  // @ApiOperation({ summary: '获取用户列表'})
  // @Get('/get_user_list')
  // async getUserList() {
  //   const user = await this.userService.getUserList();
  //   return { success: true, message: 'OK', data: user };
  // }

  @ApiOperation({summary: '更新单个用户'})
  @Get('/update_user')
  async update_user() {
    const user = await this.newUserService.updateUser();
    return { success: true, message: 'OK', data: user };
  }

  @ApiOperation({ summary:'删除单个用户'})
  @Get('/delete_user')
  async delete_user() {
    const user = await this.newUserService.deleteUser()
    return { success: true, message: 'OK', data: user };
  }
}

