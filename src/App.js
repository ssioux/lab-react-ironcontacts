import { useState } from "react";
import storedContactsArr from "./contacts.json";
import "./App.css";

function App() {
  const firstFiveContacts = storedContactsArr.slice(0, 5);

  const [famousList, setFamousList] = useState(firstFiveContacts);

  const randomPerson = () => {
    let randomArr = Math.random() * storedContactsArr.length;
    let randomFamous = Math.floor(randomArr);
    let newPerson = storedContactsArr[randomFamous];

    const copyFamousList = [...famousList];

    
    copyFamousList.includes(newPerson) === false && copyFamousList.push(newPerson)



    setFamousList(copyFamousList)
    // if (copyFamousList.includes(newPerson) === false) {
    //   copyFamousList.push(newPerson);
    //  setFamousList(copyFamousList);
    //  }

  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomPerson}>Add Random Contact</button>
      <table style={{ margin: "20px 0px 0px 200px", width: "40%" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          {famousList.map((eachPerson) => {
            return (
              <tr key={eachPerson.id}>
                <td>
                  <img src={eachPerson.pictureUrl} alt="" width="80px" />
                </td>
                <td>{eachPerson.name}</td>
                <td>{eachPerson.popularity}</td>
                <td>
                  {eachPerson.wonOscar === true ? <p>🏆</p> : <p></p>}
                </td>
                <td>{eachPerson.wonEmmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
