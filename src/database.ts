import { DataSource } from 'typeorm';
import { Items } from './entity/Items';
import { Customers } from './entity/Customers';
import { Traders } from './entity/Traders';
import { BillsIn } from './entity/BillsIn';
import { BillsOut } from './entity/BillsOut';
import { Payment } from './entity/Payment';
import { Income } from './entity/Income';
import { ItemBillIn } from './entity/ItemBillIn';
import { ItemBillOut } from './entity/ItemBillOut';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'DataBase.sqlite',
  entities: [
    Items,
    Customers,
    Traders,
    BillsIn,
    BillsOut,
    Payment,
    Income,
    ItemBillIn,
    ItemBillOut,
  ],
  synchronize: true,
  logging: false,
});

export default AppDataSource; 