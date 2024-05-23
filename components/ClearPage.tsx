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
        <button onClick={handleClear} className="text-xl ml-4 px-4 py-2 bg-transparent text-white rounded">Clear</button>
    )
}