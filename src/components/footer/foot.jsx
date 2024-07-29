import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-[50px]">
        <div className="md:flex md:justify-between flex gap-[900px] lg:gap-[500px] md:gap-[400px] sm:gap-[300px]">
          <div className="md:flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">{t("Category.1")}</h2>
            <div className="flex flex-col gap-4">
              <Link
                to={"/home/sups"}
                className="text-black font-medium "
              >
                {t("Filter.1")}
              </Link>
              <Link
                to={"/home/garnirs"}
                className="text-black font-medium "
              >
                {t("Filter.2")}
              </Link>
              <Link
                to={"/home/breakfast"}
                className="text-black font-medium "
              >
                {t("Filter.3")}
              </Link>
              <Link
                to={"/home/salats"}
                className="text-black font-medium "
              >
                {t("Filter.4")}
              </Link>
              <Link
                to={"/home/breads"}
                className="text-black font-medium "
              >
                {t("Filter.5")}
              </Link>
              <Link
                to={"/home/deserts"}
                className="text-black font-medium "
              >
                {t("Filter.6")}
              </Link>
              <Link
                to={"/home/drinks"}
                className="text-black font-medium "
              >
                {t("Filter.7")}
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">О Нас</h2>
            <p className="text-[16px] font-[500]">Наше Местоположение :</p>
            <p>Больница 1-советский рядом со стадионом на против Лабаратории</p>
            <h2 className="text-2xl font-bold mb-4 mt-5">Как связаться с нами</h2>
            <p>Номер +992915052299</p>
          </div>
        </div>
        <div className="mt-8 border-t border-black pt-8 flex justify-between items-center bg-yellow-400 p-5">
          <p className="text-center text-black">
            © 2024 Ошхонаи <span className="text-white">Парҳези</span>. Все
            права защищены.
          </p>
          <p className="text-black">Разработан в Soft Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
