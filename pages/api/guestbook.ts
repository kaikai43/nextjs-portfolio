import type { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from "pages/api/auth/[...nextauth]";
import { queryBuilder } from 'lib/postgres';
import { getServerSession } from 'next-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(401).send('You must be logged in.');
  }

  const email = session.user.email as string;
  const name = session.user.name as string;

  if (req.method === 'POST') {
    await queryBuilder
      .insertInto('guestbook')
      .values({
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
      })
      .execute();

    return res.status(200).json({ error: null, message: 'Success' });
  }

  if (req.method === 'DELETE') {
    await queryBuilder
      .deleteFrom('guestbook')
      .where('id', '=', req.body.id)
      .where('email', '=', email)
      .execute();

    return res.status(204).json({});
  }

  return res.send('Method not allowed.');
}
