import Modal from "../components/Modal";
import { useState, useRef } from "react";
import Backdrop from "../components/Backdrop";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const IndiaPage = () => {

    const history = useHistory();
    const [showModal, setModal] = useState(false);
    const showModalHandler = () => {
        setModal(true);
    }

    const cancelModal = () => {
        setModal(false);
    }

    const backToFinland = () => {
        // history.replace also works push is like stack replace pops it out 
        setModal(false);
        history.push("/")
        history.go(0);
      }

    const addCountry = async (country) => {
      const response = await fetch(
        "https://country-list-31960-default-rtdb.europe-west1.firebasedatabase.app/countries.json",
        {
          method: "POST",
          body: JSON.stringify(country),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }

    // accepting the form and making country 

    const firstRef = useRef("");

    const submitHandler = (event) => {
      event.preventDefault();
  
      const countries = {
        country: firstRef.current.value,
      };

      addCountry(countries);
    
     firstRef.current.value = "";
     backToFinland();
    }

    

    return (
      <>
        <h2>Add country name here</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="text">Country Name</label>
            <textarea rows="1" id="first" ref={firstRef}></textarea>
          </div>
          <button type="submit">Save to List</button>
        </form>
        <button onClick={showModalHandler}>Go back to Home</button>
        {showModal && (
          <Modal onCancel={cancelModal} onConfirm={backToFinland} />
        )}
        {showModal ? <Backdrop onClick={cancelModal} /> : null}
      </>
    );};
  
  export default IndiaPage;
  