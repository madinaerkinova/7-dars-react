import { useState } from "react";
import Modal from "./Components/Modal/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app flex items-center justify-center"> 
      {showModal && <Modal setShowModal={setShowModal} />}
      <button onClick={() => setShowModal(true)} className="open-btn" style={{ padding: '20px', marginTop: '150px', backgroundColor: 'red', borderRadius: '8px', border: 'none', color: '#fff' }}>Another Text</button>
    </div>
  );
}

export default App;

  