import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
