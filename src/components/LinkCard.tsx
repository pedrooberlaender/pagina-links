interface LinkCardProps {
  title: string;
  url: string;
  image: string;
}

export function LinkCard({ title, url, image }: LinkCardProps) {
  return (
    <a
      href={url}
      className="block mb-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="relative w-[333px] h-[149.11px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
}