import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className="footer">
       <img className="lines" src="/Line 18.svg"/>
      <h5>Public Policy and Opinion Cell</h5>
      <img className="title" src="/block.png"/>
      <br></br>
      <br></br>
      <div class="content">
    <div class="col">
    <h5>Quick Links</h5>
    <p>IIT Kanpur <br></br>PPOC<br></br>Policy Conclave</p>
    </div>
    <div class="col">
    <h5>More Links</h5>
    <p>IIT Kanpur <br></br>PPOC<br></br>Policy Conclave</p>
    </div>
    <div class="col">
    <h5>CONTACT US</h5>
    <p>Indian Institute of Technology Kanpur 
Kanpur, Uttar Pradesh, 208016<br></br>Email: ppoc@iitk.ac.in</p>
    </div>
  </div>
  <div>
    <div className="icon-container">
      <a href="https://www.facebook.com/ppoc.iitk"><img src="/Facebook (2).svg"/></a>
      <a href="https://www.linkedin.com/company/ppoc-iitk/mycompany/"><img src="/LinkedIn.svg"/></a>
      <a href="https://www.instagram.com/ppoc_iitk/"><img src="/Instagram.svg"/></a>
      <a href="https://www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag"><img src="/Vector.svg"/></a>
    </div>
  <img className="lines" src="/Line 18.svg"/>
    <p>Copyright © 2022-23 PPOC, IIT Kanpur | Designed by Web Team</p>
  </div>
    </div>
  )
}
