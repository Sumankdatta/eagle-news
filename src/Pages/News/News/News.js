import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { FaBookmark, FaFilePdf } from 'react-icons/fa';





const News = () => {
    const news = useLoaderData();
    console.log(news);

    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() => <FaFilePdf/>}
                content={() => componentRef.current}
            />
            <Card ref={componentRef}>
                <Card.Img variant="top" src={news.image_url} />
                <Card.Body >
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>
                        {news.details}
                    </Card.Text>
                    <Link to={`/category/${news.category_id}`}>
                        <Button variant="primary">all news</Button>
                    </Link>
                </Card.Body>
            </Card >

        </div>
    );
};

export default News;