import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionController } from './subscription/subscription.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from './user/entity/user.entity';
import { Course } from './course/entities/course.entity';

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
      entities: [Course, User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
