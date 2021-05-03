import { PartialType } from '@nestjs/swagger';

import { Partial } from 'src/types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// export type UpdateUserDto = Prisma.UserUpdateInput;
// export type UpdateUserDto = Partial<CreateUserDto>;
