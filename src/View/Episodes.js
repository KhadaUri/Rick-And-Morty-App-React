import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import Search from "../components/Search/Search";

const Episodes = () => {

  let [search, setSearch] = useState("");
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [arrayU, setArrayU] = useState([]);
  let [id, setID] = useState(1);
  let [pages, setPages]= useState(0);


  let loadData = async () => {
    

  //  let data = `https://rickandmortyapi.com/api/episode/${page}`;
    
   let data = await fetch(`https://rickandmortyapi.com/api/episode`)
    .then(response => response.json())
    .then(json => {      
      setPages(json.info.pages)
       json.results.forEach(element => {
    let newElement = String (element.id) 
    let elementUpdate = {id:newElement, name:element.name, air_date:element.air_date, episode: element.episode}
   //arrayU.push(elementUpdate)
    setArrayU(previous => [...previous,elementUpdate])
            console.log(element)
            //console.log(arrayU)
      
    }); } ) 
      
  
    //request data
  }

  let completeData = async (page)  =>{
    console.log("page: "+page)
    let data = await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`)
    .then(response => response.json())
    .then(json => { setPages(json.info.pages)
     
       json.results.forEach(element => {
    let newElement = String (element.id) 
    let elementUpdate = {id:newElement, name:element.name, air_date:element.air_date, episode: element.episode}
   //arrayU.push(elementUpdate)
    setArrayU(previous => [...previous,elementUpdate])
          console.log(element)
          
      
    }); } ) 
  }
  //Complete data on pge
  useEffect (() => {
    for (let i=2; i<=pages; i++){
      console.log(i)
      completeData(i);

    }

    setTimeout(() => {
      
    setResults(arrayU)
    }, 2000);

  },[pages])

   useEffect (() => {
   loadData();

  },[])

  //Search
  let handleChange=(e)=> {
  
    setSearch(e.target.value);
 // console.log("Search: " +e.target.value);
   filter (e.target.value);
    
  }
//filter for search
  let filter =(wordSearch)=> {
    console.log(results)
    setArrayU(results)
    var resultSearch=arrayU.filter((ele)=> {
      if(ele.name.toString().toLowerCase().includes(wordSearch.toLowerCase())
      || ele.episode.toString().toLowerCase().includes(wordSearch.toLowerCase())
      ){
        return ele;
      }
    });
    setArrayU(resultSearch);
  
  } 
  
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
      
        <div className="containerInput"> 
    <input 
      className="form-control inputBuscar"
        value={search}
        placeholder="Search an episode"
         onChange={handleChange}
      />

    <button className="btn btn-success">
      Search
    </button>
    </div>
        <h5 className="text-center">
         
        </h5>

        {arrayU.map(el => ( 
        <li className="boxsearch" key={el.id}> 
            <span className="text-primary">
            Name: {el.name === "" ? "Unknown" : el.name}
          </span><br />
          Episode: {el.episode} <br />
          Air Date: {el.air_date}
        </li>
      ))}    



      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
       
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;