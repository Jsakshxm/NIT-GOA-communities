"use client"
import Link from "next/link"

import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app'; 

import 'firebase/compat/firestore';


import 'firebase/compat/auth';

import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDcr9kjhcMQQ8vI5fQTMCrsR5inzLDIykg",
    authDomain: "chat-cde98.firebaseapp.com",
    projectId: "chat-cde98",
    storageBucket: "chat-cde98.appspot.com",
    messagingSenderId: "1042388673481",
    appId: "1:1042388673481:web:a9b8adedee82184b0b7e18",
    measurementId: "G-P7SXYLTP9K"
})

const auth = firebase.auth();

const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

        <header>
        <SignOut />

        </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (<><div className="flex flex-col items-center justify-center h-screen">
  <button className= "sign-in bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={signInWithGoogle}>
    Sign in with Google
  </button>
  <p className="text-gray-600 mt-4">
    Do not violate the community guidelines or you will be banned for life!
  </p>
</div></>
  )

}

function SignOut() {
  return auth.currentUser && (
    <div className="flex flex-col h-screen w-52 right-full">
    <button className="sign-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={() => auth.signOut()}>Sign Out</button></div>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className="bg-gray-100 p-4 rounded-lg mb-4 overflow-y-auto max-h-96">
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
  
    <form className="flex items-center space-x-2">
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="say something nice"
      />
      <button
        type="submit"
        disabled={!formValue}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        🕊️
      </button>
    </form>
  </>
  )
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass} flex items-center bg-white border rounded-lg p-4 shadow-md mx-10`}>
  <img
    src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
    className="w-12 h-12 rounded-full object-cover mr-4"
    alt="User"
  />
  <p className="text-gray-800 mx-10">{text}</p>
</div>

  </>)
}


export default App;