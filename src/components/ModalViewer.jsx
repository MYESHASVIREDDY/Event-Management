import React from 'react';

const ModalViewer = ({ imgSrc, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative w-[90%] max-w-xl p-4 bg-transparent">
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imgSrc}
          alt="Fullscreen"
          className="max-h-[80vh] w-full h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ModalViewer;
