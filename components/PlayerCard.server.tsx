import React from 'react';

import { fetchPlayerData, fetchPlayerRank } from '../utils/riotAPI.server';

interface PlayerProps {
    summonerName: string;
}


const PlayerCard: React.FC<PlayerProps> = async ({summonerName}) => {
    const playerData = await fetchPlayerData(summonerName)
    const playerRank = await fetchPlayerRank(playerData.id)

    return (
        <div>
            <h2>{playerData.name}</h2>
            {playerRank.map((rank) => (
                <div key = {rank.leagueId}>
                    <p>{`Rank: ${rank.tier} ${rank.rank}`}</p>
                    <p>{`LP:${rank.leaguePoints}`}</p>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;
