import { Module } from '@nestjs/common';
import { RtpServersModule } from './rtp-servers/rtp-servers.module';

@Module({
  imports: [RtpServersModule],
})
export class AppModule {}
