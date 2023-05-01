import React from 'react';
import style from './app.css';
import mainImg from './images/image-equilibrium.jpg';
import IconEthernum from './images/icon-ethereum.svg';
import iconClock  from './images/icon-clock.svg';
import profilePicture from './images/image-avatar.png'
import iconView from './images/icon-view.svg'


const App = () =>{
    return (
        
        <main className='container'>
            

            <section className='img-section'>

                <article className='main-img-container'>
                    <article className='overlay-container'>
                        <img className='main-img' src={mainImg} alt="main image" />
                        <img className='view-icon' src={iconView} alt="view icon" />
                        <p className='overlay'></p>
                    </article>
                </article>

            </section>

            <section className='bottom-text-section'>
                <h1>Equilibrium #3429</h1>
                <p className='eth-description'>Our Equilibrium collection promotes balance and calm.</p>

                <section className='bottom-section-flex'>
                    <article className='bottom-area-flex'>
                        <img src={IconEthernum} alt='ethernum icon' />
                        <p className='price'>0.041 ETH</p>
                    </article>

                    <article className='bottom-area-flex'>
                        <img src={iconClock} alt='clock icon' />
                        <p className='time-left'>3 days left</p>
                    </article>
                </section>

                <section className='author-section'>
                    <img className='profile-picture' src={profilePicture} alt='profile picture' />

                    <p className='author-text'>Creation of <span className='personal-data'>Jules Wyvern</span></p>
                </section>
            </section>
        </main>
    );
}

export default App;