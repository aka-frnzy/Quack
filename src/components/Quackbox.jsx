import React from 'react'
import { Avatar } from '@mui/material'
const Quackbox = ({ avatar }) => {
    return (
        <div className='border-b-4 pb-2 flex flex-col'>
            <form>

                <div className='flex  '>
                    <Avatar src={avatar} />
                    <input className='
                    border-none w-full h-12 ml-1 p-5'
                        placeholder='Something to Quack?'
                    />
                </div>
                <input className='ml-16 mt-2 w-3/4'
                    placeholder='Enter Image URL' />
                <div className='flex align-middle items-end justify-end' >
                    <button className='
                bg-yellow-300 rounded-full px-3 py-1 font-medium mt-1 text-slate-700 text-lg'
                    >Quack</button>
                </div>

            </form>
        </div>
    )
}

export default Quackbox