import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Traders } from './Traders';
import { BillsOut } from './BillsOut';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id;

  @Column('decimal')
  amount;

  @ManyToOne(() => Traders, { nullable: true })
  @JoinColumn({ name: 'trader_id' })
  trader;

  @OneToOne(() => BillsOut, billsOut => billsOut.payment, { nullable: true })
  @JoinColumn({ name: 'bill_out_id' })
  billOut;

  @Column()
  note;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
