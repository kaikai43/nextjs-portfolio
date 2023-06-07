// import 'server-only' not working with API routes yet
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

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
  dialect: new PlanetScaleDialect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }),
});
