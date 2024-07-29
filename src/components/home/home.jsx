import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link, Outlet } from "react-router-dom";
import slider from '@/assets/slider_1706531930.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../layout/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";


const Home = () => {


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
    <div>

    <div className="w-[93%] m-auto h-[300px]">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide style={{backgroundImage:`url(${slider})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/036/808/709/non_2x/ai-generated-many-plates-of-easter-eggs-carrots-ham-free-photo.jpg)", backgroundPosition:"center", backgroundSize:"cover"}}>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url(https://images2.alphacoders.com/104/1042013.jpg)", backgroundPosition:"center", backgroundSize:"cover"}}>
        </SwiperSlide>

      </Swiper>
    </div>

      <div className="w-[90%] m-auto mt-[50px] justify-around flex">
      <Box
  sx={{
    width: "20%",
    height: "480px",
    bgcolor: "#ffffff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    '&:hover': {
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  }}
>
  <nav aria-label="main categories">
    <List sx={{ padding: 0 }}>
      {[
        { path: '/home/sups', text: t("Filter.1") },
        { path: '/home/garnirs', text: t("Filter.2") },
        { path: '/home/breakfast', text: t("Filter.3") },
        { path: '/home/salats', text: t("Filter.4") },
        { path: '/home/breads', text: t("Filter.5") },
        { path: '/home/deserts', text: t("Filter.6") },
        { path: '/home/drinks', text: t("Filter.7") },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.path} style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "10px",
                  '&:hover': {
                    bgcolor: "#ff9800",
                    color: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "#333" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          {index < 6 && <Divider sx={{ my: 1 }} />}
        </React.Fragment>
      ))}
    </List>
  </nav>
</Box>


        <div className="w-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
