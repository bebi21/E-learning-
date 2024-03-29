import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryController } from './cloudinary/cloudinary.controller';

@Module({
  imports: [CloudinaryModule],
  controllers: [AppController,CloudinaryController],
  providers: [AppService,CloudinaryService ],
})
export class AppModule {}
