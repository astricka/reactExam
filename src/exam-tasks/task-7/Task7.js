import React, {useRef} from 'react';

function Task7() {

    const myRef = useRef(0);

    const changeDarkTheme = () => {
        myRef.current.style.backgroundColor = "#000000";
        myRef.current.style.color = "#f1f1f1";
    }

    const changeLightTheme = () => {
        myRef.current.style.backgroundColor = "#f1f1f1";
        myRef.current.style.color = "#0000";
    }

  return (
    <div style={{width: '300px', textAlign:'center'}} ref={myRef}>
      <h3>Task 7</h3>
        <h1>Some text</h1>
        <button onClick={changeLightTheme}>Light theme</button>
        <button onClick={changeDarkTheme}>Dark theme</button>
    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
