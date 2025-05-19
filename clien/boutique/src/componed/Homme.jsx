import React, { useEffect, useState } from 'react'
import axios from "axios"
import { addHomme } from '../componed/Homme'

export default function FammeList() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const fetchData = () => {
    axios.get("http://localhost:3000/api/Product/getall")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  }

  const addFamme = () => {
    const newFamme = { name, price, category, image, description }
    axios.post("http://localhost:3000/api/Product/add", newFamme)
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.log(err))
  }

  const del = (id) => {
    axios.delete(`http://localhost:3000/api/Product/delete/${id}`) // check spelling!
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.log(err))
  }

  const update = (id) => {
    const updatedFamme = { name, price, category, image, description }
    axios.put(`http://localhost:3000/api/Product/put/${id}`, updatedFamme)
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addfamme}>Add Famme</button>

      <h2>Product List</h2>
      {data.map((el) => (
        <ul key={el.id}>
          <li>{el.name}</li>
          <li>{el.createdAt}</li>
          <button onClick={() => del(el.id)}>Delete</button>
          <button onClick={() => update(el.id)}>Update</button>
        </ul>
      ))}
    </div>
  )
}
