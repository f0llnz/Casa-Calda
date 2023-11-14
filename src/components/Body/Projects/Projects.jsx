import { useState } from 'react'

import Right from '../../../Imgs/Right.svg'
import Left from '../../../Imgs/Left.svg'
import Main from '../../../Imgs/Main.png'
import LinesB from '../../../Imgs/GroupB.png'

import './Projects.scss'

export default function Projects() {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [
        {
            id:0,
            status:'დასრულებული',
            title:'ქუთაისის პარლამენტი',
            Descrip:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.',
            img:`${Main}`
        },
        {
            id:1,
            status:'დასრულებული',
            title:'თბილისის პარლამენტი',
            Descrip:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.',
            img:'https://reitingi.ambebi.ge/pictures/image3/61a5fd7e74fd4985e516be68da67dd08.jpg',
        }
    ]

    const handleNext = () => {
        setCurrentSlider((currentSlider + 1) % sliders.length);
      };
    
    const handlePrevious = () => {
        setCurrentSlider((currentSlider - 1 + sliders.length) % sliders.length);
      };

    return (
    <>
        <div className="Pbody">
            <div className="Oprojects">
                <h2>ჩვენი პროექტები</h2>
                <div className="Abuttons">
                    <img src={Left} alt="left arrow" className='Gblack' onClick={() => handlePrevious()}/>
                    <img src={Right} alt="right arrow" onClick={() => handleNext()}/>
                </div>
            </div>
            <div className="slide">
                <img src={sliders[currentSlider].img} alt="ქუთაისის პარლამენტის ფოტო" />
                <div className="StatusTitle">
                    <h4 className="status">{sliders[currentSlider].status}</h4>
                    <h2 className="title">{sliders[currentSlider].title}</h2>
                </div>
                <p className='Descrip'>
                {sliders[currentSlider].Descrip}
                </p>
                <button className='Orange'>სრული პროექტი</button>
            </div>
        </div>
        <div className="backgroundI">
            <img src={LinesB} alt="oval lines"/>
        </div>
    </>
    )
}