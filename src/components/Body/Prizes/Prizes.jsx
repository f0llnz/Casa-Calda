import './Prizes.scss'
import Prize1 from '../../../Imgs/Prize1.png'
import Prize2 from '../../../Imgs/Prize2.png'
import Prize3 from '../../../Imgs/Prize3.png'
import Prize4 from '../../../Imgs/Prize4.png'

export default function Prizes(){
    return(
        <div className="PrizesB">
            <h2>ჯილდოები, სიგელები</h2>
            <p>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
            რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს</p>
            <div className="PrizeImgs">
                <img src={Prize1} alt="Prize1" />
                <img src={Prize2} alt="Prize2" />
                <img src={Prize3} alt="Prize3" />
                <img src={Prize4} alt="Prize4" />
            </div>
            <button>ნახე სრულად</button>
        </div>
    )
}