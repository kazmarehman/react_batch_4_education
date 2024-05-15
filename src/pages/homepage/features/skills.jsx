import React from 'react'
import Icon from '../../../assets/computre.png'
import Icon1 from'../../../assets/certification 1.png'
import Icon2 from'../../../assets/exam 1.png'
const Skills = () => {
  return (
    <div>
      <div className="page_width">
        <div className="skills_container">
            <div className="item_grid">
                <div className="img"style={{
                    height:"70px",width:"195px"
                }}>
                    <img src={Icon} alt="" />
                </div>
                <div className="content">
                    <h3>Learn the Latest Skills</h3>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </div>
            </div>
            <div className="item_grid">
                <div className="img"style={{
                    height:"70px",width:"195px"
                }}>
                    <img src={Icon1} alt="" />
                </div>
                <div className="content">
                    <h3>Learn the Latest Skills</h3>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </div>
            </div>
            <div className="item_grid">
                <div className="img"style={{
                    height:"70px",width:"195px"
                }}>
                    <img src={Icon2} alt="" />
                </div>
                <div className="content">
                    <h3>Learn the Latest Skills</h3>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </div>
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default Skills

