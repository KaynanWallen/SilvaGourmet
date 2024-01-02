import './style.css';
import logoescrita from '../../../public/images/logoescrita.png';

export function Header() {
    return (
        <>
            <header>
                <section className='header__section'>
                    <img className='logo' src={logoescrita} alt = 'Logo escrita' />
                </section>

                <section className='header__section-mid'>
                    <p>
                        Home
                    </p>

                    <p>
                        Quem somos
                    </p>

                    <p>
                        Cardápio
                    </p>

                    <p>
                        Delivery
                    </p>
                </section>

                <section className='header__section corazul'>
                    
                </section>
            
            </header>
        </>
    )
}