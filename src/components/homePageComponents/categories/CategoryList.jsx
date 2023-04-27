import React from 'react'

const CategoryList = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex  justify-between items-center'>
                <div className='flex gap-1 font-bold text-2xl'>
                    <div className='text-black'>Explore By </div>
                    <div className='text-sky-500'>Catergory</div>
                </div>
                <a className='cursor-pointer text-blue-600'>more jobs </a>
            </div>
        </div>
    )
}

export default CategoryList
