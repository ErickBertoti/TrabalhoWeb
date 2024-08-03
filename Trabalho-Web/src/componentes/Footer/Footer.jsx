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
          <p>Desenvolvido por Erick Hoffmann</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;