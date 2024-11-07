import { Test, TestingModule } from '@nestjs/testing';
import { RtpServersService } from './rtp-servers.service';

describe('RtpServersService', () => {
  let service: RtpServersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RtpServersService],
    }).compile();

    service = module.get<RtpServersService>(RtpServersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
