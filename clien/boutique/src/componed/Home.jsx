import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [homme, setHomme] = useState([]);
  const [famme, setFamme] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resHomme = await axios.get("http://localhost:3000/Homme/getall");
        const resFamme = await axios.get("http://localhost:3000/Famme/getall");
        setHomme(resHomme.data);
        setFamme(resFamme.data);
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Boutique de Vêtements</h1>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Homme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {homme.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Femme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {famme.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
