import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import NewList from './components/NewList';

function App() {

  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);
  useEffect(() => {
    const askApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=16c7059d81da4ff4a5c1d1e2b010b095`;

      const response = await fetch(url);
      const news = await response.json();

      saveNews(news.articles);
    }
    askApi();
  }, [category])
  return (
    <Fragment>
      <Header title='Breaking news' />
      <div className="container mx-auto">

        <Form
          saveCategory={saveCategory}
        />
        <NewList news={news}/>
      </div>
    </Fragment>
  );
}

export default App;
