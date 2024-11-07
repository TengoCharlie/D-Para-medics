import { Injectable } from '@nestjs/common';

@Injectable()
export class AnotherNestWorkService {
  getHello(): string {
    return 'Hello World!';
  }
}
