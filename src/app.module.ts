import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmakerModule } from './bookmaker/bookmaker.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, UserModule, BookmakerModule, PrismaModule],
})
export class AppModule {}
