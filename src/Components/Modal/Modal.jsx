import React, { useState } from 'react';

const Modal = ({ setShowModal }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setShowSecondModal(false);
  };

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 max-w-md rounded-lg shadow-lg relative flex flex-col items-center">
          <span
            className="absolute top-2 right-2 cursor-pointer text-xl text-gray-600"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="text-center">
            <div className="text-lg font-semibold text-purple-600 mt-8">Welcome To The Mod</div> 
            <div className="text-base text-gray-700 mt-4">SORRY FOR THE SHORTCOMINGS</div>
            <button
              className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
              onClick={openSecondModal}
            >
              OPEN SECOND MODAL
            </button>
          </div>
        </div>
      </div>
      {showSecondModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg shadow-lg relative flex flex-col items-center">
            <span
              className="absolute top-2 right-2 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowSecondModal(false)}
            >
              &times;
            </span>
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-600 mt-8">Second Modal</div>
              <div className="text-base text-gray-700 mt-4">This is the second modal content</div>
              <button
                className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                onClick={closeModal}
              >
                EXIT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
