import { FormEvent, useState } from "react";

interface WeatherFormProps {
  fetchWeather: (city: string) => Promise<void>;
}

const WeatherForm = ({ fetchWeather }: WeatherFormProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (city.trim() !== '') {
      await fetchWeather(city);
      setCity('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
    >
      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        className="bg-transparent border-none text-white focus:outline-none text-xl"
        type="text"
        placeholder="Search city"
        aria-label="Search city"
      />
      <button type="submit" aria-label="Fetch Weather">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </form>
  );
};

export default WeatherForm;
