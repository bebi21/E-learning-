import { Module } from '@nestjs/common';
import { User } from './user/entity/user.entity';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course/entities/course.entity';
import { Subscription } from './subscription/entity/subscription.entity';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SubscriptionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'e-learning',
      entities: [Course, User, Subscription],
      synchronize: true,
    }),
    UserModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
