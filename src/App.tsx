import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignInOut from "./pages/SignInOut";
import RecipeGenerator from "./pages/RecipeGenerator";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  email: string;
  name: string;
  password: string;
  whiteList: string[];
  blackList: string[];
  recipeList: string[];
}

function App() {
  let whiteList = ["avocado", "eggs", "peanut butter"];
  let blackList = ["tomato", "coffee", "processed meat"];
  let recipeList = ["link1", "link2", "link3"];

  const [user, setUser] = useState<User>({
    email: "",
    name: "",
    password: "",
    whiteList: [],
    blackList: [],
    recipeList: [],
  });

  useEffect(() => {
    axios
      .get<User>({
        /* paste backend url here*/
      })
      .then((res) => setUser(res));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInOut />} />
        <Route path="/SignInOut" element={<SignInOut />} />

        <Route path="/Home" element={<Home />} />
        <Route
          path="/Profile"
          element={
            <Profile
              whiteList={whiteList}
              blackList={blackList}
              recipeList={recipeList}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/RecipeGenerator" element={<RecipeGenerator />} />
        <Route path="/SignInOut" element={<SignInOut />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
