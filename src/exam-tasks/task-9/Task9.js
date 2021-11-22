import React, { Component } from 'react';
import Card from './Card';
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Table = styled.table`
  margin: 0 auto;
`

export default class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((resp) => resp.json())
        .then(data => {
          const slicedData = data.slice(0, 5);
          this.setState({ todos: slicedData });
        })
  }

  render() {
    return (
      <Container>
        <h3>Task 9</h3>
          <Table>
              <tr>
                  <th>Title</th>
                  <th>Complete status</th>
              </tr>
              {this.state.todos.map((item) => (
                  <Card key={item.id} title={item.title} completed={item.completed ? 'yes' : 'no'}/>
              ))}
          </Table>
      </Container>
    );
  }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/
