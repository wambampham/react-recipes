import { useEffect, useState } from "react";
import styled from "styled-components"; //Kinda like an inline css
import { Splide, SplideSlide } from "@splidejs/react-splide"; //Splide is a library that makes a carousel for images
import "@splidejs/react-splide/css";

function Veggie() {
  const [veggie, setVeggie] = useState([]); // veggie will return an array of dishes

  //Run the api fetch
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    // Setting up local storage, so that we dont need to fetch the API everytime if theres an item in LS already
    const check = localStorage.getItem("veggie");

    if (check) {
      // Parsing the string back into an array and saving to state
      setVeggie(JSON.parse(check));
    } else {
      // Fetching API DATA
      // process.env.REACT_APP_API_KEY is taking the variable from our .env so people cant steal the key
      // &number=9 means we want to fetch 9 things from the api
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      //console.log(data);  USE THIS AS A VISUAL TO SEE WHAT DATA IS IMPORTED
      // Local storage only stores strings, so we transform the array into strings
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes); //get '.recipes' by looking at the json returned in browser
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            // pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  // margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%,
    height: 100%,
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight:600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items:center;
    
  }
`;

// To make the text stand out more
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: auto;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
