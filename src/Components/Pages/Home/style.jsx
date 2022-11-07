import { motion } from "framer-motion";
import styled from "styled-components";

export const WrapperHeader = styled.header`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 96.82%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #fafafa 86.53%),
    url("https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/homepage-img.png")
      no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Head = styled(motion.header)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 80%;
  color: #fafafa;
  animation: fadeIn 2s;
  @media screen and (max-width: 767px) {
    padding-top: 10rem;
  }
  > h4 {
    font-size: 2.375rem;
  }
  > h1 {
    font-size: 4.1rem;
  }
  > a {
    font-size: 2.2rem;
    text-decoration: none;
    margin-top: 2rem;
    background-color: #fed326;
    color: #302e2e;
    padding: 16.48px 21.97px;
    border-radius: 1rem;
    font-weight: 600;
  }
  > a:hover {
    box-shadow: 0px 0px 105px 10px rgba(254, 211, 38, 0.9);
    transition: all 0.5s;
    background: rgb(254, 211, 38);
    background: radial-gradient(
      circle,
      rgba(254, 211, 38, 1) 0%,
      rgba(255, 225, 103, 1) 40%,
      rgba(252, 228, 131, 1) 52%,
      rgba(255, 244, 201, 1) 99%
    );
  }
`;

export const EventsSection = styled.section`
  width: 85vw;
  margin: auto;
  > h3 {
    font-size: 2.375rem;
    margin-top: 5rem;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
    > hr {
      border-color: #fed326;
    }
  }
`;

export const Card = styled(motion.div)`
  width: 25rem;
  border: none;
  background-color: #fafafa;
  @media screen and (max-width: 767px) {
    width: 21rem;
  }
  > a {
    color: #fed326;
  }
  > img {
    width: 100%;
    object-fit: cover;
  }
  > a > h5 {
    font-size: 1.875rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Action = styled.div`
  display: ${(props) => (props.eventsHomepage ? "flex" : "block")};
  justify-content: ${(props) => (props.eventsHomepage ? "space-between" : "")};
  margin-top: ${(props) => (props.eventsHomepage ? "1rem" : "")};
  > a {
    color: #302e2e;
    text-decoration: none;
    font-weight: 600;
    background-color: #fed326;
    padding: 1rem;
    width: max-content;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  background-color: #fed326;
  font-size: ${props => props.findout ? '1.5rem' : '2rem'};
  width: ${props => props.findout ? '20rem' : '25rem'};
  border-radius: ${props => props.findout ? '0.5rem' : null};
  border: none;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 5rem;
  padding: 10px 25px;
  font-weight: 600;
  &:hover {
    background-color: #ffe065;
    transition: ease-in-out 0.5s;
    scale: 1.3;
  }
`;

export const Image = styled.img`
max-height: ${props => props.batik ? '11rem' : null};
object-fit: ${props => props.batik ? 'cover' : null};
  @media screen and (max-width: 767px) {
    max-height: 2rem;
    margin-top: 5rem;
  }
`;

export const CopywritingWrapper = styled(motion.div)`
    text-align: center;
    background-color: #302e2e;

    >.col-md-6{
      order: ${props => props.second ? '2' : null};
    }
    >.col-md-5{
      order: ${props => props.second ? '1' : null}
    }
    >.col-md-5 > img{
      padding-left: ${props => props.second ? '5rem !important' : null} ;
    }
    
`;

