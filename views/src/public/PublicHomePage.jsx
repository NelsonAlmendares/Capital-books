import React from 'react'

import TopNav from './components/top-nav/TopNav';
import Nav from './components/nav/Nav';
import Publicity from './components/publicity/Publicity';
import Footer from './components/footer/Footer';
import Books from './components/books/Books';
import Home from './components/home/Home';
import Dynamic from './components/dynamics/Dynamic';

const PublicHomePage = () => {
   return (
      <>
         {/* < Here i gonna render all the public site /> */}
         <TopNav />
         <main>
            <Nav />
            <Home />
            <Publicity />
            <Books />
            <Dynamic />
            <Footer />
         </main>
      </>
   )
}

export default PublicHomePage