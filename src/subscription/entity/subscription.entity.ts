import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  subscription_id: number;

  @Column({
    type: 'int',
  })
  user_id: number;

  @Column({
    type: 'int',
  })
  course_id: number;
}
