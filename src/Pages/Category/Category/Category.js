import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Category = () => {
    const allNews=useLoaderData();
    console.log(allNews);
    return (
        <div>
            {
                allNews.map(news=><NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;