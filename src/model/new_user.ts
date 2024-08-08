import {EntityModel} from "@midwayjs/orm";
import {Column, PrimaryGeneratedColumn} from "typeorm";


@EntityModel({name: 'new_user'})
export class NewUserModel {

  @PrimaryGeneratedColumn('increment') id: number;

  @Column({ name: 'user_name'}) username: string;

  @Column({ name: 'age'}) age: string;

  @Column({ name: 'password'}) password: string;
}
