import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load variabel lingkungan langsung dari berkas .env.local maupun .env
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
