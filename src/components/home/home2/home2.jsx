import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Home2 = () => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <div className='flex flex-wrap justify-center gap-6 p-6'>
      
      <Link to={"/home/sups"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBihquC4nbjyT0DkbJBPk7FVTjqIHhkzTXFA&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.1')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/garnirs"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKc3F9Gt3OfvMjAFDMIXqzRQablNopZvizg&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.2')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/breakfast"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSom2SFof-0102bIeSoUawRd1vnT9vApqHTQg&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.3')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/salats"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IXPiXp750bnWhQd635MOg3FleYjdwFMyfA&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.4')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/breads"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6L8EaP1oJcrUgiKv8HTOQFIPRPPSFw-joTQ&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.5')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/deserts"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46tgl-lSMBEAJXXiQPrqmQG6EZtbmO5_lQA&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.6')}</h1>
      </div>
      </Link>
      
      <Link to={"/home/drinks"}>
      <div className='w-[280px] h-[220px] bg-white shadow-lg rounded-xl text-center flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl'>
        <img className='w-[220px] h-[160px] rounded-lg object-cover border border-gray-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Xe8coVDFY-RohbjvVohOQ3ouBEAXT9AwRQ&s" alt="" />
        <h1 className='font-bold text-xl text-gray-800 mt-2'>{t('Filter.7')}</h1>
      </div>
      </Link>
    </div>
  )
}

export default Home2
