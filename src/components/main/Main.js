import React from 'react'
import Bestsellers from '../bestsellers/Bestsellers'
import Banner from '../banner/Banner';
import Offer from '../offer/Offer';
import History from '../history/History';
import Subscription from '../subscription/Subscription';
import Contasts from '../contasts/Contasts';

function Main() {
  return (
    <main>
        <Bestsellers />
        <Banner />
        <Offer />
        <History />
        <Subscription />
        <Contasts />
    </main>
  )
}

export default Main;