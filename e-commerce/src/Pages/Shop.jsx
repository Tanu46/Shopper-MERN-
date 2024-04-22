import React from 'react';
import Hero from '../Components/Hero2/hero';
import Item from '../Components/Item3/item';
import Popular from '../Components/Popular-4/popular';
import Offer from '../Components/Offer-5/offer';
import Newcollection from '../Components/NewCollection-6/newcollection';
import NewsLetter from '../Components/NewsLetter-7/newsLetter';
import Footer from '../Components/Footer-8/footer';

const Shop = () => {
    return (
        <div>
          <Hero/>
        <Popular/>
          <Offer/>
          <Newcollection/>
          <NewsLetter/>
          {/* <Footer/> */}
        </div>
    );
}

export default Shop;
