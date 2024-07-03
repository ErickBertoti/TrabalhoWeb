import { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  useEffect(() => {
    // Recuperar dados do Local Storage
    const savedContact = localStorage.getItem('contact');
    if (savedContact) {
      const contactData = JSON.parse(savedContact);
      setContactEmail(contactData.email);
      setContactPhone(contactData.telefone);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-email">
          <p>Entre em contato via email:</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail || 'Adicione um email no cadastro'}</a>
        </div>
        <div className="footer-whatsapp">
          <p>Entre em contato via WhatsApp:</p>
          <a href={`https://api.whatsapp.com/send?phone=${contactPhone}`} target="_blank" rel="noopener noreferrer">
            {contactPhone || 'Adicione um telefone no cadastro'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;