import type { APIRoute } from 'astro';

// Single-page site: the homepage is the only URL to list.
export const GET: APIRoute = ({ site }) => {
  const home = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), site);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${home.href}</loc>
  </url>
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
