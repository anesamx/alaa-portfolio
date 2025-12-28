import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, src: 'https://i.pinimg.com/564x/0a/3d/e0/0a3de079cf3506161c84d34c114e36ad.jpg', title: 'Cosmic Dream' },
  { id: 2, src: 'https://i.pinimg.com/564x/e7/7e/61/e77e61f1c784770d6a575b5a201ab7cf.jpg', title: 'Enchanted Forest' },
  { id: 3, src: 'https://i.pinimg.com/564x/9b/6c/a3/9b6ca332c3e534f5979d39b33a553a1a.jpg', title: 'Ocean's Whisper' },
  { id: 4, src: 'https://i.pinimg.com/564x/a3/05/2f/a3052f5058728f3493c4c81a54b32115.jpg', title: 'City of Clouds' },
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            onClick={() => openModal(item)}
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="bg-transparent fixed top-0 left-0 w-full h-full flex items-center justify-center"
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-full p-4"
          >
            <img src={selectedImage.src} alt={selectedImage.title} className="rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>
          </motion.div>
        </Modal>
      )}
    </section>
  );
};

export default Gallery;
