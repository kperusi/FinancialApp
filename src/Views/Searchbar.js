import React from "react";
import "../Styles/main.css";
import "../Styles/paddings.css";
import "../Styles/margins.css";
import { useSelector } from "react-redux";
import { getSearchQuery, setMouseEnter, setMouseLeave } from "../Store/dataSlice";
import { useDispatch } from "react-redux";

function Searchbar() {
  const toggle = useSelector((state) => state.data.toggle);
  const themeMode = useSelector((state) => state.data.themeMode);
  const searchQuery = useSelector((state) => state.data.searchQuery);
  const selectData =  useSelector((state)=>state.data.selectData)
  const search = useSelector((state) => state.data.search);
  const dispatch = useDispatch();
  // console.log(searchData);
  // console.log(search);

  const val=(e)=>{
    e.preventDefault();
    return e.target.value
  }

  return (
    <div
      className={`p-1 flex-rw gap-1 w-10 b-rx-1 ${
        toggle
          ? themeMode.lightTheme.lightThemeElement
          : themeMode.darkTheme.darkThemeElement
      }`}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-2 h-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        onInput={(e) => {
          dispatch(getSearchQuery(val(e)));
        }}

        onMouseEnter={()=>{dispatch(setMouseEnter())}}
        onMouseLeave={()=>{dispatch(setMouseLeave())}}
        className="search-input"
        type="text "
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Searchbar;
