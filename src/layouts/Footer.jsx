import '../styles/footer.scss';
import logomc from '../assets/logo-mc.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logomc} alt='Kasa footer image' className='footer__logo' />
            <p className='footer__copyright'>(c)2020 Kasa. All rights reserved</p>
        </footer>
    )
}



export default Footer
