import { Test, TestingModule } from '@nestjs/testing';
import { AnotherNestWorkController } from './another-nest-work.controller';
import { AnotherNestWorkService } from './another-nest-work.service';

describe('AnotherNestWorkController', () => {
  let anotherNestWorkController: AnotherNestWorkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnotherNestWorkController],
      providers: [AnotherNestWorkService],
    }).compile();

    anotherNestWorkController = app.get<AnotherNestWorkController>(AnotherNestWorkController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(anotherNestWorkController.getHello()).toBe('Hello World!');
    });
  });
});
