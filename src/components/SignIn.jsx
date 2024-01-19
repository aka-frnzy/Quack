import React, { useEffect, useState } from 'react'
import App from '../App'


const SignIn = ({ onClick }) => {
    return (<>
        <div className='flex w-full h-screen justify-center items-center'>
            <div>
                <button className="rounded-full bg-yellow-400 p-4"
                    onClick={onClick}
                >Sign in with google</button>
            </div>
        </div>
    </>
    )
}

export default SignIn;