// import 'server-only' not working with API routes yet
import { Generated, Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface Database {
  guestbook: GuestbookTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});
