//import image from '../assets/mountain-bike3.png'
import StarIcon from '@mui/icons-material/Star';
// import { pink, red } from '@mui/material/colors';
const Card = (props) => {

  let badgeText
  if (props.item.openSpots === 0)
  {
    badgeText = "SOLD OUT"
  }
  else if (props.item.location === "Online")
  {
    badgeText = "ONLINE"
  }
  return (

//     <div className="card">
//     {badgeText && <div className="card--badge">{badgeText}</div>}
//     <img src={`../images/${props.img}`} className="card--image" />
//     <div className="card--stats">
//         <img src="../images/star.png" className="card--star" />
//         <span>{props.rating}</span>
//         <span className="gray">({props.reviewCount}) • </span>
//         <span className="gray">{props.location}</span>
//     </div>
//     <p className="card--title">{props.title}</p>
//     <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
// </div>

    <div className='card'>
       {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`}  className='img-card' />
      <div className=' star mt-2 mb-2'>
        
        <StarIcon className='star-icon' sx={{fontSize :  32}}/>
            <p className='mt-1 ml-1 text-lg'>{props.item.stats.rating}</p>
            <p className='mt-1 ml-1 text-lg text-gray-500'>({props.item.stats.reviewCount}) { props.item.location}</p>
   
      </div>
      <p className='text-lg  mb-1'>{props.item.title}</p>
      <p><span className='font-semibold text-lg'>From ${props.item.price}</span> <span className='text-lg'>/ person</span></p>

   </div>



  )
}

export default Card
