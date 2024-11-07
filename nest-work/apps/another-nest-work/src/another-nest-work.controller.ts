import { Controller, Get } from '@nestjs/common';
import { AnotherNestWorkService } from './another-nest-work.service';

@Controller()
export class AnotherNestWorkController {
  constructor(private readonly anotherNestWorkService: AnotherNestWorkService) {}

  @Get()
  getHello(): string {
    return this.anotherNestWorkService.getHello();
  }
}
