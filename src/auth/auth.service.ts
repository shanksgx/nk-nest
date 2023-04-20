import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  public async login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return this.jwtService.sign(
        {
          id: 'goduer123456',
        },
        {
          secret: process.env.SECRET,
        },
      );
    } else {
      return false;
    }
  }
}
