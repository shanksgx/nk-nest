import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    console.log(
      '🚀 ~ file: user.controller.ts:10 ~ UserController ~ login ~ body:',
      body,
    );
    const { username, password } = body;
    return this.authService.login(username, password);
  }
}
