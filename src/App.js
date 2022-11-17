import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from "./City";

function App() {
  const key = "038ab037a575c32357b3295b16db693a";
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=tr`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
<div class="App">
        <div class="header">
            <h1>Hava Durumu</h1>
            <input  
          onChange={(e) => setSearch(e.target.value)}
          id="searchBar" type="text" placeholder="şehir giriniz"/>
        <City city={city} />
       </div></div>
      );
    }
    

export default App;