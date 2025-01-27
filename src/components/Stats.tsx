import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { motion } from "framer-motion";
import * as fetchers from "../lib/fetcher";
import * as anims from "../animations/index";
import Header from "./Header";

const Track: FC<{ track: fetchers.SpotifyTrack }> = ({ track }) => {
  return (
    <Link href={track.url} passHref>
      <a
        href={track.url}
        className="p-5 stats-styles"
        rel="noreferrer"
        target="_blank"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {track.title}
        </h2>
        <p>{track.artist}</p>
      </a>
    </Link>
  );
};

const Artist: FC<{ artist: fetchers.SpotifyArtist }> = ({ artist }) => {
  return (
    <Link href={artist.url} passHref>
      <a className="flex stats-styles" rel="noreferrer" target="_blank">
        <div className="px-5 pt-4 pb-2">
          <Image
            src={artist.img.url}
            height={100}
            width={100}
            alt={artist.name}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-5">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {artist.name}
          </h2>
          <p className="text-xl">
            {artist.followers.toLocaleString()} followers
          </p>
        </div>
      </a>
    </Link>
  );
};

const Tracks: FC = () => {
  const { data } = useSWR("/api/stats/tracks", fetchers.trackFetcher);

  return (
    <Card
      data={data!}
      title="My Top Tracks"
      description="My favourite genres are blah blah stuff"
      tracks={true}
    />
  );
};

const Artists: FC = () => {
  const { data } = useSWR("/api/stats/artists", fetchers.artistFetcher);

  return (
    <Card
      data={data!}
      title="My Top Artists"
      description="Artists i like"
      tracks={false}
    />
  );
};

type CardProps = {
  data: fetchers.SpotifyArtist[] | fetchers.SpotifyTrack[];
  title: string;
  description: string;
  tracks: boolean;
};

const Card: FC<CardProps> = ({ data, title, description, tracks }) => {
  return (
    <motion.div
      className="flex flex-col mt-24"
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <Header head={title} size={4} />
      <motion.p
        className="mt-5 text-lg text-gray-500 dark:text-gray-400"
        variants={anims.Fade}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col mt-10 overflow-hidden rounded"
        variants={anims.Fade}
      >
        {tracks
          ? // @ts-ignore
            data?.tracks?.map((track, index) => (
              <Track key={index} track={track} />
            )) // @ts-ignore
          : data?.artists?.map((artist, index) => (
              <Artist key={index} artist={artist} />
            ))}
      </motion.div>
    </motion.div>
  );
};

const Stats: FC = () => {
  return (
    <>
      <Tracks />
      <Artists />
    </>
  );
};

export default Stats;
