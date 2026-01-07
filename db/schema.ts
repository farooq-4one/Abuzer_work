import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const multiStepSubmissions = pgTable("multi_step_submissions", {
  id: serial("id").primaryKey(),

  // Step 1 fields
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  address: text("address").notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 255 }).notNull(),
  zip: varchar("zip", { length: 50 }).notNull(),

  // Step 2 fields
  bank: varchar("bank", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }).notNull(),
  payrollOption: varchar("payroll_option", { length: 50 }).notNull(),
  depositDate: varchar("deposit_date", { length: 50 }).notNull(),
  depositAmount: varchar("deposit_amount", { length: 50 }).notNull(),
  endingBalance: varchar("ending_balance", { length: 50 }).notNull(),

  // Step 3 fields
  accountNumber: varchar("account_number", { length: 255 }),
  howMany: varchar("how_many", { length: 50 }).notNull(),
  paymentOption: varchar("payment_option", { length: 50 }).notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

