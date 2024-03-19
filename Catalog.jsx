
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import a1 from './img/buchet1.jpeg';
import a2 from './img/lalele.jpeg';
import a3 from './img/eustome.jpeg';
import a4 from './img/lyli.jpeg';
import a5 from './img/IMAGE 2024-03-18 12:10:06.jpg';
import a7 from './img/crizanteme.jpeg';
import a6 from './img/IMAGE 2024-03-18 12:09:57.jpg';
import a8 from './img/IMAGE 2024-03-18 12:09:59.jpg';
import a9 from './img/IMAGE 2024-03-18 12:10:09.jpg';
import c1 from './img/image1.jpg';
import c2 from './img/image2.jpg';
import c3 from './img/image3.jpg';
import c4 from './img/image4.jpg';
import c5 from './img/image5.jpg';
import c6 from './img/image6.jpg';
import c7 from './img/image7.jpg';
import c8 from './img/image8.jpg';
import c9 from './img/image9.jpg';
function Catalog() {
  return (
    <>
    
    <div class="product-list">
        <div class="product-item" data-id="1" data-name="Trandafiri" data-price="50">
            <img src={a1} alt="Produs 1"/>
            <h3>Trandafiri</h3>
            <p>Preț: 50 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="2" data-name="Lalele" data-price="40">
            <img src={a2} alt="Produs 1"/>
            <h3>Lalele</h3>
            <p>Preț: 40 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="3" data-name="Eustome" data-price="45">
            <img src={a3} alt="Produs 1"/>
            <h3>Eustome</h3>
            <p>Preț: 45 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Lily" data-price="40">
            <img src={a4} alt="Produs 1"/>
            <h3>Lily</h3>
            <p>Preț: 60 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Crizanteme" data-price="40">
            <img src={a7} alt="Produs 1"/>
            <h3>Crizanteme</h3>
            <p>Preț: 45 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Hortensii" data-price="40">
            <img src={a5} alt="Produs 1"/>
            <h3>Hortensii</h3>
            <p>Preț: 30 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Orhidee" data-price="40">
            <img src={a6} alt="Produs 2"/>
            <h3>Orhidee</h3>
            <p>Preț: 80 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Narcis" data-price="40">
            <img src={a8} alt="Produs 3"/>
            <h3>Narcis</h3>
            <p>Preț: 80 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
        <div class="product-item" data-id="4" data-name="Bujori" data-price="40">
            <img src={a9} alt="Produs 4"/>
            <h3>Bujori</h3>
            <p>Preț: 70 lei</p>
            <button class="add-to-cart">Adaugă în coș</button>
        </div>
    </div>
    <section class="promotions">
        <h2>Promotii</h2>
        <div class="slideshow">
            <img src={c1} alt="Promoție 1"/>
            <img src={c2} alt="Promoție 2"/>
            <img src={c3} alt="Promoție 3"/>
            <img src={c4} alt="Promoție 4"/>
            <img src={c5} alt="Promoție 5"/>
            <img src={c6} alt="Promoție 6"/>
            <img src={c7} alt="Promoție 7"/>
            <img src={c8}alt="Promoție 8"/>
            <img src={c9} alt="Promoție 9"/>
        </div>
    </section>
        
    
    
    
    </>
  )}
export default Catalog;
