import styled from "styled-components";
import { Head } from "../Home/style";

export const KaryaHeader = styled.header`
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 96.82%
    ),
    url("https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%2013.png")
      no-repeat;
  background-size: cover;
  height: 100vh;
`

export const KaryaHead = styled(Head)`
 > blockquote{
        width:40vw;
    }
`