import React from 'react';

import PlayerCard from './PlayerCard.server';

const HomePage: React.FC = () => {
    const playerNames = ['PlayerOne', 'PlayerTwo', 'PlayerThree'];
    return (
        <main>
            <h1>League Leaderboard</h1>
            {playerNames.map((name)=> (
                <PlayerCard key={name} summonerName={name}/>
            ))}
        </main>
    )
}
