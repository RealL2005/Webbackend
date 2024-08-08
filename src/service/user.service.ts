import { Provide } from '@midwayjs/core';
import {UserModel} from "../model/user";
import {Repository} from "typeorm";
import {InjectEntityModel} from "@midwayjs/orm";





@Provide()
export class UserService {
  @InjectEntityModel(UserModel) userModel: Repository<UserModel>;


  async getUser(UserInfo) {
    try {
      const user = await this.userModel
        .createQueryBuilder()
        .select()
        .where({username: UserInfo.username})
        .getOne();

      console.log(user);

      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async addUser(userInfo) {
    let record = new UserModel();

    record = this.userModel.merge(record,{
      username:userInfo.username,
      password: userInfo.password,
    });
    try {
      const created = await this.userModel.save(record);
      return created;
    } catch (e) {
      console.log(e);
    }

  }

  async deleteUser() {
    const record = await this.userModel
      .createQueryBuilder()
      .delete()
      .where({ username: 'rl'})
      .execute();

    const { affected } = record || {};
    return affected > 0;
  }

  async updateUser() {
    try {
      const result = await this.userModel
        .createQueryBuilder()
        .update()
        .set({
          password:'456',
        })
        .where({ username: 'rl'})
        .execute();

      const { affected } = result || {};

      return affected > 0;
    } catch (e) {
      console.log('接口更新失败');
    }

  }


  async getUserList() {
    const users = await this.userModel
      .createQueryBuilder()
      .where({ username: 'rl' })
      .getMany();

    return users;
  }

}
