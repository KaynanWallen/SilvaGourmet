import './style.css';
import logoescrita from '/images/logoescrita.png';

import instagram from '/images/instagram.png';
import whatsapp from '/images/whatsapp.png';
import facebook from '/images/facebook.png';

export function Header() {
    return (
        <>
            <header>
                <div className='header_fixo'>
                    <section className='header_section logo'>

                    </section>

                    <section className='header_fullscream'>
                        <p>Home</p>
                        <p>Sobre nós</p>
                        <p>Cardápio</p>
                        <p>Delivery</p>
                    </section>

                    <section className='header_section'>
                        <div className='menu__celular'>
                        </div>

                        <div className="menu__fullscream">
                            <a> 
                                <img src={instagram} alt = 'logo instagram' />
                            </a>

                            <a> 
                                <img src={whatsapp} alt = 'logo whatsapp' />
                            </a>

                            <a> 
                                <img src={facebook} alt = 'logo facebook' />
                            </a>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}