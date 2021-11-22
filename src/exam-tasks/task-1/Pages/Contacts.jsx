import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 20%;
`;

function Contacts() {
    const history = useHistory();
    return(
        <main>
            <h1>Contacts</h1>
            <Button onClick={() => history.goBack()}>Go back</Button>
        </main>
    );
}

export default Contacts;
