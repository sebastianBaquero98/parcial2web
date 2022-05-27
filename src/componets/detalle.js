import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Galeria from "./galeria";

function Detalle(){

    let [galeriaItems, setGaleriaItems] = useState([]);
    let siSOn = [];
    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
        .then((res) => res.json())
        .then((res) => setGaleriaItems(res));
        // localStorage.setItem("movie", res.value);
        //console.log("Response", res);
    })
    return(
        <div className="container">
        <div className="row d-flex justify-contenet-center">
          <div className="col-8">
          <div className="row mt-4">
         <Galeria/>
        
        </div>
            
          </div>
          {Object.keys(opcion).length !== 0 &&
          <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
              <FormattedMessage
              id="id"
              defaultMessage="Default"
              />
            </th>
            <th scope="col">
              <FormattedMessage
              id="Device"
              defaultMessage="Default"
              />
            </th>
            <th scope="col">
              <FormattedMessage
              id="Value"
              defaultMessage="Default"
              />
            </th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
          }
          </div>
          </div>
         
        
    )

}

export default Detalle;