import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ArtistDetail() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [artistdetail, setArtistDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/artist/${id}`)
      .then((response) => response.json())
      .then((result) => setArtistDetail(result))
      .catch((err) => console.log(err));
  }, [id]);

  if (!artistdetail) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Détails de l'Artiste</h2>
      <p><strong>ID :</strong> {artistdetail.id}</p>
      <p><strong>Nom :</strong> {artistdetail.name}</p>
      <p><strong>Description :</strong> {artistdetail.description}</p>
      <p><strong>Image :</strong> <img src = {"http://localhost:8000/uploads/images/" + artistdetail.image }/> </p>
      <strong>Evenement:</strong> {artistdetail.events.map(oneEvent => (
        <li key={oneEvent.id}>
        <Link to={`/events/${oneEvent.id}`} style={{ color: "blue" }} >
        {oneEvent.name} 
        </Link>
        </li>
      ))} 
    </div>
  );
}
