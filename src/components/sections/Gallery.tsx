
import React, { useState, useMemo, useCallback } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { imageUrls } from '../../data/gallery-images';

// --- Type Definitions ---
interface GalleryImage {
  id: number;
  src: string;
  title: string;
  borderColor: string;
}

// --- Utility Functions ---
const shuffleArray = (array: GalleryImage[]): GalleryImage[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const borderColors = ['#E53E3E', '#DD6B20', '#D69E2E', '#38A169', '#3182CE', '#00A3C4', '#805AD5', '#D53F8C'];
const getRandomBorderColor = (): string => borderColors[Math.floor(Math.random() * borderColors.length)];

// --- Main Component ---
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isAllProjectsModalOpen, setAllProjectsModalOpen] = useState(false);

  const galleryItems: GalleryImage[] = useMemo(() => imageUrls
    .map(url => url.trim())
    .filter(Boolean)
    .map((url, index) => ({
      id: index,
      src: url,
      title: `Artwork ${index + 1}`,
      borderColor: getRandomBorderColor(),
    })), []);

  const scrollingRowItems = useMemo(() => {
    const shuffled = shuffleArray(galleryItems);
    return [...shuffled, ...shuffled]; // Duplicate for a seamless loop
  }, [galleryItems]);

  // --- Modal Handlers ---
  const openModal = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setAllProjectsModalOpen(false); // Close grid modal if open
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const openAllProjectsModal = () => setAllProjectsModalOpen(true);
  const closeAllProjectsModal = () => setAllProjectsModalOpen(false);

  const openRandomModal = useCallback(() => {
    const randomImage = galleryItems[Math.floor(Math.random() * galleryItems.length)];
    openModal(randomImage);
  }, [galleryItems, openModal]);

  return (
    <section id="gallery" className="relative py-20 px-4 text-white overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 font-playfair">Living Gallery</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={openRandomModal}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-400/50 transform hover:scale-105"
          >
            View a Random Work
          </button>
          <button
            onClick={openAllProjectsModal}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-gray-500/50 transform hover:scale-105"
          >
            See All Projects
          </button>
        </div>
      </div>

      {/* --- Single Scrolling Row --- */}
      <div className="space-y-4">
        <div className="scrolling-row animation-duration-90s">
          {scrollingRowItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="h-80 mx-2 flex-shrink-0 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-800 border-4"
              style={{ borderColor: item.borderColor }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
              onClick={() => openModal(item)}
            >
              <img src={item.src} alt={item.title} className="h-full w-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- All Projects Modal --- */}
      <Modal
        isOpen={isAllProjectsModalOpen}
        onRequestClose={closeAllProjectsModal}
        className="bg-transparent backdrop-blur-lg fixed top-0 left-0 w-full h-full flex flex-col items-center p-4 z-[100] overflow-y-auto"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[99]"
        ariaHideApp={false}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-white font-bold font-playfair">All Projects</h2>
            <button onClick={closeAllProjectsModal} className="text-white text-4xl">&times;</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map(item => (
              <motion.div
                key={item.id}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-800 border-2"
                style={{ borderColor: item.borderColor }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={() => openModal(item)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto aspect-square object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </Modal>

      {/* --- Single Image Detail Modal --- */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          className="bg-transparent fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 z-[120]"
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-[110]"
          ariaHideApp={false}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl max-h-full"
          >
            <img src={selectedImage.src} alt={selectedImage.title} className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
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
