import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import { Outlet } from "react-router-dom";

const cocktailSearchUrl =
  "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  return "something";
};
{
  /* <div className="overview-replaceable">
  <Outlet />
</div>; */
}

const Landing = () => {
  const data = useLoaderData();
  console.log(data);

  return <h1>landing</h1>;
};

export default Landing;
