import React from 'react'
import CategoryList from '../categories/CategoryList'
import Banner from './Banner'

const Content = () => {
    return (
        <div className=' flex flex-col gap-10'>
            <Banner />
            <div className='container w-5/6 mx-auto'>
                <CategoryList />
            </div>
        </div>
    )
}

export default Content
