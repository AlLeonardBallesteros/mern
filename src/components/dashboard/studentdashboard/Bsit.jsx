import React, { useState } from 'react';
import './studentdashboardcss/Courses.css';
import bsit1 from './img/bsit1.jpg';
import bsit2 from './img/bsit2.jpg';
import bsit3 from './img/bsit3.jpg';

const Bsit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      id: 4,
      src: bsit1,
      caption: 'Image 1',
    },
    {
      id: 5,
      src: bsit2,
      caption: 'Image 2',
    },
    {
      id: 6,
      src: bsit3,
      caption: 'Image 3',
    },
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setModalOpen(false);
  };

  const goToNextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={image.id} className="gallery-item">
          <img
            src={image.src}
            alt={image.caption}
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {modalOpen && selectedIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].caption} />
            <p>{images[selectedIndex].caption}</p>
            <button onClick={goToPreviousImage}>Previous</button>
            <button onClick={goToNextImage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bsit;
