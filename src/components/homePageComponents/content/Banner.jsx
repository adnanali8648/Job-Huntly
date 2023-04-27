import React from 'react'
import bannerImg from "../../../assets/banner.jpeg"
import SearchForm from '../../searchForm/SearchForm'

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", }}
            className='flex flex-col px-20 gap-3 text-white justify-start py-20'>
            <div className='font-extrabold text-3xl'>Discover</div>
            <div className='font-extrabold text-3xl'>more than</div>
            <div className='font-extrabold text-3xl'>5000 + jobs</div>
            <div className=' '>great plateform for the job seeker that searching for <br />new career heights and passnate about startups</div>
            <SearchForm />
        </div>
    )
}

export default Banner
