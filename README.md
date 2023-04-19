[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fleerob.io)

# leerob.io

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## TODO

My Todo

- [ ] Replace
  - [ ] Tab name
  - [ ] favicon
  - [ ] L icon into animated folding triangle J
  - [ ] homepage
- [ ] Remove Guestbook
- [ ] Add sanity.io to blog

Lee Rob TODO:

- [ ] Global `404` page coming soon
- [ ] Move redirects to end of routing stack (not in `next.config.js`)
- [ ] Use new support for API routes in `app` (not ready yet)
- [ ] Improved scroll position support in `app/` (not implemented yet)

You can learn more about the `app/` directory [here](https://beta.nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash

pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/leerob/leerob.io/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.
