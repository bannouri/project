import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [title, setTitle] = useState("");
  const [Homme, setHomme] = useState([]);
  const [searcheditems, setsearcheditems] = useState([]);

  const fetchhomme = () => {
    axios.get("http://localhost:3000/api/Homme/getall")
      .then((response) => {
      console.log(response.data) 
      setHomme(response.data)
    })
      .catch((error) => {
        console.error(error);
      });
  };

  const search = (id) => {
   
  const x=   Homme.filter((blog) =>
      blog.name && blog.name.toLowerCase().includes(id.toLowerCase())
    );
    console.log(x,"search");
    setsearcheditems(x)
  };

  useEffect(() => {
    fetchhomme(); 
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="btn btn-secondary searchButton"
        type="button"
        onClick={()=>{search(title)}}
      >
        Search
      </button>
  {searcheditems.length ? 
      searcheditems.map((el)=> {
        return (
            <div>
<h1> {el.name}</h1>

            </div>
        )
      })  : null
      }

    </div>
  );
};

export default Search;