import '../styles/globals.css'
import Navbar from './components/navbar'
import Leftbar from './components/leftbar'
import Footer from './components/footer'

export default function App({ Component, pageProps }) {
  return (<>
    <div className='main'>
    <Navbar/>
      <div className='maincontent'>
        <Leftbar/>
       

        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  </>

  )
}
