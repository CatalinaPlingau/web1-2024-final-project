import './App.css';
import React from 'react';
import b from './img/poza1.jpeg';
import a from './img/poza2.jpeg';
import b1 from './img/buchete.jpeg';


function Section() {
  return (
    <>
      <section className="hero">
        <img className="buchet" src={b1} alt="Buchet" />
        <div className="hero-text">
          <h1>Bine ați venit la Blossomia!</h1>
          <p>Cele mai frumoase flori pentru momentele speciale.</p>
          <p>Florile sunt limbajul tăcut al iubirii, care înflorește în inimile noastre.</p>
        </div>
        <div className="hero-text1">
          <p>Bine ați venit la Blossomia - locul unde frumusețea naturii se întâlnește cu pasiunea și creativitatea! Ne dedicăm să aducem bucurie și emoție în viața clienților noștri prin intermediul florilor. Cu o varietate impresionantă de flori proaspete și aranjamente florale elegante, suntem aici pentru a vă ajuta să transmiteți cele mai sincere sentimente și să celebrați fiecare moment special. Fie că este vorba despre aniversări, nunți sau alte evenimente importante, echipa noastră de florari pasionați este pregătită să vă ofere cele mai frumoase și proaspete flori, aranjate cu atenție și creativitate. Vă invităm să explorați colecția noastră și să transformați fiecare moment într-o experiență memorabilă cu ajutorul florilor noastre minunate!</p>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="feature">
            <img src={b} alt="Descriere poza 1" />
            <p>Oferim buchete de flori personalizate, create special pentru tine sau pentru cei dragi. Fie că este vorba despre aniversări, nunți sau alte evenimente speciale, ne asigurăm că fiecare buchet este unic și frumos aranjat.</p>
          </div>
          <div className="feature">
            <img src={a} alt="Descriere poza 2" />
            <p>Floriștii noștri sunt specialiști în arta și știința aranjării florilor. Ei creează buchete, aranjamente florale și alte creații florale pentru diverse ocazii, precum nunți, aniversări, sau alte evenimente speciale. Floriștii nu numai că selectează și aranjează florile în mod creativ, dar și oferă sfaturi despre întreținerea și îngrijirea acestora pentru a se menține proaspete și frumoase pentru cât mai mult timp posibil. Munca lor implică atât aspecte artistice, cât și abilități practice, pentru a satisface nevoile și preferințele clienților în ceea ce privește floriile și aranjamentele florale.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;

