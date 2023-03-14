import Facebook from '../Img/Facebook.png'
import Instagram from '../Img/Instagram.png'
import Twitter from '../Img/Twitter.png'
import './NavBar.css'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='name'>The Druncken Cup</p>
      <p className='address'>10 E 21st St #2, New York, NY</p>
      <p className='address'>10010</p>
      <p className='address'>Sitemap</p>
      <p className='address'>Privacy</p>
      <p className='address'>Careers</p>
      <p className='address'>Join Our Socials</p>
      <img src={Facebook} alt='social' className="icon" />
      <img src={Twitter} alt='social' className="icon" />
      <img src={Instagram} alt='social' className='icon' />
    </div>

  )
}
