/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import CollectPoint from './CollectPoint';
import CollectPointItems from './CollectPointItems';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  filepath: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  deleted_at: Date;

  // Relationships

  @ManyToMany(() => CollectPoint)
  collect_points: CollectPoint[];

  @OneToMany(
    () => CollectPointItems,
    collectPointItems => collectPointItems.item_id,
  )
  public collectPointItems!: CollectPointItems[];
}

export default Item;
