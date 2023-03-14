import Facebook from '../Img/Facebook.png'
import Instagram from '../Img/Instagram.png'
import Twitter from '../Img/Twitter'


export function Footer() {
  return (
    <>
      <p>The Druncken Cup</p>
      <p>10 E 21st St #2, New York, NY</p>
      <p>10010</p>
      <p>Sitemap</p>
      <p>Privacy</p>
      <p>Careers</p>
      <p>Join Our Socials</p>
      <img src={Facebook} alt='social' />
      <img src={Twitter} alt
        ='social' />

      <img src={Instagram} alt
        ='social' />


    </>


  )
}