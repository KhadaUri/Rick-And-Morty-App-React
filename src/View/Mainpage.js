import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import '../View.css';
import styles from "../components/Card/Card.module.scss";
import Search from "../components/Search/Search";





const Mainpage = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [arrayU, setArrayU] = useState([]);
  let [arrayU1, setArrayU1] = useState([]);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

 
 
  // let api = `https://rickandmortyapi.com/api/episode/?page=3&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  

  let loadData1 = async () => {
    
    let data = await fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(json => { json.results.forEach(element1 => {
    let newElement1 = String (element1.id)
    let elementUpdate1 = {id:newElement1, name:element1.name, status:element1.status, species: element1.species, image:element1.image}
   //arrayU.push(elementUpdate)
    setArrayU1(previous => [elementUpdate1,...previous])
            //console.log(element)
      
    }); } ) 
      
  //console.log(arrayU.reverse()) 
     

  }

    
 // let [arrayU, setArrayU] = useState([]);
 
  useEffect (() => {
    loadData();
    loadData1();
    //orderNew();   
  },[])


  let loadData = async () => {
    
    let data = await fetch('https://rickandmortyapi.com/api/episode?page=3')
    .then(response => response.json())
    .then(json => { json.results.forEach(element => {
    let newElement = String (element.id)
    let elementUpdate = {id:newElement, name:element.name, air_date:element.air_date, episode: element.episode}
   //arrayU.push(elementUpdate)
    setArrayU(previous => [elementUpdate,...previous])
            //console.log(element)
      
    }); } ) 
      
  //console.log(arrayU.reverse()) 
     

  }

  let handleChange=(e)=> {
  
    setSearch(e.target.value);
  // console.log("Search: " +e.target.value);
   filter (e.target.value);
    
  }

  let filter =(wordSearch)=> {
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
  <>     

    {   /* render array updated */ }
    <div className="container">   
    <div className="row red" >    
    <h1 className="text-center mb-2">Last episodes</h1>
      {arrayU.map(el => ( 
        <li className="boxsearch boxepisode" key={el.id}> 
            <span className="text-primary">
            Name: {el.name === "" ? "Unknown" : el.name}
          </span><br />
          Episode: {el.episode} <br />
          Air Date: {el.air_date}
        </li>
      ))}          
   
    </div> </div>
       
      
  

    
  {   /* render array updated */ }
  <div className="container"> 
  <div className="row red">   
  <h1 className="text-center mt-5">Last characters</h1>

    {arrayU1.map(el => (
    <li className="boxepisode1 mt-5" key={el.id}>   
          {/* <span className="text-primary">
          Name: {el.name === "" ? "Unknown" : el.name}
        </span><br />
        Status: {el.status} <br />
        Specie: {el.species}
        <img className="img-fluid" src={el.image} alt="" width="80%" height="auto"/>  */}


        <div
            className={`${styles.card} d-flex flex-column justify-content-center  `}
          >
            <img className={`${styles.img} img-fluid`} src={el.image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{el.name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{el.name}</div>
              </div>
            </div>
          </div>


      </li>
    ))}
  
      
    </div></div>
  
    
    </>
)
}; 




export default Mainpage;