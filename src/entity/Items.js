import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { BillsOut } from './BillsOut';
import { BillsIn } from './BillsIn';

@Entity('items')
export class Items {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column('decimal')
  b_price;

  @Column('decimal')
  s_price;

  @Column('int')
  quantity;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @ManyToMany(() => BillsIn, billsIn => billsIn.items)
  @JoinTable({
    name: 'item_bill_in',
    joinColumn: { name: 'item_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bill_in_id', referencedColumnName: 'id' }
  })
  billsIn;

  @ManyToMany(() => BillsOut, billsOut => billsOut.items)
  @JoinTable({
    name: 'item_bill_out',
    joinColumn: { name: 'item_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bill_out_id', referencedColumnName: 'id' }
  })
  billsOut;
}
