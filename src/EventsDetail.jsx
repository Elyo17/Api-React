import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function EventsDetail() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [eventsdetail, setEventsDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/event/${id}`)
      .then((response) => response.json())
      .then((result) => setEventsDetail(result))
      .catch((err) => console.log(err));
  }, [id]);

  if (!eventsdetail) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Détails de l'événement</h2>
      <p><strong>ID :</strong> {eventsdetail.id}</p>
      <p><strong>Nom :</strong> {eventsdetail.name}</p>
      <p><strong>Date :</strong> {eventsdetail.date}</p>
      <p><strong>Utilisateurs :</strong> {eventsdetail.Follower.map(user =>(
        <li key={user.id}>
          {user.username}
        </li>
      ))}</p>
      <p><strong>Artiste :</strong> <Link to={`/artist/${eventsdetail.id}`} style={{ color: "blue" }} > {eventsdetail.artist.name} </Link></p>
    </div>
  );
}