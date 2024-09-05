import React from 'react'
import LeftSection from './components/left/LeftSection'
import RightSection from './components/right/RightSection'

const App = () => {
  return (
    <div className='bg-main-gradient flex min-h-screen'>
      
      {/* LEFT SECTION  */}
      <LeftSection/>

      {/* RIGHT SECTION  */}
      <RightSection/>

    </div>
  )
}

export default App
