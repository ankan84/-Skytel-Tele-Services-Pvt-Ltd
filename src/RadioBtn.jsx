import React, { useEffect, useState } from 'react'

function RadioBtn({ value, readonly }) {

  const [list,setList]=useState([]);
  const [input,setInput]=useState("");

  useEffect(()=>{
     setList(value)

  },[value])

  useEffect(()=>{
    
    let s=list?.filter((item)=>item.toLowerCase()===input.toLowerCase());
    
   if(s.length>0){
    setTimeout(()=>{
      setList(s);
    },500)
   }
   else {
    setTimeout(()=>{
      setList(value);
    },500)
   }
    


  },[input])



  return (
    <div className='main'>

      <div className="radio-area">
        <input type="text" placeholder='e.g india' onChange={(e)=>{setInput(e.target.value)}} />

        <div className="checkbox-area">

          {
            Array.isArray(list) && list.length > 0 && (
              <>
                {
                  list.map((ele, i) => {

                    if (i < 2) {
                      return (
                        <div className="item" key={i}>
                          <input type="checkbox"  disabled ={readonly} defaultChecked={true}/>
                          <label htmlFor="checkbox">
                            {ele}
                          </label>
                        </div>
                      )

                    } else {
                      return (
                        <div className="item" key={i}>
                        <input type="checkbox"   disabled ={readonly} />
                        <label htmlFor="checkbox">
                          {ele}
                        </label>
                      </div>

                     )
                    }

                  })
                }

              </>

            )
          }

          {/* <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>

          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Test
            </label>
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default RadioBtn