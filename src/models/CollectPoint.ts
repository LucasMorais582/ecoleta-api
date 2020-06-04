/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';

import Item from './Item';
import CollectPointItems from './CollectPointItems';

@Entity('collect_points')
class CollectPoint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  geometry: number;

  @Column()
  city: string;

  @Column()
  uf: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  deleted_at: Date;

  // Relationships

  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];

  @OneToMany(
    () => CollectPointItems,
    collectPointItems => collectPointItems.collect_point_id,
  )
  public collectPointItems!: CollectPointItems[];
}

export default CollectPoint;
