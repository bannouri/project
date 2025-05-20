// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// export default function FammeList() {

// const [data,setData]=useState([])
// const [name,setName]=useState("")
// const[price,setprice]=useState("")
// const[image,setimage]=useState("")
// console.log("name");

// var bb={
//     name:name,
//     price:price,
//     image:image,
// }

// const fetch =()=>{
//     axios.get("http://localhost:3000/api/Famme/getall")
//        .then((response)=>{
//          setData(response.data)
//          console.log(response.data,"sucess");
//        })
//        .catch((err)=>{console.log(err)
//        })
// }

// const addfamme = (newPost)=>{
//   axios.post("http://localhost:3000/api/Famme/add",newPost)
//   .then((response)=>{
//     console.log(response.data,"jawha behy")
//     fetch()
//   })
//   .catch((err)=>console.log(err)
//   )
 
// }
// const del=(id)=>{
//   axios.delete(`http://localhost:3000/api/Famme/delete/${id}`)
//   .then((response)=>{ 
//     console.log("Response from delete:", response.data) 
//   fetch()
//   })
//   .catch((err)=>console.log("Delete error:",err)
//   )
//   }
//   const update = (id, body) => {
//     axios
//       .put(`http://localhost:3000/api/Famme/put/${id}`, body)
//       .then((response) => {
//         console.log(response.data, "updated");
//         fetch(); 
//       })
//       .catch((err) => console.error("Update error:", err));
//   };

 

// useEffect(()=>{
//     fetch()
// },[])


//   return (
//     <div>
//         <div>
//         <input type="text"  onChange={(e)=>{setName(e.target.value)}}/>
//         <input type="text"  onChange={(e)=>{setprice(e.target.value)}}/>
//         <input type="text"  onChange={(e)=>{setimage(e.target.value)}}/>
       

//         <button onClick={()=>{addfamme(bb)}}>click me</button>
        
      
//         </div>
//      {data.map((el,i)=>(
//         <ul key={i}>
//         <li>{el.name}</li>
//         <li>{el.price}</li>
//       <img src={el.image}alt="" />
       
//         <button onClick={()=>{del(el.id)}}>delite</button>

//         <button onClick={() => update(el.id , bb)}>Update</button>

//         <input   type="text"  onChange={(e)=>setName(e.target.value)} />
//         </ul>
//      ))}

//     </div>
//   )


// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FammeList() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const bb={name:name,price:price,image:image}

  // 🔄 Fetch all Famme items
  const fetchData = () => {
    axios
      .get('http://localhost:3000/api/famme/getall')
      .then((response) => {
        setData(response.data);
        console.log('Fetch success:', response.data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  };

  // ➕ Add a new item
  const addFamme = (newPost) => {

    axios
      .post('http://localhost:3000/api/famme/add', newPost)
      .then((response) => {
        console.log('Added successfully:', response.data);
        fetchData();
        
      })
      .catch((err) => {
        console.error('Add error:', err);
      });
  };

  // ❌ Delete item by ID
  const deleteFamme = (id) => {
    axios
      .delete(`http://localhost:3000/api/famme/delete/${id}`)
      .then((response) => {
        console.log('Deleted:', response.data);
        fetchData();
      })
      .catch((err) => {
        console.error('Delete error:', err);
      });
  };

  // 🔁 Update item by ID
  const updateFamme = (id, updated) => {
    axios.put(`http://localhost:3000/api/famme/put/${id}`, updated) 
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
      <h2>Add New Famme</h2>
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
      <button onClick={()=>{addFamme(bb)}}>Add Famme</button>

      <hr />

      <h2>Famme List</h2>
      {data.map((el,i) => (
        <ul key={i}>
          <li>Name: {el.name}</li>
          <li>Price: {el.price}</li>
          <li>
            <img src={el.image} alt={el.name} width="100" />
          </li>
          
          <button onClick={() => deleteFamme(el.id)}>Delete</button>

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
          <button onClick={() =>updateFamme(el.id,bb)}>Update</button>
        </ul>
      ))}
    </div>
  );
}
