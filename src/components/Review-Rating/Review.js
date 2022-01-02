import React, { useEffect, useState, useContext, useRef } from 'react';
import { useLocation } from 'react-router';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import style from './Review.module.css';
import AuthContext from './../../store/auth-context';
import NavigationContext from './../../store/navigation-context';
import ReviewOutput from './ReviewOutput';

const Review = () => {
    const ctx = useContext(AuthContext);
    const nctx = useContext(NavigationContext);

    const reviewElement = useRef();
    const ratingElement = useRef();

    const [movieData, setMovieData] = useState({});
    // const [review, setReview] = useState({ review: '', rating: 1 });
    const { pathname } = useLocation();
    const id = pathname.substring(1,);
    // console.log(localStorage.getItem('movie'));
    const [reviews, setReviews] = useState([]);



    const submitHandler = async (e) => {
        e.preventDefault();
        if (!ctx.loggedIn) {
            nctx.onSignupClicked();
        }
        // console.log(ctx.token);
        try {
            const review = { review: reviewElement.current.value, rating: ratingElement.current.value };
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/movies/${id}/review/${localStorage.getItem('id')}`, review, {
                'headers': {
                    'authorization': `Bearer ${localStorage.getItem('movie')}`
                }
            });
            // console.log(data.data);
            // const reviews = data.data[0];
            // const userIds = data.data[1];
            // const REVIEWS = [];

            // userIds.forEach(id => {
            //     if (reviews[0][id.toString()])
            //         REVIEWS.push(reviews[0][id.toString()]);
            // })
            // console.log(REVIEWS);
            // reviews = data.data;
            // console.log(reviews);
            // setReview({ review: '', rating: 1 });
            setReviews(data.data[0])
            reviewElement.current.value = '';
            ratingElement.current.value = 1;



        } catch (err) {
            console.log(err);
        }


    }
    // const handleChange = (e) => {
    //     setReview(prevVal => { return { ...prevVal, [e.target.name]: e.target.value } });
    // }

    useEffect(() => {
        try {
            (async () => {
                const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/movies/${id}`);
                setMovieData({ ...data.data.movie["0"] });
            })();
        } catch (err) {
            console.log(err);
        }

    }, [id]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/movies/reviews/${id}`);
            setReviews(data[0]);
            // console.log(data);
        })();
    }, []);

    let thumbnail = movieData.thumbnail;
    if (thumbnail)
        thumbnail = thumbnail.replace('w500', 'w1280');


    return <>

        <h1 className={style.title}>{movieData.title}</h1>
        <div className={style["image-container"]}>
            <img src={thumbnail} alt="Poster" />
        </div>
        <div>
            <h1 className={style.title}>Overview</h1>
            <h3 className={style.overview}>{movieData.overview}</h3>
        </div>
        <form className={style.form} onSubmit={submitHandler} action="/">
            <div className={style["rating-container"]}>
                <h1 className={style["rating-title"]}>Rating</h1>
                <select ref={ratingElement} /*value={review.rating} onChange={handleChange}*/ className={style.select} name="rating">
                    <option value={+1}>⭐</option>
                    <option value={+2}>⭐⭐</option>
                    <option value={+3}>⭐⭐⭐</option>
                    <option value={+4}>⭐⭐⭐⭐</option>
                    <option value={+5}>⭐⭐⭐⭐⭐</option>
                </select>
            </div>
            <div className={style["review-container"]}>
                <h1 className={style["review-title"]}>Review</h1>
                <textarea ref={reviewElement} /*value={review.review} onChange={handleChange}*/ name="review" className={style.textarea} type="text" />
            </div>
            <button className={style.submit}>Submit</button>
        </form>
        {
            reviews && reviews.map(review => <ReviewOutput key={uuid()} review={review} />)
        }
    </>

}

export default Review;