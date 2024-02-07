import PlayerCard from "@/components/PlayerCard.server";
import type { InferGetServerSidePropsType } from "next";

async function fetchPlayers() {
  return [
    {summonerName: 'PlayerOne', data: {}}
  ]
}

export const getServerSideProps = async () => {
  const players = await fetchPlayers();
  return {
    props: {
      players
    }
  }
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default functoin HomePage({players}: Props) {
  return (
    <main>
    </main>
  )
}

