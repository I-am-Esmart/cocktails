import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailList";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { Outlet } from "react-router-dom";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};
{
  /* <div className="overview-replaceable">
  <Outlet />
</div>; */
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <div>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
