import React from 'react';
var tarih = new Date();
var yil = tarih.getFullYear();
var ay = tarih.getMonth();
var gun = tarih.getDay();
const City = ({ city }) => {
  return (
    <div>
      <h2>{gun + "/" + ay + "/" + yil}</h2>
      <div className='city'> {city?.name}</div>
      <div className='temp'> Sıcaklık: {city?.main.temp} </div> 
     <div className='desc'> {city?.weather[0].description} </div>
    
 
    </div>
  )
}

export default City