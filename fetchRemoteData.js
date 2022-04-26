async function getCityCoords(city){
    const response = await fetch(`https://geocode.xyz/${city}?json=1`);
    const resObj = await response.json();
    console.log(`Lattitude: ${resObj.latt}`);
    console.log(`Longitude: ${resObj.longt}`);
};

getCityCoords("dallas");