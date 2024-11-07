import { Test, TestingModule } from '@nestjs/testing';
import { RtpServersController } from './rtp-servers.controller';
import { RtpServersService } from './rtp-servers.service';

describe('RtpServersController', () => {
  let controller: RtpServersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RtpServersController],
      providers: [RtpServersService],
    }).compile();

    controller = module.get<RtpServersController>(RtpServersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
