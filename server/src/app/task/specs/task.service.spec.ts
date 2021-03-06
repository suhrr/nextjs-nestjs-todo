import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from '../task.service';
import { Task } from '../../../entities/task.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
