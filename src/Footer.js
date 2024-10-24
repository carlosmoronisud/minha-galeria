import React from 'react';
import './Footer.css'; // Para estilos do footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Confira meu portfólio completo: 
                    <a href="https://portfolio-carlosgarcias-projects.vercel.app/" target="_blank" rel="noopener noreferrer"> Meu portfólio</a>
                </p>
                <p>Conecte-se comigo no LinkedIn: 
                    <a href="www.linkedin.com/in/carlosmoronigarcia" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
