// app/page.tsx
import { fetchCards } from '../app/services/clashService';
import Navbar from '../app/components/Navbar'; // Ajusta la ruta según tu estructura

interface Card {
    id: string;
    name: string;
    maxLevel: number;
    maxEvolutionLevel: number;
    elixirCost: number;
    iconUrls: {
        medium: string;
    };
    rarity: string;
}

const HomePage = async () => {
    const data = await fetchCards();
    const cards: Card[] = data ? data.items : [];

    return (
        <div className="relative min-h-screen bg-gray-900">
            <div className="absolute inset-0">
                <img
                    src="https://e0.pxfuel.com/wallpapers/260/2/desktop-wallpaper-clash-of-clans-clash-royale-supercell-games-games-background-and.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />

                {/* Main content */}
                <div className="p-4">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center">Cartas de Clash Royale</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cards.map((card: Card) => (
                            <div key={card.id} className="bg-white bg-opacity-80 border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={card.iconUrls.medium}
                                    alt={card.name}
                                    className="w-24 h-24 mx-auto mb-4"
                                />
                                <h2 className="text-lg font-semibold text-gray-800 text-center">{card.name}</h2>
                                <p className="text-gray-600 text-center">Elixir Cost: {card.elixirCost}</p>
                                <p className="text-gray-600 text-center">Rarity: {card.rarity}</p>
                                <p className="text-gray-600 text-center">Max Level: {card.maxLevel}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
