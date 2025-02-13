import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Customers } from './Customers';
import { Income } from './Income';
import { Items } from './Items';

@Entity('bills_in')
export class BillsIn {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Customers, customer => customer.billsIn)
  @JoinColumn({ name: 'customer_id' })
  customer;

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

  @OneToOne(() => Income, income => income.billIn)
  income;

  @ManyToMany(() => Items, items => items.billsIn)
  items;
}
