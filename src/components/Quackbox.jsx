import React from 'react'
import { Avatar } from '@mui/material'
import { useState } from 'react';
import db from './Firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const Quackbox = ({ avatar }) => {
    const [quack, setQuacks] = useState('');
    const [quackpic, setQuackPic] = useState('');


    const handleinput = (event) => {
        setQuacks(event.target.value)
    }

    const sendQuacktoDatabase = (e) => {
        e.preventDefault();
        if (quack === "" && quackpic === "") {
            return
        }
        db.collection('posts').add({
            displayName: "Yapper",
            userName: "whoisme",
            text: quack,
            pic: quackpic,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiwKyEN385qsZ34nK8U0iDt5LFtEPkjvPexJElj4IAg&s"
        })
        setQuacks('');
        setQuackPic('');
    }

    return (
        <div className='border-b-4 pb-2 flex flex-col'>
            <form>

                <div className='flex  '>
                    <Avatar src={avatar} />
                    <input value={quack}
                        onChange={handleinput}
                        className='border-none w-full h-12 ml-1 p-5'
                        placeholder='Something to Quack?'
                    />
                </div>
                <input value={quackpic}
                    onChange={(e) => { setQuackPic(e.target.value) }}
                    className='ml-16 mt-2 w-3/4'
                    placeholder='Enter Image URL' />
                <div className='flex align-middle items-end justify-end' >
                    <button className='
                bg-yellow-300 rounded-full px-3 py-1 font-medium mt-1 text-slate-700 text-lg'
                        onClick={sendQuacktoDatabase}>Quack</button>
                </div>

            </form>
        </div>
    )
}

export default Quackbox