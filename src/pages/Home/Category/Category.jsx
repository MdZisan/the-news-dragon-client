import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} =useParams();
    
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            {id&& <h2>Total news: {categoryNews.length}</h2>}
            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
            {categoryNews.length===0 && <><h2 className='text-danger'>NO NEWS ABOUT IT </h2></>}
        </div>
    );
};

export default Category;