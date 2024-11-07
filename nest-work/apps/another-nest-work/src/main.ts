import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AnotherNestWorkModule } from './another-nest-work.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnotherNestWorkModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
