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

    copyFamousList.includes(newPerson) === false &&
      copyFamousList.push(newPerson);

    setFamousList(copyFamousList);
    // if (copyFamousList.includes(newPerson) === false) {
    //   copyFamousList.push(newPerson);
    //  setFamousList(copyFamousList);
    //  }
  };

  const sortPopularity = () => {
    const copyFamousList = famousList.map((eachElem) => eachElem);

    copyFamousList.sort((elem1, elem2) => {
      return elem1.popularity > elem2.popularity ? 1 : -1;
      // if (elem1.popularity > elem2.popularity) {
      //    return 1
      // } else {
      //     return -1
      // }
    });
    setFamousList(copyFamousList);
  };

  const sortName = () => {
    const copyFamousList = famousList.map((eachElem) => eachElem);


    copyFamousList.sort((elem1, elem2) => {
      return elem1.name > elem2.name ? 1 : -1;
    });
    setFamousList(copyFamousList);
  };

  const deleteFamous = (index) => {
    

    const copyFamousList = famousList.map((eachElem) => eachElem);

    // con index
    copyFamousList.forEach((eachFamous, copyIndex) =>{
      // console.log(copyIndex)
      copyFamousList.indexOf(eachFamous) === index && copyFamousList.splice(index, 1)
    })

     

    

    setFamousList(copyFamousList) 


  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomPerson}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <button onClick={sortName}>Sort By name</button>

      <table style={{ margin: "20px 0px 0px 200px", width: "40%" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {famousList.map((eachPerson, index) => {
            return (
              <tr key={eachPerson.id}>
                <td>
                  <img src={eachPerson.pictureUrl} alt="" width="80px" />
                </td>
                <td>{eachPerson.name}</td>
                <td>{eachPerson.popularity}</td>
                <td>{eachPerson.wonOscar === true ? <p>🏆</p> : <p></p>}</td>
                <td>{eachPerson.wonEmmy}</td>
                <td><button onClick={()=> deleteFamous(index)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
