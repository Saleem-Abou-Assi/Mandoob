import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Items } from './Items';
import { BillsOut } from './BillsOut';

@Entity('item_bill_out')
export class ItemBillOut {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Items)
  @JoinColumn({ name: 'item_id' })
  item;

  @ManyToOne(() => BillsOut)
  @JoinColumn({ name: 'bill_out_id' })
  billOut;

  @Column('decimal')
  price;
  
  @Column('integer')
  quantity;


  @Column()
  note;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
