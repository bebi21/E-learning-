import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column({type:'varchar', length: 155})
  course_name: string;

  @Column({type:'longtext'})
  link_video: string;

  @Column({type:'longtext'})
  image: string;
    
}
