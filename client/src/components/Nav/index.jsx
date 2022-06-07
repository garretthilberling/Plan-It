import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CarryOutTwoTone, HomeTwoTone } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import { setTwoToneColor } from '@ant-design/icons';

setTwoToneColor('#D1788F');

const Nav = ({ folderTitle }) => {
  let location = useLocation();
  return (
    <div className="shrink-0 mt-auto md:hidden sticky bottom-0 bg-bubblegum-300 py-1 flex justify-center items-center">
      <div className="mx-auto">
        <Link to="/">
          <HomeTwoTone className="mobile-btn" style={{color: '#fdf7f3'}}/>
        </Link>
      </div>
      <Link className="mx-auto" to={location.pathname.includes('/folder') ? `/aspire` : '/'} >
        <div className="bg-cream-100 hover:bg-cream-200 transition-all ease-in-out duration-300 rounded-full cursor-pointer new-aspiration-btn">
          <FontAwesomeIcon
            className="new-aspiration text-bubblegum-500"
            icon={solid("earth-europe")}
          />
        </div>
      </Link>
      <div className="mx-auto">
        <Link to="/calendar">
          <CarryOutTwoTone className="mobile-btn" style={{color: '#fdf7f3'}}/>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
