import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState(null);
    const [countryData, setCountryData] = useState(null);
    const [specificCountryData, setSpecificCountryData] = useState(null);
    const [found, setFound] = useState(false);
    const [feildValue, setFieldValue] = useState(null);
  
    useEffect(() => {
      fetch('https://covid.mathdro.id/api').then(res => res.json()).then(data => setData(data));
      fetch('https://covid.mathdro.id/api/countries/').then(res => res.json()).then(data => setCountryData(data));
    }, []);
  
    const getSpecifiCountryData = async (countryName) => {
      await fetch('https://covid.mathdro.id/api/countries/' + countryName).then(res => res.json()).then(data => setSpecificCountryData(data));
      // console.log(specificCountryData);
    }

    const handleChange = (e) => {
        const trimmedValue = e.target.value.trim();
        const value = trimmedValue.charAt(0).toUpperCase() + trimmedValue.substring(1);
        // const value = e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1);
        // console.log(countryData)
        var value2 = null
        var found2 = false
        for(var i = 0; i < countryData.countries.length; i++) {
            if (countryData.countries[i].name === value) {
                value2 = value;
                found2 = true;
                break;
            } else {
              setFound(false);
            }
        }
        if(value2) {
          setFieldValue(value2);
          setFound(found2)
        }else{
          setSpecificCountryData(null); 
        }
        // console.log(found);
    }
    
    const handleClick = () => {
        if(found){
            getSpecifiCountryData(feildValue);
        }
    }

    return (
        <div className="p-2  bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-screen">
            <div className="flex">
            <input className="border-b-4 p-1 outline-none bg-red-100 dark:bg-gray-700 dark:text-yellow-300 rounded-md w-full" type="text" onChange={(e) => handleChange(e)} placeholder="Search your country"/>
            <button className="px-2 dark:bg-gray-700 dark:text-yellow-300 bg-red-100 rounded-md ml-2 hover:bg-red-200 dark:hover:bg-gray-600 focus:outline-none" onClick={handleClick}>Search</button>
            </div>
            {specificCountryData? <p className="text-center mt-2 text-red-400 dark:text-yellow-300 border-b-2">Cases in {feildValue} - {specificCountryData.lastUpdate? <p className="my-2">Last Updated: {specificCountryData.lastUpdate.substring(0,10)} at {specificCountryData.lastUpdate.substring(12,19)}</p> : ''}</p> : <p className="text-center my-2 text-green-400 dark:text-yellow-300 border-b-2">Global Records</p>}
            {specificCountryData ?
            <div className="grid sm:grid-cols-3 gap-10 my-2">
                <div className="border-4 border-red-400 p-2 rounded-2xl dark:border-yellow-500 dark:bg-yellow-100 text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Confirmed Cases</p>
                    <p className="font-bold text-center text-3xl">{specificCountryData? specificCountryData.confirmed.value : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 p-2 dark:border-yellow-500 dark:bg-yellow-100 rounded-2xl text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Recovered Cases</p>
                    <p className="font-bold text-center text-3xl">{specificCountryData? specificCountryData.recovered.value : 'loading'}</p>
                </div>
                <div className="border-4 border-red-400 dark:border-yellow-500 dark:bg-yellow-100 p-2 rounded-2xl text-red-900 bg-pink-300">
                    <p className="border-b-2 border-pink-400 dark:border-yellow-700 text-center">Deaths</p>
                    <p className="font-bold text-center text-3xl">{specificCountryData? specificCountryData.deaths.value : 'loading'}</p>
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
        </div>
    );
}
 
export default Home;