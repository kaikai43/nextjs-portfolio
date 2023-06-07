export default async function sitemap() {

  const routes = ['/projects', '/guestbook'].map(
    (route) => ({
      url: `https://jinkt.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
