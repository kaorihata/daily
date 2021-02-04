import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import BeatLoader from "react-spinners/BeatLoader";


/* 
  * Style
*/
const Panel = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  .card{
    background: var(--yellow01);
    position: relative;
    margin: 0.75rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    &:hover{ 
      transform: translateY(-3px);
    }
  }
  .card-media{
    width: 360px;
    img{
      width: 360px;
      height: 300px;
      transition: all .2s ease-in-out;
  }
    .title{
      background: #EB5E28;
      width: calc(100% - 30px);
      margin-top: -30px;
      padding: 0.5rem;
      color: #FFFCF2;
      font-size: 1.25rem;
      position: relative;
    }
  }
  .card-text{
      padding-left: 1.5rem;
      padding-right: 0.5rem;
      font-size: 1.125rem;
      margin: 1rem 0;
  }
  button {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
  }

  @media(max-width:768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width:576px){
    max-width: 320px;
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
const loader = css`
  grid-column: 2;
  
  @media(max-width: 768px){
    grid-column: 1;
  }
`



export default function NewsContent(props){
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchNews(){
    const apiKey = 'Z7xEsJyfhqUdpNbCfkBh8bXxQ129cLj2'

    return fetch(`https://api.nytimes.com/svc/topstories/v2/${props.topic}.json?api-key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      setNews(data.results)
      setLoading(true)
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    fetchNews()
  },[])

  return (
    <Panel>
      {loading ? News.map(article => 
          <div className="card">
            <a className="card-media" target="_blank" href={article.url}>
                <img src={article.multimedia === null ? 
                  "https://via.placeholder.com/360x300.png?text=Visit+nytimes.com" : 
                  article.multimedia[0].url} /> 
              <div className="title">{article.title}</div>  
            </a>
            <div className="card-text">{article.abstract}</div>
        </div>   
      )
      :
      <BeatLoader css={ loader }/>
      }
    </Panel>
  ) 
}