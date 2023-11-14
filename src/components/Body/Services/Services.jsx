import { useState } from 'react';

import Left from '../../../Imgs/Left.svg'
import Right from '../../../Imgs/Right.svg'

import './Services.scss'

export default function Services(){
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [
        {
          id:0,
          title: 'სუსტი დენები',
          items: [
            'კომპიუტერია, ტელეფონია, ტელევიზია',
            'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
            'ვიდეო მეთვალყურეობა',
            'ფონური მუსიკა',
            'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
          ],
        },
        {
            id:1,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
              'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
              'ვიდეო მეთვალყურეობა',
              'ფონური მუსიკა',
              'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
            ],
          },
    ]

    const handleNext = () => {
        setCurrentSlider((currentSlider + 1) % sliders.length);
      };
    
    const handlePrevious = () => {
        setCurrentSlider((currentSlider - 1 + sliders.length) % sliders.length);
      };

    const handleBulletClick = (index) => {
        setCurrentSlider(index);
      };

    return(
        <div className='Bservices'>
                <div className="Scarousel">
                    <div className="Oservices">
                        <h2>ჩვენი სერვისები</h2>
                        <div className="Abuttons">
                            <img src={Left} alt="left arrow" className='Gblack' onClick={() => handlePrevious()}/>
                            <img src={Right} alt="right arrow" onClick={() => handleNext()}/>
                        </div>
                    </div>
                    <p className='Gtext'>ჩვენთან შეძენილი პროდუქცია მომხმარებელს სათანადო სერვისის მეშვეობით ხანგრძლივი, მრავალწლიანი პერიოდის განმავლობაში შეუქმნის ჯანსაღ და კომფორტულ გარემოს.</p>
                    <div className="slider">
                        <div className="first">
                            <h3 className='SlidersTitle'>{sliders[currentSlider].title}</h3>
                            <ul>
                                {sliders[currentSlider].items.map((item, index) => (
                                    <li className='SlidersLi' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bullets">
                            {sliders.map((_, index) => (
                            <span
                                key={index}
                                className={index === currentSlider ? 'active' : ''}
                                onClick={() => handleBulletClick(index)}
                            ></span>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}