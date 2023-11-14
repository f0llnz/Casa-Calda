import './Partners.scss'
import Partners1 from '../../../Imgs/Partners1.png'
import Partners2 from '../../../Imgs/Partners2.png'
import Partners3 from '../../../Imgs/Partners3.png'
import Partners4 from '../../../Imgs/Partners4.png'
import Partners5 from '../../../Imgs/Partners5.png'
import Partners6 from '../../../Imgs/Partners6.png'


export default function Partners(){
    return(
        <div className='PartnersB'> 
            <h2 className='PartnersT'>ჩვენი პარტნიორები</h2>
            <p className='PartnersG'>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს</p>
            <div className="PartnerImgs">
                <img src={Partners1} alt="Carrier" />
                <img src={Partners2} alt="Ferroli" />
                <img src={Partners3} alt="Mitsubishi" />
                <img src={Partners4} alt="Toshiba" />
                <img src={Partners5} alt="Lennox" />
                <img src={Partners6} alt="Dab" />
            </div>
            <button>სრული სია</button>
        </div>
    )
}