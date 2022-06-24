import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Chinese"}>
        <GiNoodles />
        <h4>Chinese</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Vietnamese"}>
        <GiChopsticks />
        <h4>Vietnamese</h4>
      </StyledLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  transform: scale(0.8);
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    
    svg {
      color: white;
  }

  h4{
    color:white;
  }
`;

export default Category;
