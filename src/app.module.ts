import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { User } from './user/entity/user.entity';
import { Course } from './course/entities/course.entity';
import { Subscription } from './subscription/entity/subscription.entity';
import { CourseModule } from './course/course.module';

import { CloudinaryModule } from './cloudinary/cloudinary.module';

import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryController } from './cloudinary/cloudinary.controller';

@Module({
  imports: [
    CloudinaryModule,
    SubscriptionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'loc214',
      database: 'e-learning',
      entities: [Course, User, Subscription],
      synchronize: true,
    }),
    UserModule,
    CourseModule,
  ],
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
})
export class AppModule {}
