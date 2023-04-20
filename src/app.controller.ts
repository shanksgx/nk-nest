import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

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
}
