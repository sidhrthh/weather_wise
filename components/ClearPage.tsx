import React from "react";

interface ClearProps{
    setWeatherData : any
}

export default function ClearPage({setWeatherData} : ClearProps){

    const handleClear = () => {
        setWeatherData(null);
        window.location.reload(); // Reload the page
      };

    return (
        <button onClick={handleClear} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Clear</button>
    )
}