


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HommeList() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const bb={name:name,price:price,image:image}

  const fetchData = () => {
    axios
      .get('http://localhost:3000/api/homme/getall')
      .then((response) => {
        setData(response.data);
        console.log('Fetch success:', response.data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  };

  // ➕ Add a new item
  const addHomme = (newPost) => {

    axios
      .post('http://localhost:3000/api/homme/add', newPost)
      .then((response) => {
        console.log('Added successfully:', response.data);
        fetchData();
       
      })
      .catch((err) => {
        console.error('Add error:', err);
      });
  };

  // ❌ Delete item by ID
  const deleteHomme = (id) => {
    axios
      .delete(`http://localhost:3000/api/homme/delete/${id}`)
      .then((response) => {
        console.log('Deleted:', response.data);
        fetchData();
      })
      .catch((err) => {
        console.error('Delete error:', err);
      });
  };

  // 🔁 Update item by ID
  const updateHomme = (id,updated) => {

    axios
      .put(`http://localhost:3000/api/homme/put/${id}`, updated)
      .then((response) => {
        console.log('Updated:', response.data);
        fetchData();
      })
      .catch((err) => {
        console.error('Update error:', err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Add New Homme</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button onClick={()=>{addHomme(bb)}}>Add Homme</button>

      <hr />

      <h2>Homme List</h2>
      {data.map((el,i) => (
        <ul key={i}>
          <li>Name: {el.name}</li>
          <li>Price: {el.price}</li>
          <li>
            <img src={el.image} alt={el.name} width="100" />
          </li>
          <button onClick={() => deleteHomme(el.id)}>Delete</button>







          <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
          <button onClick={() => updateHomme(el.id,bb)}>Update</button>
        </ul>
      ))}
    </div>
  );
}
