import React, { useState } from 'react'
import styled from 'styled-components'

const Five = ({arrFive, addWord}) => { 
  return (
    <Wrapper>
    <>
     <div>
       <div style={{display: "flex", justifyContent: "space-between"}}>
           {
               arrFive.map((elem,i) => (
                 <input type="button"  className={`${elem === "spacebar" ? 'spacebar' : 'keyys' }`}  onClick={()=>addWord(elem)} value={elem}/>
               ))
           }
       </div>
     </div>
    </>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    input.keyys {
      background: #078dff1a!important;
      font-weight: 700;
        padding: 24px 40px!important;
        border: transparent;
        box-shadow: 0px 1px 5px 1px #00a4ff;
        transform: scale(1);
        transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
    }  
    .spacebar{
      background: #4cb8d561;
      font-weight: 700;
        padding: 24px 380px!important;
        border: transparent;
        box-shadow: 0px 1px 5px 1px #00a4ff;
        transform: scale(1);
        transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
    }
    input.spacebar:hover{
        transform: scale(0.9);
        box-shadow: 0px 1px 1px 1px #00a4ff;
        border-radius: 5px;
    }
    input.keyys:hover{
        transform: scale(0.8);
        box-shadow: 0px 1px 1px 1px #00a4ff;
        border-radius: 5px;
    }
`
export default Five