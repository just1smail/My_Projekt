import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getId, deleteData } from "../../reducers/storeList/storeListSlice";
import { useTranslation } from "react-i18next";

const Basket = () => {
  
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

  const data2 = useSelector((store) => store.storeList.data2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getId());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const totalPrice = data2?.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r to-purple-100 min-h-screen">
      <div className="w-[100%] flex gap-[20px]">
        {data2?.map((el) => (
          <div
            key={el.id}
            className="p-6 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-48 object-cover rounded-2xl mb-4"
              src={el.img}
              alt={el.translationKey}
            />
            <h1 className="text-xl font-semibold mb-2 text-gray-900">
              {t(el.translationKey)}
            </h1>
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              {el.price} c.
            </h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
              onClick={() => handleDelete(el.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {t("TotalPrice.1")}: {totalPrice} c.
        </h2>
      </div>
    </div>
  );
};

export default Basket;
