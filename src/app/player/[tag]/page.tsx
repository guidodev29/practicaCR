// app/player/[tag]/page.tsx
import { fetchPlayer } from '../../services/clashService';

interface Badge {
    name: string;
    level: number;
    maxLevel: number;
    progress: number;
    target: number;
    iconUrls: {
        large: string;
    };
}

interface Player {
    tag: string;
    name: string;
    expLevel: number;
    trophies: number;
    bestTrophies: number;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    challengeCardsWon: number;
    challengeMaxWins: number;
    tournamentCardsWon: number;
    tournamentBattleCount: number;
    donations: number;
    donationsReceived: number;
    totalDonations: number;
    warDayWins: number;
    clanCardsCollected: number;
    arena: {
        id: number;
        name: string;
    };
    leagueStatistics: {
        currentSeason: {
            trophies: number;
            bestTrophies: number;
        };
        bestSeason: {
            id: string;
            trophies: number;
        };
    };
    badges: Badge[];
}

const PlayerDetailPage = async ({ params }: { params: { tag: string } }) => {
    const player = await fetchPlayer(params.tag);

    if (!player) {
        return <p className="text-center text-red-500">Player not found</p>;
    }

    return (
        <div className="p-4 bg-[url('/images/clash-background.jpg')] bg-cover bg-center min-h-screen">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">{player.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-900">Tag</h2>
                        <p className="text-lg">{player.tag}</p>
                    </div>
                    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-900">Nivel del Jugador</h2>
                        <p className="text-lg">{player.expLevel}</p>
                    </div>
                    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-900">Trofeos</h2>
                        <p className="text-lg">{player.trophies}</p>
                    </div>
                </div>
                <div className="bg-blue-200 p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-xl font-semibold text-blue-900">Arena Actual</h2>
                    <p className="text-lg">{player.arena.name}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-blue-900">Insignias</h2>
                    {player.badges.map((badge: Badge, index: number) => (
                        <div key={index} className="flex items-center mb-4 bg-white p-4 rounded-lg shadow-md border border-gray-300">
                            <img src={badge.iconUrls.large} alt={badge.name} className="w-16 h-16 mr-4" />
                            <div>
                                <p className="text-lg font-semibold text-blue-800">{badge.name}</p>
                                <p>Level: {badge.level} / {badge.maxLevel}</p>
                                <p>Progress: {badge.progress} / {badge.target}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayerDetailPage;

