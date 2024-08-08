import {EntityModel} from "@midwayjs/orm";
import {Column, PrimaryGeneratedColumn} from "typeorm";


@EntityModel({name: 'user'})
export class UserModel {

  @PrimaryGeneratedColumn('increment') id: number;

  @Column({ name: 'user_name'}) username: string;

  @Column({ name: 'password'}) password: string;

}
