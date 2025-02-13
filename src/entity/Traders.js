import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { BillsOut } from './BillsOut';

@Entity('traders')
export class Traders {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column('decimal')
  balance;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @OneToMany(() => BillsOut, billsOut => billsOut.trader)
  billsOut;
}
