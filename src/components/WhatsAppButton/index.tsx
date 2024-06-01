import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css'; // Arquivo de estilos

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5519999875946"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;