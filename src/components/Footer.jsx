import Facebook from '../Img/Facebook.png'
import Instagram from '../Img/Instagram.png'
import Twitter from '../Img/Twitter.png'
import './Footer.css'


export default function Footer() {
  return (
    <div className='footer'>
      <p className='name'>The Druncken Cup</p>
      <p className='address'>10 E 21st St #2, New York, NY</p>
      <p className='zip'>10010</p>
      <p className='directions'>Get Directions</p>
      <br />
      <p className='POC'>Sitemap</p>
      <p className='POC'>Privacy</p>
      <p className='POC'>Careers</p>
      <p className='POC'>Join Our Socials</p>
      <img src={Facebook} alt='social' className="icon" />
      <img src={Twitter} alt='social' className="icon" />
      <img src={Instagram} alt='social' className='icon' />
    </div>

  )
}
