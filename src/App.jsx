import Feed from './components/Feed'
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import Widget from './components/Widget';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseApp } from './components/Firebase.jsx';
const auth = firebaseApp.auth();


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
        <Feed user={user} usrname={user.email.slice(0, auth.currentUser.email.indexOf("@g"))} />
        {/* <Widget /> */}
      </div> :
        <SignIn onClick={HandleClick} />}

    </>
  )
}

export default App;
