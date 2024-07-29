import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../reducers/dataList/dataListSlice";
import { destroyToken } from "../utils/token/token";
import { Logout, ShoppingCart } from "@mui/icons-material";
import logo from "@/assets/alu.png";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Footer from "@/components/footer/foot";

const Layout = () => {
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

  let navigate = useNavigate();

  function check() {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps?q=38.53882885492372,68.75135376431905",
      "_blank"
    );
  };

  const search = useSelector((store) => store.dataList.search);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[100%] m-auto p-4">
        <div className="w-[95%] h-[70px] m-auto flex justify-between items-center mb-4">
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[150px] h-[100px] rounded-[100px] mr-4 xl:w-[120px] xl:h-[70px]"
              />
              <h1 className="text-[30px] font-bold">
                Ошхонаи <span className="text-[yellow]">Парҳези</span>
              </h1>
            </div>
          </Link>
          <div className="flex justify-center">
            <Paper
              component="form"
              className="flex items-center w-[450px] p-2 shadow-md xl:w-[450px] lg:w-[350px] md:w-[250px] sm:hidden"
            >
              <InputBase
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="ml-1 flex-grow"
                placeholder={t("Search.placeholder")}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" className="p-2" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div className="flex gap-10 xl:gap-5">
            <div>
              <IconButton color="primary" onClick={handleAddressClick}>
                <LocationOnIcon />
              </IconButton>
            </div>

            <IconButton
              color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose(false);
                  TranslateClick("en");
                }}
              >
                EN
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose(false);
                  TranslateClick("ru");
                }}
              >
                RU
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose(false);
                  TranslateClick("tj");
                }}
              >
                TJ
              </MenuItem>
            </Menu>

            <Link to={"/basket"}>
              <IconButton color="secondary">
                <ShoppingCart />
              </IconButton>
            </Link>

            <IconButton
              onClick={() => {
                destroyToken();
                check();
              }}
              color="primary"
            >
              <Logout />
            </IconButton>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
