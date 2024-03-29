import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionController } from './subscription/subscription.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    SubscriptionModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // type of database
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'loc214',
      database: 'project5',

      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],

  controllers: [SubscriptionController],
  providers: [],
})
export class AppModule {}
