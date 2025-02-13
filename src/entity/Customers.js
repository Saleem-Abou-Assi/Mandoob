import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { BillsIn } from './BillsIn';

@Entity('customers')
export class Customers {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  line;

  @Column('decimal')
  balance;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @OneToMany(() => BillsIn, billsIn => billsIn.customer)
  billsIn;
}
