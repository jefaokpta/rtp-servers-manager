import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RtpServersService } from './rtp-servers.service';
import { CreateRtpServerDto } from './dto/create-rtp-server.dto';
import { UpdateRtpServerDto } from './dto/update-rtp-server.dto';

@Controller('rtp-servers')
export class RtpServersController {
  constructor(private readonly rtpServersService: RtpServersService) {}

  @Post()
  create(@Body() createRtpServerDto: CreateRtpServerDto) {
    return this.rtpServersService.create(createRtpServerDto);
  }

  @Get()
  findAll() {
    return this.rtpServersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rtpServersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRtpServerDto: UpdateRtpServerDto) {
    return this.rtpServersService.update(+id, updateRtpServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rtpServersService.remove(+id);
  }
}
