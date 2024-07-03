import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-email">
          <p>Entre em contato via email:</p>
          <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
        </div>
        <div className="footer-whatsapp">
          <p>Entre em contato via WhatsApp:</p>
          <a href="https://api.whatsapp.com/send?phone=55123456789" target="_blank" rel="noopener noreferrer">12 3456-7890</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
