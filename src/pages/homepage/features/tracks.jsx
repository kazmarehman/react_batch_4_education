import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { IoIosStarOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import { PiDownloadSimple } from "react-icons/pi";
import CardImg from '../../../assets/card_img.jpg'

const Tracks = () => {
  return (
    <div className='outer_tracks'>
      <div className="page_width">
        <div className="tracks_div">
            <div className="top_content">
            <h3>Our Tracks</h3>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
           <div className="tracks_cards">
            <div className="className">
            <div className="cards">
                <div className="img">
                    <img src={CardImg} alt="" />
                    <div className="rating">
                        <small>UI/UX Design</small>
                        <div className="stars">
                        <LiaStarSolid className='full_icon' />
                        <LiaStarSolid className='full_icon' />
                        <LiaStarSolid className='full_icon' />
                        <LiaStarSolid className='full_icon' />
                        <IoIosStarOutline className='half_icon' />
                        </div>
                    </div>
                    <div className="main_heading">
                        <h2>UI/UX Design for Beginners</h2>
                        <h3>$98</h3>
                    </div>
                    <hr/>
                    <div className="icons">
                        <div className="icon_item">
                            <spam><CiClock2 color='#000000' size={18}/>22hr 30min</spam>
                        </div>
                        <div className="icon_item">
                             <spam>< GoDeviceCameraVideo color='#000000' size={18}/>22hr 30min</spam>
                        </div>
                        <div className="icon_item">
                             <spam><PiDownloadSimple color='#000000' size={18}/>22hr 30min</spam>
                        </div>
                        <div className="className">
                            <button>Join Course</button>
                         </div>
                    </div>
                </div>
                
                 </div>
            </div>
          
           </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks
