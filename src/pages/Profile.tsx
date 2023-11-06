import Navbar from "../components/NavBar";
import List from "../components/List";

interface Props {
  whiteList: string[];
  blackList: string[];
  recipeList: string[];
}

const Profile = ({ whiteList, blackList, recipeList }: Props) => {
  return (
    <>
      <div className="background-image">
        <Navbar />
        <div className="display">
          <List items={whiteList} listName="White List" />
          <List items={blackList} listName="Black List" />
          <List items={recipeList} listName="Recips" />
        </div>
      </div>
    </>
  );
};

export default Profile;
