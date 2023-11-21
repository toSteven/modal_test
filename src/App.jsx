import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";
import ModalOne from "./ModalOne";

function App() {
  const [string, setString] = useState("Hello World.");
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <section className="text-center mt-5 pt-5">
        <h1>Press the button to show modal</h1>
        <button className="btn btn-dark mt-5" onClick={openModal}>
          button
        </button>

        {isModalVisible && (
          <ModalOne stringState={string} closeModal={closeModal} />
        )}
      </section>
    </>
  );
}

export default App;
