
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [femmeData, setFemmeData] = useState([]);
  const [hommeData, setHommeData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/Famme/getall')
      .then((res) => setFemmeData(res.data))
      .catch((err) => console.error('Erreur chargement femme:', err));

    axios.get('http://localhost:3000/api/Homme/getall')
      .then((res) => setHommeData(res.data))
      .catch((err) => console.error('Erreur chargement homme:', err));
  }, []);

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Mouldi Shop</h1>
        <p>Explore our trendy collections for men and women</p>
        <button className="cta-button">Discover now</button>
      </header>

      <section className="collection-section">
        <h2>👗 Women's Collection</h2>
        <div className="collection-grid">
          {femmeData.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} TND</p>
              <button className="buy-button">🛒 Buy</button>
            </div>
          ))}
        </div>
      </section>

      <section className="collection-section">
        <h2>👔 Men's Collection</h2>
        <div className="collection-grid">
          {hommeData.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} TND</p>
              <button className="buy-button">🛒 Buy</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 El. All rights reserved.</p>
      </footer>
    </div>
  );
}