/* eslint-disable camelcase */
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import CollectPoint from './CollectPoint';
import Item from './Item';

@Entity('collect_points_items')
class CollectPointItems {
  @PrimaryColumn()
  collect_point_id: string;

  @PrimaryColumn()
  item_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relationships
  @ManyToOne(() => CollectPoint)
  public collect_point!: CollectPoint;

  @ManyToOne(() => Item)
  public item!: Item;
}

export default CollectPointItems;
