import { PartialType } from '@nestjs/mapped-types';
import { CreateRtpServerDto } from './create-rtp-server.dto';

export class UpdateRtpServerDto extends PartialType(CreateRtpServerDto) {}
