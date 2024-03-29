import { CloudinaryService } from './cloudinary.service';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// ... other imports

@Controller('image')
export class CloudinaryController {
  // ... Constructor
  constructor(private readonly CloudinaryService: CloudinaryService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
 async uploadImage(@UploadedFile() file: any) {
    const images =await this.CloudinaryService.uploadFile(file);
    console.log(images);

    return images.url;
  }
}
