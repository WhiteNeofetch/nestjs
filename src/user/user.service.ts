import { Injectable, Module } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser() {
    return 'createUser';
  }
}
