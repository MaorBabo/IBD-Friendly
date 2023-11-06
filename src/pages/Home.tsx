import NavBar from "../components/NavBar";
import "./Home.css";
import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div className="background-image">
        <NavBar />
        <div className="display">
          <Card
            background="recipe-img"
            title="AI recipe generator"
            text="This feature is an AI model that provides recipes based on given ingredients."
          />
          <Card
            background="food-predict-img"
            title="Food predictor"
            text="This feature allows you to predict whetere a certin food is good or bad for you."
          />
          <Card
            background="best-coise-img"
            title="Tops"
            text="Contains the most common recips that users liked and saved that might be good for you."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
