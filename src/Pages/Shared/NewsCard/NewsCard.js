import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const [error, setError] = useState('')
    const { image_url, details, title, author, total_view, rating, _id } = news;
    if (news.length === 0) {
        setError('data nai')
    }
    return (
        <div className='mb-3'>
            <Card>
                <Card.Header className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            style={{ height: '60px' }}
                            src={author.img}
                        ></Image>
                        <div className='ms-2 align-items-center'>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>

                        </div>

                    </div>
                    <div>
                        <FaBookmark className='me-2' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details?.length > 200 ?
                            <>{details?.slice(0, 200) + '...'}<Link to={`/news/${_id}`}>Read more</Link></>
                            :
                         <>{details}</>

                         }

                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center me-2'>
                        <div className='me-2 text-warning'><FaStar></FaStar></div>
                        {rating.number}
                    </div>
                    <div className='d-flex align-items-center me-2'>
                        <div className='me-2'><FaEye></FaEye></div>
                        
                            {total_view}
                        
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCard;