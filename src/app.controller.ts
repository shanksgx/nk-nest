import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

class CreateIndexDto {
  @ApiProperty({ description: '主键' })
  readonly id: number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('首页')
  @ApiOperation({ summary: '首页测试接口' })
  @Get()
  getHello(@Body() id: CreateIndexDto): string {
    console.log(
      '🚀 ~ file: app.controller.ts:16 ~ AppController ~ getHello ~ id:',
      id,
    );
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  async test(@Body() body) {
    return body;
  }
}
