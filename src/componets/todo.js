import React, { useEffect, useState } from "react";



function Todo(){

    let [galeriaItems, setGaleriaItems] = useState([]);

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
        .then((res) => res.json())
        .then((res) => setGaleriaItems(res));
        // localStorage.setItem("movie", res.value);
        //console.log("Response", res);
    })
    
    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
        .then((res) => res.json())
        .then((res) => setGaleriaItems(res));
        // localStorage.setItem("movie", res.value);
        //console.log("Response", res);
    })
   
}
export default Todo; 