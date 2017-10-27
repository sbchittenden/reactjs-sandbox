import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
  return (
    <div>
      <Address person={testPerson}/>
      <Envelope addressInfo={testAddresses}/>
    </div>
  );
}

function Address({ person }) {
  return (
    <div className="address">
      <p className="name">{person.firstname} {person.lastname}</p>
      <p className="street">{person.address.street}</p>
      <p className="city-state-zip">{person.address.city}, {person.address.state} {person.address.zip}</p>
    </div>
  );
}

function Envelope({ addressInfo }) {
  var { toPerson, fromPerson } = addressInfo
  return (
    <div className="envelope">
      <div className="sender">
        <Address person={fromPerson}/>
      </div>
      <div className="receiver">
        <Address person={toPerson}/>
      </div>
      <div className="stamp">
        <span className="stamp__label">STAMP</span>
      </div>
    </div>
  );
}

var testPerson = {
  firstname: "Sam",
  lastname: "Chittenden",
  address: {
    street: "123 Fake St.",
    city: "Boston",
    state: "MA",
    zip: '02118'
  }
};

var testPerson2 = {
  firstname: "William",
  lastname: "Shakespeare",
  address: {
    street: "123 Fake St.",
    city: "San Francisco",
    state: "CA",
    zip: '90123'
  }
};

var testAddresses = {
  toPerson: testPerson2,
  fromPerson: testPerson
};

ReactDOM.render(<App/>, document.querySelector('#root'))
