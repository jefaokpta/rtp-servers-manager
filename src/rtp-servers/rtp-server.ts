/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 11/7/24
 */
import * as dgram from 'node:dgram';
import * as DatagramStream from 'datagram-stream';
import * as fs from 'node:fs';

export class RtpServer {
  private readonly port: number;

  constructor(port: number) {
    this.port = port;
  }

  private readonly HOST = '0.0.0.0';
  private readonly OUTPUT_FILE = 'audios/output.raw';
  private readonly server = dgram.createSocket('udp4');
  // @ts-ignore
  private readonly stream = new DatagramStream();
  private readonly fileStream = fs.createWriteStream(this.OUTPUT_FILE, {
    autoClose: true,
  });

  start() {
    // @ts-ignore
    this.stream.pipe(this.fileStream);
    this.server.on('listening', () => {
      const address = this.server.address();
      console.log(`UDP Server listening on ${address.address}:${address.port}`);
    });

    this.server.on('message', (msg, rinfo) => {
      // Remove o cabeçalho RTP (12 bytes)
      const audioData = msg.subarray(12);
      //swap 16 bits se codec for SLIN pq SLIN é big-endian e providers STT esperam little-endian
      // if (this.swap16) {
      //     buf.swap16();
      // }
      // Escreve os dados de áudio no stream de datagramas
      // @ts-ignore
      this.stream.write(audioData);
    });

    this.server.on('error', (err) => {
      console.log(`server error:${err.message}`);
      this.server.close();
    });

    this.server.on('close', () => {
      if (this.fileStream) this.fileStream.close();
      console.log('Socket is closed !');
    });

    this.server.bind(this.port, this.HOST);
  }
}
