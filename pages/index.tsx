import Pill from '@/components/common/Pill';
import HEROIMAGE from '@/constants/hero.jpg'
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

const filters = ['Top Villa', 'Self Che ckin', 'Pet Friendly', 'Free WiFi', 'Pool'];

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-cover bg-center">
        <Image src={HEROIMAGE} layout="fill" objectFit="cover" objectPosition="center" alt="Hero Image" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">Find your favorite place here!</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4 drop-shadow-md">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>
      <section className="flex flex-wrap gap-2 mt-4">
        <Pill filters={filters} onClick={(filter) => console.log(filter)} />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.name} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={property.image} alt={property.name} width={500} height={192} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-500">${property.price} per night</p>
              <p className="text-sm text-gray-500">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
