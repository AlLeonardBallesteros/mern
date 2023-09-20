import React, { useState } from 'react';
import web1 from './img/web1.jpg';
import web2 from './img/web2.jpg';
import web3 from './img/web3.jpg';
import './studentdashboardcss/Courses.css';

const Webdev = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: web1,
      caption: 'Image 1',
    },
    {
      id: 2,
      src: web2,
      caption: 'Image 2',
    },
    {
      id: 3,
      src: web3,
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

export default Webdev;
