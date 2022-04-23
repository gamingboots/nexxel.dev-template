import type { NextApiRequest, NextApiResponse } from "next";
import { SpotifyArtist, topArtists } from "../../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 5).map((artist: SpotifyArtist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    followers: artist.followers.total,
    img: artist.images[1]
  }));

  // cache for 1 day
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ artists });
}
