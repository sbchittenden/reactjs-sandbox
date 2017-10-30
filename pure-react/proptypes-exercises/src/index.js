import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
  return (
    <div>
      <Address person={testPerson}/>
      <Envelope addressInfo={testAddresses}/>
      <CreditCard cardInfo={testCCInfo}/>
      <Poster poster={testPoster}/>
      <EmailDisplay email={testEmail}/>
      <IconButton>Testing!</IconButton>
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

function CreditCard({ cardInfo }) {
  var { bankName, ccNumber, expiration, name } = cardInfo;
  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="cc-number">{ccNumber}</div>
      <div className="cc-little-num">{ccNumber.slice(0, 4)}</div>
      <div className="valid-thru">valid thru</div>
      <div className="exp-date">{expiration}</div>
      <div className="cardholder-name">{name}</div>
    </div>
    );
}

function Poster({ poster }) {
  var  { image, title, text } = poster
  return (
  <div className="poster">
    <div className="poster__image">
      <img src={image} alt=""/>
    </div>
    <div className="poster__title">{title}</div>
    <div className="poster__text">{text}</div>
  </div>
  );
}

function EmailDisplay({ email }) {
  var { sender, subject, date, message } = email;
  return (
    <div className="email-wrapper">
      <input className="email__select" type="checkbox"/>
      <i className="fa fa-thumb-tack" aria-hidden="true"></i>
      <div className="main-body">
        <span className="sender">{sender}</span>
        <span className="subject">{subject}</span>
        <span className="date">{date}</span>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

function IconButton({ children }) {
  return (
    <button className="icon-btn">
      <i className="fa fa-dot-circle-o"/>
      {children}
    </button>
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

var testCCInfo = {
  name: "Sam Chittenden",
  expiration: "08/19",
  ccNumber: "9883 5678 9876 5432",
  bankName: "MoneyBags, Inc."
}

var testPoster = {
  image: "http://www.placecage.com/c/300/210",
  title: "Nick Cage is Back!",
  text: "Hey hey hey, I'm back!"
}

var testEmail = {
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  date: "Jul 15",
  message: "React Newsletter - Issue 36 - July 15th 2016 Read this issue on the web http://www.reactjsnewsletter.com/issues/36/?sid=3QGDYBX"
};


ReactDOM.render(<App/>, document.querySelector('#root'))
