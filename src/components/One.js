import React from 'react'
import styled from 'styled-components'

const One = ({arrOne, addWord}) => {
//   console.log(addWord()   )
  return (
    <Wrapper>
     <>
      <div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
             <input type="button" disabled style={{visibility: "hidden"}} className='keyys' value="eee"/>
            {
                arrOne.map((elem) => (
                  <input type="button" className='keyys' value={elem} onClick={()=>addWord(elem)}/>
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
        padding: 24px 40px;
        border: transparent;
        box-shadow: 0px 1px 5px 1px #00a4ff;
        transform: scale(1);
        transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
    }  
    input.keyys:hover{
        transform: scale(0.8);
        box-shadow: 0px 1px 1px 1px #00a4ff;
        border-radius: 5px;
    }
`

export default One