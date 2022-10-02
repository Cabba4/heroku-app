import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CountryList from "../components/ContryList";

const FinlandPage = () => {

  
  const [countries, setCountries] = useState([]);
  const loadCountries = async () => {
    const response = await fetch("https://country-list-31960-default-rtdb.europe-west1.firebasedatabase.app/countries.json");
    const data = await response.json();

    const fetchedCountries = [];
    for (const key in data){
      fetchedCountries.push({
        id: key,
        name: data[key].country
      });
    }
    console.log(fetchedCountries);
    setCountries(fetchedCountries);
  } 

  const history = useHistory();
  const [showModal, setModal] = useState(false);
  const showModalHandler = () => {
    setModal(true);
  }

  const cancelModal = () => {
    setModal(false);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  const randomHandler = () => {
    // history.replace also works push is like stack replace pops it out 
    setModal(false);
    history.push("/list")
  }
  let content;

  if (countries.length === 0){
    content = <p>There are no countries yet</p>
  }
  else{
    content = <p>Here is the country list!</p>
  }

  return (
    <div>
      <h2>{content}</h2>
      <button onClick={showModalHandler}>Add Country to travel list</button>
      { showModal && <Modal 
      onCancel={cancelModal} 
      onConfirm={randomHandler}/>}
      { showModal ? <Backdrop onClick={cancelModal}/> : null}
      <section>
        <CountryList country={countries} />
      </section>
    </div>
  );
};

export default FinlandPage;
