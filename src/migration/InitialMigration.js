import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1615551234567 {

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "items" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" VARCHAR NOT NULL,
                "b_price" DECIMAL NOT NULL,
                "s_price" DECIMAL NOT NULL,
                "quantity" INTEGER NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now'))
            );

            CREATE TABLE "customers" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" VARCHAR NOT NULL,
                "line" VARCHAR NOT NULL,
                "balance" DECIMAL NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now'))
            );

            CREATE TABLE "traders" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" VARCHAR NOT NULL,
                "balance" DECIMAL NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now'))
            );

            CREATE TABLE "bills_in" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "customer_id" INTEGER,
                "total_cost" DECIMAL NOT NULL,
                "pay" DECIMAL NOT NULL,
                "old_balance" DECIMAL NOT NULL,
                "new_balance" DECIMAL NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );

            CREATE TABLE "bills_out" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "trader_id" INTEGER,
                "total_cost" DECIMAL NOT NULL,
                "pay" DECIMAL NOT NULL,
                "old_balance" DECIMAL NOT NULL,
                "new_balance" DECIMAL NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_trader_id" FOREIGN KEY ("trader_id") REFERENCES "traders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );

            CREATE TABLE "income" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "amount" DECIMAL NOT NULL,
                "customer_id" INTEGER,
                "bill_in_id" INTEGER,
                "note" VARCHAR NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_bill_in_id" FOREIGN KEY ("bill_in_id") REFERENCES "bills_in" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );

            CREATE TABLE "payment" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "amount" DECIMAL NOT NULL,
                "trader_id" INTEGER,
                "bill_out_id" INTEGER,
                "note" VARCHAR NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_trader_id" FOREIGN KEY ("trader_id") REFERENCES "traders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_bill_out_id" FOREIGN KEY ("bill_out_id") REFERENCES "bills_out" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );

            CREATE TABLE "item_bill_in" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "item_id" INTEGER,
                "bill_in_id" INTEGER,
                "price" DECIMAL NOT NULL,
                "note" VARCHAR NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_item_id" FOREIGN KEY ("item_id") REFERENCES "items" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_bill_in_id" FOREIGN KEY ("bill_in_id") REFERENCES "bills_in" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );

            CREATE TABLE "item_bill_out" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "item_id" INTEGER,
                "bill_out_id" INTEGER,
                "price" DECIMAL NOT NULL,
                "note" VARCHAR NOT NULL,
                "created_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                "updated_at" DATETIME NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "FK_item_id" FOREIGN KEY ("item_id") REFERENCES "items" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_bill_out_id" FOREIGN KEY ("bill_out_id") REFERENCES "bills_out" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            );
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "item_bill_out";
            DROP TABLE "item_bill_in";
            DROP TABLE "payment";
            DROP TABLE "income";
            DROP TABLE "bills_out";
            DROP TABLE "bills_in";
            DROP TABLE "traders";
            DROP TABLE "customers";
            DROP TABLE "items";
        `);
    }

}
