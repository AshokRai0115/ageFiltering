import { useState } from 'react';

import './App.css';

import Members from './Components/Members';

var dummy = [
  { id: 1,
    name: "ashok",
    age: 22
  },
  {id: 2,
    name: "broom",
    age: 22
  },
  {id: 3,
    name: "ccshok",
    age: 22
  }

]

function App() {
  const [members, setMembers] = useState(dummy);

  function newMemberAddedHandler(memberObj){
    setMembers(prev=>{
      return[
        memberObj,
        ...prev
      ]
    })
  }

  return (
    <div className="App">
      <Members members={members} onNewMemberAdded = {newMemberAddedHandler}/>
    </div>
  );
}

export default App;
