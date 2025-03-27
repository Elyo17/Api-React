import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Artist() {
 const [artist, setArtist] = useState([]);
 const [barnav, setBarnav] = useState("");
 const [ordre, setOrdre] = useState(true);

 useEffect(() =>{
  fetch('http://localhost:8000/api/v1/artist')
  .then((response) => {
    return response.json();
  })
  .then((result) =>{
    setArtist(result);
  })
  .catch(err => console.log(err))
 }, []);

const handleBarnav = (e) =>{
  let value = e.target.value;
  setBarnav(value);
}
console.log(barnav)


const trierListe = () => {
  const nomsTries = [...artist].sort((a, b) =>
    ordre ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
  setArtist(nomsTries);
  setOrdre(!ordre);
};

return(
    <div>
    <div className='Barnav'>
      <input 
      type='text' 
      name='Barnav' 
      id='Barnav' 
      placeholder='Rechercher'
      onChange={handleBarnav} 
      />
    </div>
    <h1>Listes des artistes: </h1>
    <ul>
      {artist.filter((val) =>{
        return val.name.toLowerCase().includes(barnav.toLowerCase());
      }).map(val => (
        <li key={val.id}>
          <Link to={`/artist/${val.id}`} style={{ color: "blue" }}>
            {val.name}
          </Link>
        </li>
      ))}
    </ul>
    <div>
        <button onClick={trierListe}>
          Trier {ordre ? "A-Z" : "Z-A"}
        </button>
      </div>
    </div>
)
}