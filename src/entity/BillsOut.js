import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Traders } from './Traders';
import { Payment } from './Payment';
import { Items } from './Items';

@Entity('bills_out')
export class BillsOut {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Traders, trader => trader.billsOut)
  @JoinColumn({ name: 'trader_id' })
  trader;

  @Column('decimal')
  total_cost;

  @Column('decimal')
  pay;

  @Column('decimal')
  old_balance;

  @Column('decimal')
  new_balance;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @OneToOne(() => Payment, payment => payment.billOut)
  payment;

  @ManyToMany(() => Items, items => items.billsOut)
  items;
}
