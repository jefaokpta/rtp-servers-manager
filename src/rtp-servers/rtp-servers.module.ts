import { Module } from '@nestjs/common';
import { RtpServersService } from './rtp-servers.service';
import { RtpServersController } from './rtp-servers.controller';

@Module({
  controllers: [RtpServersController],
  providers: [RtpServersService],
})
export class RtpServersModule {}
