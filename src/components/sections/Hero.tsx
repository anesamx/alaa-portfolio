
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center hero-bg"
    >
      <h1 className="text-8xl font-story-script">Alaa's Portfolio</h1>
      <p className="mt-4 text-xl font-lato">i draw art with mous why u DONT TRY </p>

      <div className="flex items-center justify-center mt-8 space-x-6">
        <a
          href="https://www.paypal.com/paypalme/duniatziam?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxV_X-s2VjQDWR3qBZHn_PNyyTlNlslZgslGmHy-bbJt51GbcHDhZAlN5oms_aem_Sy4Ah9pDosn6M3cX1DUsFQ"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300"
        >
          Support Me
        </a>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/alaa.1b/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl hover:text-purple-400 transition duration-300" />
          </a>
          <a href="https://www.tiktok.com/@alaa.1b?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-4xl hover:text-purple-400 transition duration-300" />
          </a>
          <a href="https://t.me/alaa_draw" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-4xl hover:text-purple-400 transition duration-300" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-lg">Contact Me</p>

    </motion.div>
  );
};

export default Hero;
