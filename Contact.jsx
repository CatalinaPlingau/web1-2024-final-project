
import './App.css';
import React from 'react';
import b2 from './img/IMAGE 2024-03-18 11:53:04.jpg';
import b3 from './img/IMAGE 2024-03-18 11:53:00.jpg';
import b4 from './img/IMAGE 2024-03-18 11:52:56.jpg';
import b5 from './img/IMAGE 2024-03-18 11:53:02.jpg';


function Contact() {
  return (


    <>
    
    <section class=" persoane de contact">
        <div class="person">
            <img src={b2} alt="Persoana 1"/>
            <h3>Plingau Ghenadie </h3>
            <p>Dierctor</p>
            <p>Email: plingaughenadie@gmail.com</p>
            <p>Telefon: 060749780</p>
        </div>
        <div class="person">
            <img src={b3} alt="Persoana 2"/>
            <h3>Plingau Arina </h3>
            <p>Florist experimentat</p>
            <p>Email: arinaplingau@gmail.com</p>
            <p>Telefon: 060749678</p>
        </div>
        <div class="person">
            <img src={b4} alt="Persoana 3"/>
            <h3>Plingau Viorica </h3>
            <p>Consultant Client</p>
            <p>Email: plingauv@gmail.com</p>
            <p>Telefon: 060749786</p>
        </div>
        <div class="person">
            <img src={b5} alt="Persoana 4"/>
            <h3>Plingau Catalina </h3>
            <p>Designer floral</p>
            <p>Email: catherineplingau@gmail.com</p>
            <p>Telefon: 060487504</p>
        </div>

    </section>
   

    
    
    </>
  )}
export default Contact;
