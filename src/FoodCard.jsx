function Card({ name, description, image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default Card;