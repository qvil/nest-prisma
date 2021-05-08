import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  @ApiProperty()
  name?: string | null;

  @ApiProperty()
  email?: string | null;

  @ApiProperty()
  password: string;
}
