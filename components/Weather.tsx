import Image from 'next/image';
import React from 'react';

interface WeatherProps {
  data: any
}


const Weather = ({ data }: WeatherProps) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[75vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-8xl'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom */}

      <div className='bg-black/50 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Weather;