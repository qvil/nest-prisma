import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { softDelete } from './middleware/prisma.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  softDelete();

  const config = new DocumentBuilder()
    .setTitle('Prisma example')
    .setDescription('Prisma example API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
