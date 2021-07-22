import React , {useEffect} from 'react';
import Slide1 from '../../Images/slide1.png';
import Slide2 from '../../Images/slide2.png';
import Slide3 from '../../Images/slide3.png';
import Slide4 from '../../Images/slide4.png';
import gsap from 'gsap';
import './Slider.css';

export default function Slider() {

    useEffect(()=>{
        f();
        sf();
    },[])

    const sf = () => {
        
        gsap.from(".a-text",1.5,{opacity:0,scale:0})
        gsap.to(".a-text",1.5,{opacity:1,scale:1})
        
        gsap.to(".a-text",1.5,{opacity:0,delay:5,scale:0})
        gsap.from(".b-text",1.5,{scale:0,opacity:0,delay:5})
        gsap.to(".b-text",1.5,{opacity:1,delay:5,scale:1})
        
        gsap.to(".b-text",1.5,{opacity:0,delay:10,scale:0})
        gsap.from(".c-text",1.5,{scale:0,delay:10,opacity:0})
        gsap.to(".c-text",1.5,{opacity:1,delay:10,scale:1})
        
        gsap.to(".c-text",1.5,{opacity:0,delay:15,scale:0})
        gsap.from(".d-text",1.5,{scale:0,delay:15,opacity:0})
        gsap.to(".d-text",1.5,{opacity:1,delay:15,scale:1})
        
        gsap.to(".d-text",1.5,{opacity:0,delay:20,scale:0, onComplete: sf})

    }

    const f =()=>{

        // var tl = gsap.timeline({
        //     repeat: -1}); 

        // tl.from(".a",1,{x:'100%',scale:1.2})
        // .to(".a",1,{x:'0%'})

        // .to(".a",1,{x:'-100%',delay:3},"1")
        // .from(".b",1,{scale:1.2,x:'100%',delay:3},"1")
        // .to(".b",1,{x:'0%',delay:3},"1")
        
        // .to(".b",1,{x:"-100%",delay:6},"2")
        // .from(".c",1,{scale:1.2,delay:6,x:'100%'},"2")
        // .to(".c",1,{x:'0%',delay:6},"2")
        
        // .to(".c",1,{x:'-100%',delay:9},"3")
        // .from(".d",1,{scale:1.2,delay:9,x:'100%'},"3")
        // .to(".d",1,{x:'0%',delay:9},"3")
        
        // .to(".d",1,{x:'-100%',delay:3});


        gsap.from(".a",1.5,{x:'100%',scale:1.5})
        gsap.to(".a",1.5,{x:'0%'})
        
        gsap.to(".a",1.5,{x:'-100%',delay:5})
        gsap.from(".b",1.5,{scale:1.5,x:'100%',delay:5})
        gsap.to(".b",1.5,{x:'0%',delay:5})
        
        gsap.to(".b",1.5,{x:"-100%",delay:10})
        gsap.from(".c",1.5,{scale:1.5,delay:10,x:'100%'})
        gsap.to(".c",1.5,{x:'0%',delay:10})
        
        gsap.to(".c",1.5,{x:'-100%',delay:15})
        gsap.from(".d",1.5,{scale:1.5,delay:15,x:'100%'})
        gsap.to(".d",1.5,{x:'0%',delay:15})
        
        gsap.to(".d",1.5,{x:'-100%',delay:20,onComplete:f})
    }
    return (
        <div className="slider">
            <div className="img-sec">
                <div className="slide-img-cont">
                    <img src={Slide1} alt="" className="slider-img a" style={{zIndex:'5'}}  />
                    <img src={Slide2} alt="" className="slider-img b" style={{zIndex:'4'}} />
                    <img src={Slide3} alt="" className="slider-img c" style={{zIndex:'3'}}/>
                    <img src={Slide4} alt="" className="slider-img d" style={{zIndex:'2'}}/>
                </div>
            </div>

            <div className="text-sec">
                <div id='random' >
                    <div className='text-sec-cont a-text' >
                        <div className="text-1">Olivia</div>
                        <div className="text-2">UI/UX Designer</div>
                        <div className="text-3">Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.</div>
                    </div>
                    <div className='text-sec-cont b-text' >
                        <div className="text-1">James Bond</div>
                        <div className="text-2">Actor/Producer</div>
                        <div className="text-3">Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.</div>
                    </div>
                    <div className='text-sec-cont c-text' >
                        <div className="text-1">Amelia</div>
                        <div className="text-2">Web Developer</div>
                        <div className="text-3">Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.</div>
                    </div>
                    <div className='text-sec-cont d-text' >
                        <div className="text-1">George</div>
                        <div className="text-2">Vocalist/Pianist</div>
                        <div className="text-3">Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
