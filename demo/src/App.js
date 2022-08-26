import Markdown from 'react-page-markdown-plugin';
import Editor from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import { useState,useEffect } from 'react';
const cellPlugins = [Markdown]

function App() {
  const [value, setValue] = useState('');

  useEffect(()=> {
    fetch('https://raw.githubusercontent.com/grayhatdevelopers/react-page-markdown-plugin/main/README.md')
    .then((res) => res.text())
    .then((body) => setValue({
      "id": "s6r1hn",
      "version": 1,
      "rows": [
          {
              "id": "4h7ty8",
              "cells": [
                  {
                      "id": "tn9uz1",
                      "size": 12,
                      "plugin": {
                          "id": "myPlugin",
                          "version": 1
                      },
                      "dataI18n": {
                          "default": {
                              "markdown": body
                          }
                      },
                      "rows": [],
                      "inline": null
                  }
              ]
          }
      ]
  }))
  }, [])

  return (

    <div style={{background:"lightgray" , display:"flex-col" , flexDirection:"center",borderRadius: "25px",  padding: "25px 50px 75px 100px"}} >

        
        <div className="demo">
           <h2>
           Markdown Plugin Demo:
           </h2>
           <div >
            <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
           </div>
        </div>


        
    </div>

    
  );
}

export default App;
