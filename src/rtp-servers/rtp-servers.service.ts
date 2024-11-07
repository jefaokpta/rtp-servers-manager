import { Injectable } from '@nestjs/common';
import { CreateRtpServerDto } from './dto/create-rtp-server.dto';
import { UpdateRtpServerDto } from './dto/update-rtp-server.dto';
import { RtpServer } from './rtp-server';

@Injectable()
export class RtpServersService {

  create(createRtpServerDto: CreateRtpServerDto) {
    new RtpServer(createRtpServerDto.port).start();
  }

  findAll() {
    return `This action returns all rtpServers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rtpServer`;
  }

  update(id: number, updateRtpServerDto: UpdateRtpServerDto) {
    return `This action updates a #${id} rtpServer`;
  }

  remove(id: number) {
    return `This action removes a #${id} rtpServer`;
  }
}
