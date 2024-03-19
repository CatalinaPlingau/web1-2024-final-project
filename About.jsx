
import './App.css';
import React from 'react';
import p from './img/photo_2024-03-18 09.43.20.jpeg';
import p1 from './img/photo_2024-03-18 09.43.34.jpeg';
import p2 from './img/photo_2024-03-18 09.43.40.jpeg';



function About() {
  return (


    <>
    
    <section class="about-us">
        <h2>Despre noi</h2>
        <p class="positioning-statement">La Blossomia, ne pasă profund de frumusețea și bucuria pe care o aduc florile în viața oamenilor. Suntem dedicați să oferim cele mai proaspete și mai frumoase flori, însoțite de servicii excelente și o experiență de neuitat.</p>
        <div class="key-messages">
            <h3>De ce sa alegi Blossomia?</h3>
            <ul>
                <li>Produse proaspete și de cea mai înaltă calitate</li>
                <li>Oferim o varietate largă de buchete și aranjamente florale</li>
                <li>Experiență vastă în domeniul floristic</li>
                <li>Servicii personalizate pentru fiecare client</li>
                <li>Angajament pentru satisfacția totală a clienților noștri</li>
            </ul>
        </div>
        <p class="brief-description">Blossomia este mai mult decât un magazin de flori - suntem pasionați de frumusețea naturii și suntem dedicați să aducem bucurie și emoție în viețile clienților noștri prin intermediul florilor minunate.</p>
        <div class="gallery">
            <img src={p} alt="Imagine 1"/>
            <img src={p1} alt="Imagine 2"/>
            <img src={p2} alt="Imagine 3"/>
        </div>

    </section>

    
    
    </>
  )}
export default About;
