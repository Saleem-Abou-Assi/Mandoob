import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Customers } from './Customers';
import { BillsIn } from './BillsIn';

@Entity('income')
export class Income {
  @PrimaryGeneratedColumn()
  id;

  @Column('decimal')
  amount;

  @ManyToOne(() => Customers, { nullable: true })
  @JoinColumn({ name: 'customer_id' })
  customer;

  @OneToOne(() => BillsIn, billsIn => billsIn.income, { nullable: true })
  @JoinColumn({ name: 'bill_in_id' })
  billIn;

  @Column()
  note;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
