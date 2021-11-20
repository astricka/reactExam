import {useState} from "react";

function RegistrationForm() {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [age, setAge] = useState('');
    const [legalAge, setLegalAge] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (age >= 18) setLegalAge('registration success');
        if (age < 18) setLegalAge('you must be 18 to register');
    }

    return(
        <main>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your sur name"
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button>Submit</button>
                {legalAge && (
                    <h1>{legalAge}</h1>
                )}
            </form>
        </main>
    );
}

export default RegistrationForm;