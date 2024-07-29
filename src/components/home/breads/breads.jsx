import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../reducers/dataList/dataListSlice';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { postData } from '../../../reducers/storeList/storeListSlice';
import { useTranslation } from 'react-i18next';

const Breads = () => {

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

  const data = useSelector((store) => store.dataList.data);

  const search = useSelector((store) => store.dataList.search)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const filteredBreads = data.breads?.filter((el) => el.translateKey.includes(search)) || [];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '10px', justifyContent: 'space-around' }}>
      {filteredBreads.map((el) => (
        <Box
        key={el.id}
        sx={{ 
          width: '240px', 
          bgcolor: '#fff', 
          borderRadius: '20px', 
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)', 
          padding: '15px', 
          textAlign: 'center', 
          transition: 'transform 0.3s, box-shadow 0.3s, background 0.3s',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #ff9800, #ff5722)',
            '& .overlay': {
              opacity: 0.8
            }
          }
        }}
        >
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '20px',
            transition: 'opacity 0.3s',
            zIndex: 1,
            opacity: 0,
          }}
          />
          <Link to= {"/" + el.id}>
        <img src={el.img} alt={el.name} style={{ width: '100%', height: '150px', borderRadius: '20px', objectFit: 'cover', zIndex: 0 }} />
        <h3 style={{ margin: '15px 0', fontSize: '18px', color: '#ff5722', zIndex: 2, position: 'relative', backgroundColor:"white", borderRadius:"30px", padding:"10px"}}>{t(el.translateKey)}</h3>
        <p style={{ width:"80px", margin: '15px 0', marginLeft:"65px" , fontSize:"18px", color: '#ff5722', zIndex: 2, position: 'relative', backgroundColor:"white", borderRadius:"30px", padding:"10px" }}>{el.price} с.</p>
        </Link>
        <button onClick={() => postData(el)} style={{ 
          padding: '10px 20px', 
          borderRadius: '25px', 
          background: '#fff', 
          color: '#ff5722', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background 0.3s, color 0.3s',
          zIndex: 2,
          position: 'relative',
          '&:hover': {
            background: '#ff5722',
            color: '#fff'
          }
        }}>Купить</button>
      </Box>
    ))}
  </Box>
  )
}

export default Breads