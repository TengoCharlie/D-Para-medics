import { Module } from '@nestjs/common';
import { AnotherNestWorkController } from './another-nest-work.controller';
import { AnotherNestWorkService } from './another-nest-work.service';

@Module({
  imports: [],
  controllers: [AnotherNestWorkController],
  providers: [AnotherNestWorkService],
})
export class AnotherNestWorkModule {}
