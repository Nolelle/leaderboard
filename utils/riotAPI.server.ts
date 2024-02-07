type SummonerData = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  summonerLevel: number;
};

export async function fetchPlayerData(
  summonername: string
): Promise<SummonerData> {
  const apiKey = process.env.riot_api_key;
  const region = "na1";
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonername}?api_key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch player data");

  return response.json();
}

export async function fetchPlayerRank(summonerId: string) {
  const apiKey = process.env.riot_api_key;
  const region = "na1";
  const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch player rank");

  return response.json();
}
