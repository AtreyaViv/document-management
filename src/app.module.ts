import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DocumentModule } from './document/document.module';
import { IngestionModule } from './ingestion/ingestion.module';

@Module({
  imports: [AuthModule, UserModule, DocumentModule, IngestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
