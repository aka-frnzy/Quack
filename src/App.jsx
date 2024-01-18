import Feed from './components/Feed'
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
function App() {
  return (
    <>
      <div className='flex flex-row h-screen max-w-6xl mx-auto ' >
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </>
  )
}

export default App;
