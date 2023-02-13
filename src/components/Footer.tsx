import Image from 'next/image';
import logo from '../images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="top">
      <div className="container">
      <div className="row">
      <div className="col-md-6">
        <ul>
          <li><a href=""><Image src={logo} alt='logo' priority={true} /></a></li>
          <li>Are you a coach?</li>
          <li><a href="" className='btn2'>Sign up as a coach</a></li>
        </ul>
      </div>
      <div className="col-md-2">
        <h6>Collumn One</h6>
        <ul>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
        </ul>
      </div>
      <div className="col-md-2">
        <h6>Collumn Two</h6>
        <ul>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
        </ul>
      </div>
      <div className="col-md-2">
        <h6>Follow Us</h6>
        <ul>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
        </ul>
      </div>
      </div>
      </div>
      </div>{/*top*/}

      <div className="bottom">
      <div className="container">
      <div className="row">
      <div className="col-md-6">
        <p>2023 Get on the Radar. All right reserved.</p>
      </div>
      <div className="col-md-6">
        <ul className='privacy'>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">Cookies Settings</a></li>
        </ul>
      </div>
      </div>
      </div>
      </div>{/*bottom*/}
    </footer>
  )
}
