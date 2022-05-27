import React, { useEffect, useState } from "react";
import Element from "./element";
import { FormattedMessage } from "react-intl"; 
function Galeria(props){
    let [galeriaItems, setGaleriaItems] = useState([]);


    var url = '';
      useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
        .then((res) => res.json())
        .then((res) => setGaleriaItems(res));
        // localStorage.setItem("movie", res.value);
        //console.log("Response", res);
    })

  
    return(
        <div className="container">
          <h2><FormattedMessage
              id="Title"
              defaultMessage="Default"
              /></h2>
        <div className="row mt-4">
          {
            galeriaItems.map((m,i) => {
              if(m.name.includes('Casa')){
                url = 'https://cdn.pixabay.com/photo/2020/06/13/19/22/home-5295548_1280.png'
              }
              else{
                url = 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=600/uploads/users/358/posts/23006/final_image/00-final-product.png'
              }
              m['url'] = url;
              return <Element key={i} info={m}/>
            })
          }
        
        </div>

        </div>
    )
       
}

export default Galeria;