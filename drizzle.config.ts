import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // Loaded from .env /.env.local at runtime
    url: process.env.DATABASE_URL!,
  },
});

