import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useParams } from "react-router-dom";
import './Card.css';
import background from "../../images/logo.png";


const CardDetails = () => {
  
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name,  origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
     
    <div className="container  justify-content-center mb-12">
       <div class="row">
       <div class="col">
       <div className="content  boxDescription">
       <h1 className="mt-5 ">{name}</h1>
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
     </div>
    <div class="col-sm-1">
      
     
      
    </div>
    <div class="col">
    <div className="d-flex flex-column gap-3">
    

<img className="img-fluid" src={image} alt="" width="80%" height="auto"/>
{(() => {
  if (status === "Dead") {
    return <div className="badgeDetails bg-danger fs-1" ><i class="bi bi-emoji-frown"></i>     {status}</div>;
  } else if (status === "Alive") {
    return <div className=" badgeDetails bg-success fs-1"><i class="bi bi-emoji-smile"></i>      {status}</div>;
  } else {
    return <div className="badgeDetails bg-secondary fs-1">{status}</div>;
  }
})()}
     </div></div>
  </div>
      
    </div>
  );
};

export default CardDetails;