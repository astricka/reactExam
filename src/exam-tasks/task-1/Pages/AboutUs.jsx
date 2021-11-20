import { useHistory } from "react-router-dom";

function AboutUs() {
    const history = useHistory();
    return(
        <main>
            <h1>About us</h1>
            <button onClick={() => history.goBack()}>Go back</button>
        </main>
    );
}

export default AboutUs;
