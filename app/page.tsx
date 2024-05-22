"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Weather from "@/components/Weather";
import  {Loading}  from "@/components/Loading";

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      hello dev
      <button onClick={fetchWeather} className="border-2"> Fetch the Weather</button>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/55 z-[1]" />
      <Image
        src="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="background image"
        layout="fill"
      />

      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
        <form
          onSubmit={fetchWeather}
          className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className='bg-transparent border-none text-white focus:outline-none text-2xl'
              type='text'
              placeholder='Search city'
            />
          </div>
          <button type="submit">Fetch weather</button>
        </form>
      </div>

      {/* Weather */}
      { weather &&weather.main && <Weather data={weather} />}
    </div>
  );
}
