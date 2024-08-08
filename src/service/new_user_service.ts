
import { Provide } from '@midwayjs/core';
import {NewUserModel} from "../model/new_user";
import {Repository} from "typeorm";
import {InjectEntityModel} from "@midwayjs/orm";




@Provide()
export class NewUserService {
  @InjectEntityModel(NewUserModel) userModel: Repository<NewUserModel>;


  async addUser(userInfo) {
    let record = new NewUserModel();

    record = this.userModel.merge(record,{
      username:userInfo.username,
      age: userInfo.age,
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
          password: '345',
        })
        .where({ username: 'rl'})
        .execute();

      const { affected } = result || {};

      return affected > 0;
    } catch (e) {
      console.log('接口更新失败');
    }

  }

}
