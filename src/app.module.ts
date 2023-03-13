import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmakerModule } from './bookmaker/bookmaker.module';


@Module({
  imports: [AuthModule, UserModule, BookmakerModule],
})
export class AppModule {}
