import { BadgeCheck } from 'lucide-react';

export function ProfileSection() {
  return (
    <div className="flex items-center mb-16 gap-6">
      <div className="relative">
        {/* Close friends ring effect */}
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse" style={{ padding: '3px' }}>
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
            <img
              src="profile-placeholder.jpg" // You'll replace this
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-1 right-1 bg-white rounded-full p-1">
          <BadgeCheck className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <h1 className="text-white text-3xl font-bold mb-1">Allan Cabral</h1>
        <p className="text-gray-300 text-lg mb-1">@allancabral</p>
        <p className="text-gray-300 text-lg">LINKS ÚTEIS ⬇️</p>
      </div>
    </div>
  );
}