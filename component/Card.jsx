"use client"
import React, { useState } from 'react';

const Card = ({object}) => {
    let {firstElement,secondElement,thirdElement,iconLink,mainHeadingElement,buttonElement,backgroundImage,paddingTop}=object
  const [hover, setHover] = useState(false);

  const styles = {
    card:     {
      width: "22.5rem",
      height:"28.5rem",
    borderRadius: "16px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "16px",
    boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 8px",
    transition: "transform 0.3s ease 0s, boxShadow 0.3s ease 0s",
   
  
  },
    cardHover: {
      transform: 'scale(1.2)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  
  };
let first=mainHeadingElement.split(" ")[0]
let firstelementLength=first.length
let withoutFirstElement=mainHeadingElement.slice(firstelementLength)
  return (
    <div style={{paddingTop,margin:"0 auto"}}>
    <div
      style={hover ? { ...styles.card, ...styles.cardHover } : styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
   <h2 className={`${hover ?"firstHover" :"firstWithoutHover"}`}>{firstElement}</h2>
        <img src={iconLink} loading="lazy" alt="Icon einer Welle" class={`${hover ?"iconHover" :"iconWithoutHover"}`} />
        
      <div  style={hover ? { ...styles.text, ...styles.textHover } : styles.text}>
     
    <div>
      <h2 className={`${hover ?"secondHover" :"secondWithoutHover"}`}  >{secondElement}</h2>
        <h2 className= {`${hover ?"mainHeadingHover" :'mainHeadingWithoutHover'}`}>

        {first}
         <br/>
         {withoutFirstElement}
        </h2>

    </div>
        <div >
       <h2 className= {`${hover ?"thirdHover" :'thirdWithoutHover'}`}>{thirdElement}</h2>
         <button className={`${hover ?"buttonHover" :'buttonWithoutHover '}`}>{buttonElement}</button>

        </div>
      </div>
    </div>
    </div>
  );
};




export default Card;
