import { useEffect } from "react";
import { useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error('No articles found in the response');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="container py-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        <span className="badge bg-danger px-4 py-2" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>Latest News</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <Newsitem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No news articles available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsBoard


