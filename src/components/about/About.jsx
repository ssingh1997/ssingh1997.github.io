import './about.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function About() {
    useEffect(() => {
        Aos.init({duration: 2000});
    })
    return (
        <div data-aos="fade-up" className="about" id="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="assets/developer.jpg" alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    Hello! I am a Computer Science Master's Student at New York University Tandon School of Engineering. I have a keen interest in Machine Learning and Deep Learning Applications, especially in the field of Healthcare, Climate Change, and Robotics.  
                </p>
                <p className="about-desc">
                    Over the course of 2021, I have gained expertise in a plethora of programming languages such as Python, C/C++, and R as well as have implemented front-end frameworks using HTML, CSS, and JavaScript. I have worked with libraries such as Pandas, NumPy, and Scikit-learn as well as used OpenCV and PIL for Computer Vision work. Deep Learning frameworks such as PyTorch implemented regularly in my work as well. I am comfortable and familiar with Neural Network Architectures such as DNNs, CNNs, RNNs, and Transformers and routinely employ them to solve different kinds of Deep Learning problems.
                </p>


            </div>
        </div>
    )
}
