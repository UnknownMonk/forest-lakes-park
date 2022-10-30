import React, {useContext} from "react";
import {Context} from '../context'

import {useRouter} from 'next/router'

import axios from 'axios'

export default function Auth() {
  const router = useRouter()

const {
  username,
    setUsername,
    secret,
    setSecret

}= useContext(Context)


function onSubmit(e) {
  e.preventDefault()

  if(username.length === 0 || secret.length === 0) return

  axios.put(
    'https://api.chatengine.io/users',
    {username,secret},
    {headers: {"Private-key": 'ff60ac42-326f-4348-8d4d-21fae1ef5f4f'}}
  ).then(r => router.push('/chats'))
}

  return <div className="background">

    <div className="auth-container">

      <form className="auth-form" onSubmit={e => onSubmit(e)}>

        <div className="auth-title">Forest Lake Critters</div>
        <div className='input-container'>
        <input
        placeholder='Email'
        className='text-input'
        onChange={e => setUsername(e.target.value)}
        
        />
        

        </div>

        <div className='input-container'>
        <input
        type='password'
        placeholder='Password'
        className='text-input'
        onChange={e => setSecret(e.target.value)}
        
        />
        </div>
        <button type="submit" 
        className="submit-button"
        >
       Login / Sign up
        </button>
      </form>
    </div>
  </div>;
}
