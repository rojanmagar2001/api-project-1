import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

// Initialize the adapter according to your driver's requirements
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
// Pass the adapter instance to PrismaClient
const db = new PrismaClient({ adapter });

export function checkConnection() {
  return db
    .$connect()
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
      process.exit(1); // Exit the process with an error code
    });
}

export default db;
