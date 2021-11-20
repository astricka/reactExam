import { useHistory } from "react-router-dom";

function Contacts() {
    const history = useHistory();
    return(
        <main>
            <h1>Contacts</h1>
            <button onClick={() => history.goBack()}>Go back</button>
        </main>
    );
}

export default Contacts;
