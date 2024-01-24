import {IoIosMail} from 'react-icons/io'

import {RiInstagramFill, RiLinkedinBoxFill} from 'react-icons/ri'
import Header from '../Header'
import './index.css'

const Contact = () => (
  <div className="contacts-bg-container">
    <Header />
    <div className="contacts-container">
      <div className="SocialLinks">
        <RiInstagramFill className="socialLinksLogo" />
        <RiLinkedinBoxFill className="socialLinksLogo " />
        <IoIosMail className=" " size={47} />
      </div>
      <div className="copyrights">
        <p>Copyright © 2024. All rights reserved</p>
      </div>
    </div>
  </div>
)

export default Contact
