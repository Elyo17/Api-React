import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Events() {
    const [events, setEvents] = useState([]);
    const [barnav, setBarnav] = useState("");
    const [ordre, setOrdre] = useState(true);
    const [ordreDate, setOrdreDate] = useState(true)
   
    useEffect(() =>{
     fetch('http://localhost:8000/api/v1/event')
     .then((response) => {
       return response.json();
     })
     .then((result) =>{
       setEvents(result);
     })
     .catch(err => console.log(err))
    }, []);
   
   const handleBarnav = (e) =>{
     let value = e.target.value;
     setBarnav(value);
   }
   console.log(barnav)
   
   
   const trierListe = () => {
     const nomsTries = [...events].sort((a, b) =>
       ordre ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
     );
     setEvents(nomsTries);
     setOrdre(!ordre);
   };

   const trierDate = () => {
    const nomDate = [...events].sort((a,b) =>
        ordreDate ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    );
    setEvents(nomDate);
    setOrdreDate(!ordreDate);
   }
   
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
       <h1>Listes des événements: </h1>
       <ul>
         {events.filter((val) =>{
           return val.name.toLowerCase().includes(barnav.toLowerCase());
         }).map(val => (
           <li key={val.id}>
             <Link to={`/events/${val.id}`} style={{ color: "blue" }}>
               {val.name}
             </Link>
           </li>
         ))}
       </ul>
       <div>
           <button onClick={trierListe}>
             Trier {ordre ? "A-Z" : "Z-A"}
           </button>
           <button onClick={trierDate}>
            Trier {ordreDate ? "Croissant" : "Décroissant"}
           </button>
         </div>
       </div>
   )

}