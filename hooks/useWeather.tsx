import { useState } from "react";
import axios from "axios";

const useWeather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
      console.error("Error fetching weather data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};

export default useWeather;
