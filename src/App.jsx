import Feed from './components/Feed'
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseApp } from './components/Firebase.jsx';
import Profile from './components/Profile.jsx';
const auth = firebaseApp.auth();
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [user] = useAuthState(auth)

  const HandleClick = () => {
    console.log("hello")
    const provider = new GoogleAuthProvider
    auth.signInWithPopup(provider);
  }
  return (
    <>

      {user ? <div className='flex flex-row h-screen max-w-6xl mx-auto ' >
        <Sidebar auth={auth} />
        <Routes>
          <Route index element={<Feed user={user} usrname={user.email.slice(0, user.email.indexOf("@g"))} />} />
          <Route path='/profile' element={<Profile user={user} usrname={user.email.slice(0, user.email.indexOf("@g"))} />
          } />
        </Routes>
      </div> :
        <SignIn onClick={HandleClick} />}

    </>
  )
}

export default App;
