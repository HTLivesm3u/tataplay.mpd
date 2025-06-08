export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    // Redirect to Telegram link if no ID provided
    res.writeHead(302, { Location: 'https://t.me/HTLivesm3u' });
    res.end();
    return;
  }

  // Redirect to the manifest.mpd with the provided ID
  const target = `http://amit-1.allinonereborn.in/tplaydrm89/manifest.mpd?id=${id}`;
  res.writeHead(302, { Location: target });
  res.end();
}
