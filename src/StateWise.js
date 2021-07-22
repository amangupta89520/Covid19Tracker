import { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


const StateWise = () => {

    const [data, setData] = useState(null);
    const [statesData, setStatesData] = useState(null);
    const [value, setValue] = useState(null);
    const [valueTwo, setValueTwo] = useState(null);
    // const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [cityData, setCityData] = useState(null);

    useEffect(() => {
        fetch('https://covid.mathdro.id/api').then(res => res.json()).then(data => setData(data));
        fetch('https://api.covid19india.org/state_district_wise.json').then(res => res.json()).then(data => setStatesData(data));
    }, []);

    const handleClick = () => {
        if(statesData){
            if(JSON.stringify(statesData).includes(value)){
                setCityData(statesData[region].districtData[value]);
                setValueTwo(value);
            }else{
                setCityData(null);
            }
        }
    }

    const handleChange = (e) => {
        const trimmedValue = e.target.value.trim();
        const value = trimmedValue.charAt(0).toUpperCase() + trimmedValue.substring(1);
        setValue(value);
    }

    // const selectCountry = (val) => {
    //     setCountry(val);
    // }
    
    const selectRegion = (val) => {
        setRegion(val);
    }


    return (
        <div className="p-2  bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-screen">
            <div className="flex-row">
                {/* <CountryDropdown className="border-b-4 p-1 outline-none bg-red-100 dark:bg-gray-700 dark:text-yellow-300 rounded-md w-full" value={country} onChange={(val) => selectCountry(val)} /> */}
                {/* <RegionDropdown className="border-b-4 p-1 outline-none bg-red-100 dark:bg-gray-700 dark:text-yellow-300 rounded-md w-full my-2" country={country} value={region} onChange={(val) => selectRegion(val)} /> */}
                <RegionDropdown className="border-b-4 p-1 outline-none bg-red-100 dark:bg-gray-700 dark:text-yellow-300 rounded-md w-full mb-2" country="India" value={region} onChange={(val) => selectRegion(val)} />
                <input className="border-b-4 p-1 outline-none bg-red-100 dark:bg-gray-700 dark:text-yellow-300 rounded-md w-full" type="text" onChange={(e) => handleChange(e)} placeholder="Enter your city"/>
                <button className="px-2 dark:bg-gray-700 dark:text-yellow-300 bg-red-100 rounded-md hover:bg-red-200 dark:hover:bg-gray-600 my-2 focus:outline-none" onClick={handleClick}>Search</button>
            </div>
            {cityData? <p className="text-center mt-2 text-red-400 dark:text-yellow-300 border-b-2">Cases in {valueTwo}</p> : <p className="text-center my-2 text-green-400 dark:text-yellow-300 border-b-2">Global Records</p>}
            {cityData ?
            <div className="grid sm:grid-cols-3 gap-10 my-2">
                <div className="border-4 border-red-400 p-2 rounded-2xl dark:border-yellow-500 dark:bg-yellow-100 text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Confirmed Cases</p>
                    <p className="font-bold text-center text-3xl">{cityData? cityData.confirmed : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 p-2 dark:border-yellow-500 dark:bg-yellow-100 rounded-2xl text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Recovered Cases</p>
                    <p className="font-bold text-center text-3xl">{cityData? cityData.recovered : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 dark:border-yellow-500 dark:bg-yellow-100 p-2 rounded-2xl text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Deaths</p>
                    <p className="font-bold text-center text-3xl">{cityData? cityData.deceased : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 dark:border-yellow-500 dark:bg-yellow-100 p-2 rounded-2xl text-red-900 bg-pink-300 mb-8">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Active Cases</p>
                    <p className="font-bold text-center text-3xl">{cityData? cityData.active : 'loading'}</p>
                </div>
            </div>
            :
            <div className="grid sm:grid-cols-3 gap-10 my-2">
                <div className="border-4 border-red-400 dark:border-yellow-500 dark:bg-yellow-100 p-2 rounded-2xl text-red-900 bg-pink-300">
                <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Confirmed Cases</p>
                <p className="font-bold text-center text-3xl">{data? data.confirmed.value : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 dark:border-yellow-500 dark:bg-yellow-100 p-2 rounded-2xl text-red-900 bg-pink-300">
                <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Recovered Cases</p>
                <p className="font-bold text-center text-3xl">{data? data.recovered.value : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 p-2 dark:border-yellow-500 dark:bg-yellow-100 rounded-2xl text-red-900 bg-pink-300">
                <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Deaths</p>
                <p className="font-bold text-center text-3xl">{data? data.deaths.value : 'loading'}</p>
                </div>
            </div>
            }
            {/* // {cityData.active}
            // {cityData.confirmed}
            // {cityData.recoverd}
            // {cityData.deceased} */}
        </div>
    );
}
 
export default StateWise;