import './App.css';
import styled from 'styled-components';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import { useState } from 'react';

const arrOne = ["1","2","3","4","5","6","7","8","9","0","-","=","backspace"];
const arrTwo = ["tab","Q","W","E","R","T","Y","U","I","O","P","[","]","|"];
const arrThree = ["caps lock","A","S","D","F","G","H","J","K","L",":","'"];
const arrFour = ["shift", "Z", "X", "C","V", "B", "N", "M", "<", ">", "/", "shift"];
const arrFive = ["ctrl", "alt", "spacebar","alt","","ctrl"];
// console.log(arrFive[2])

function App() {
  const [dis, setDis] = useState('')

  const addWord = (el) =>{
     console.log("This is word",el);
    //  setDis(el);

     setDis(prev=>prev+el)
  }
  return (
    <Wrapper className="App container-fluid">
       <>
         {/* <div className='keyboard'>
            <div>
               <input type='text' className='display'/>

            </div>
            <div>
               <div style={{textAlign: "start", display:"flex",justifyContent:"space-between", marginTop: "15px"}}>
                  <input disabled style={{visibility: "hidden"}} className='keyys' type='button' value="1"/>
                  <input type='button' value="1" className='keyys'/>
                  <input type='button' value="2" className='keyys'/>
                  <input type="button" value="3" className='keyys'/>
                  <input type="button" value="4" className='keyys'/>
                  <input type="button" value="5" className='keyys'/>
                  <input type="button" value="6" className='keyys'/>
                  <input type="button" value="7" className='keyys'/>
                  <input type="button" value="8" className='keyys'/>
                  <input type="button" value="9" className='keyys'/>
                  <input type="button" value="0" className='keyys'/>
                  <input type="button" value="-" className='keyys'/>
                  <input type="button" value="=" className='keyys' />
                  <input type="button" value="backspace" className='keyys'/>
               </div>

               <div style={{textAlign: "start", display:"flex",justifyContent:"space-between", marginTop: "15px"}}>
                  <input className='keyys tabBtn' type='button' value="tab"/>
                  <input type='button' value="Q" className='keyys'/>
                  <input type='button' value="W" className='keyys'/>
                  <input type="button" value="E" className='keyys'/>
                  <input type="button" value="R" className='keyys'/>
                  <input type="button" value="T" className='keyys'/>
                  <input type="button" value="Y" className='keyys'/>
                  <input type="button" value="U" className='keyys'/>
                  <input type="button" value="I" className='keyys'/>
                  <input type="button" value="O" className='keyys'/>
                  <input type="button" value="P" className='keyys'/>
                  <input type="button" value="[" className='keyys'/>
                  <input type="button" value="]" className='keyys' />
                  <input type="button" value="|" className='keyys bsBtn'/>
               </div>
            </div>
         </div> */}
         {/* <MainKeyb/> */}
         <input type="text" name="" value={dis}  className='mainScreen' id="" />
         <div>
            <div>
              <div style={{marginTop: "15px"}}>
                 <One arrOne={arrOne} addWord={addWord}/>
              </div>
              <div style={{marginTop: "15px"}}>
                 <Two arrTwo={arrTwo} addWord={addWord}/>
              </div>
              <div style={{marginTop: "15px"}}>
                 <Three arrThree={arrThree} addWord={addWord}/>
              </div>
              <div style={{marginTop: "15px"}}>
                  <Four arrFour={arrFour} addWord={addWord}/>
              </div>
              <div style={{marginTop: "15px"}}>
                  <Five arrFive = {arrFive} addWord={addWord}/>
              </div>
            </div>
         </div>
       </>
    </Wrapper>
  );
}

const Wrapper  = styled.section` 
    input.mainScreen {
      width: 100%;
      height: 40vh;
      background: #526c93d9;
      color: #f1f1f1;
    }


    input.display {
      width: 100%;
      height: 48vh;
      background: #526c93d9;
      color: #f1f1f1;
    }
    input.keyys {
      background: #0f269f52;
      padding: 24px 40px;
      border: transparent;
      box-shadow: 3px 3px 10px 1px #00a4ff;
    }
    .tabBtn{
       padding: 24px 60px!important;
    }
    .bsBtn{
       padding: 24px 25px!important;
    }
`
export default App;
