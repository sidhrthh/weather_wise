"use client"

import useWeather from '@/hooks/useWeather';
import WeatherForm from '@/components/WeatherFrom';
import BackgroundImage from '@/components/BackgroundImage';
import Loading from '@/components/Loading';
import Weather from '@/components/Weather';
import Error from '@/components/Error';
import { useState } from 'react';
import ClearPage from '@/components/ClearPage';

export default function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();
  const [weatherData, setWeatherData] = useState<any>(null);

 

  return (
    <div>
      {loading && <Loading />}
      <BackgroundImage />
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
        <WeatherForm fetchWeather={fetchWeather} />
        <ClearPage setWeatherData={setWeatherData} />
        
      </div>
      <Error message={error} />
      {weather && <Weather data={weather} />}
     
    </div>
  );
}
