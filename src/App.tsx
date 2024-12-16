import { ProfileSection } from './components/ProfileSection';
import { LinkCard } from './components/LinkCard';

const links = [
  {
    title: "Sorte no Jogo",
    url: "#",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1800"
  },
  {
    title: "Canal do YouTube",
    url: "#",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1800"
  },
  {
    title: "Suporte e Dúvidas",
    url: "#",
    image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=1800"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12">
      <div className="max-w-[1000px] mx-auto px-8">
        <ProfileSection />
        
        <div className="flex flex-col items-center">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              image={link.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;