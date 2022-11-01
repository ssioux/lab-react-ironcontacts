import storedContacts from "./contacts.json";
import "./App.css";

let contactsArr = storedContacts;
const firstFiveContacts = contactsArr.slice(0, 5);

function App() {
  return (
    <div className="App">
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
          {firstFiveContacts.map((eachPerson) => {
            return (
              <tr key={eachPerson.id}>
                <td>
                  <img src={eachPerson.pictureUrl} alt="" width="80px" />
                </td>
                <td>{eachPerson.name}</td>
                <td>{eachPerson.popularity}</td>
                <td>{eachPerson.wonOscar === true ? <p>trophy</p>: <p></p>}</td>
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
