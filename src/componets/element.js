import React, { useEffect, useState } from "react";


function Element(props){
    return(
        <div className="col">
        <div className="card">
        <img src={props.info.url} class="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.info.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.info.address}e</h6>

        </div>
      </div>
        </div>
    )
}

export default Element;