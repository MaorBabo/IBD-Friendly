import "./Card.css";

interface Props {
  background: string;
  title: string;
  text: string;
}

const Card = ({ background, title, text }: Props) => {
  // Create a class name based on the `background` property
  const cardClassName = `card ${background}`;

  return (
    <div className={cardClassName} style={{ width: "18rem" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Explore more
        </a>
      </div>
    </div>
  );
};

export default Card;
