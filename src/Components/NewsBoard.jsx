import { useEffect } from "react";
import { useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {

  const [articles,setArticles]=useState([]);


  useEffect(()=>{
 let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}
`
fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));


  },[category])

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        <span className="badge bg-danger px-4 py-2" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>Latest News</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {articles.map((news, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Newsitem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard


