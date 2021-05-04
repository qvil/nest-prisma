import { Prisma, User as UserModel } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({ data });
  }

  // findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByInput;
  // }): Promise<User[]> {
  //   const { skip, take, cursor, where, orderBy } = params;

  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }
  async findAll(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  // async findAllIncludeDeleted(): Promise<UserModel[]> {
  //   return this.prisma.user.findMany({ where: { includedDeleted: true } });
  // }

  findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserModel> {
    const { where, data } = params;

    return this.prisma.user.update({ data, where });
  }

  remove(where: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      where,
    });
  }
}
