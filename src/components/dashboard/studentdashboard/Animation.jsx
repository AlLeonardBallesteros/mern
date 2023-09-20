import React, { useState } from 'react';
import anim1 from './img/anim1.jpg';
import anim2 from './img/anim2.jpg';
import anim3 from './img/anim3.webp';
import './studentdashboardcss/Courses.css';

const Animation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedImageIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: anim1,
      caption: 'Image 1',
    },
    {
      id: 2,
      src: anim2,
      caption: 'Image 2',
    },
    {
      id: 3,
      src: anim3,
      caption: 'Image 3',
    },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  const goToNextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedImageIndex(selectedIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedImageIndex(selectedIndex - 1);
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

export default Animation;
