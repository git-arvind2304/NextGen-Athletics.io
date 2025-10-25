 import React from 'react'
import Header from './Compomemts/Header'
import Pictures from './Compomemts/Pictures'
import Footer from './Compomemts/Footer'
 
 const App = () => {
   return (
     <div className='h-242 w-full bg-gray-200  justify-items-center '>
        <div className='h-232 w-325 bg-white rounded-3xl absolute top-5 '>

<Header/>
<Pictures/>
 <Footer/>
        </div>
     </div>
   )
 }
 
 export default App
 