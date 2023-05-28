import React, { useEffect, useState } from 'react'
import loader from './loader.gif'
import nullImage from '../assets/nullImage.jpg'
const News = ({ category }) => {

    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4955ce34279141d8901a8135d751b565`


    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    const fetchData = async () => {
        await fetch(apiUrl).then(res => res.json()).then(result => setData(result.articles))
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
        setLoading(true)
    }, [category])


    return (
        loading ? <div className=" load w-full flex justify-center items-center"><img className='w-10' src={loader} alt="loader" /></div> : <div className="p-5 flex flex-col justify-center items-center">
            <h1 className='mb-5 text-2xl'>News on {(category.charAt(0).toUpperCase()) + category.slice(1, category.length)}</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {data.map((newsItem, index) => (
                    <div key={index} className="card text-center" style={{ width: "18rem" }}>
                        <span class="badge absolute right-0 rounded-pill text-bg-danger">{newsItem.source.name}</span>
                        <img src={newsItem.urlToImage ? newsItem.urlToImage : nullImage} className="card-img-top" alt={newsItem.title} />
                        <div className="card-body">
                            <h3 className="card-title text-xl font-bold">{newsItem.title}</h3>
                            <p className="card-text">{newsItem.content ? (newsItem.content).slice(0, 100) + "..." : <p></p>}</p>
                            <a href={newsItem.url}> <button className="btn btn-outline-primary mt-4">Read More</button></a>
                        </div>
                    </div>
                )
                )}
            </div>
        </div >
    )
}

export default News