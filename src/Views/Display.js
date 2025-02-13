import React from "react";
import { useSelector } from "react-redux";
import Countrycard from "./Countrycard";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";

function Display() {
  const countrydata = useSelector((state) => state.data.countryData);
  const themeMode = useSelector((state) => state.data.themeMode);
  const toggle = useSelector((state) => state.data.toggle);
  const searchData = useSelector((state) => state.data.searchData);
  const searchQuery = useSelector((state) => state.data.searchQuery);
  const selectValue = useSelector((state)=>state.data.selectValue)
  const maindata = useSelector((state)=>state.data.mainData)
console.log(maindata)
  const navigate = useNavigate()

  const listCountry = maindata.map((country, index) => (
    <div key={index} className="">
      <Countrycard
        name={country.name}
        religion={country.region}
        population={country.population}
        flag={country.flags.svg}
        capital={country.capital}
      />
    </div>
  ));

  if (searchQuery.length > 0 ) {
    const searchCountry = searchData.map((country, i) => (
      <div key={i}>
        <Countrycard
          name={country.name}
          religion={country.region}
          population={country.population}
          flag={country.flag}
          capital={country.capital}
        />
      </div>
    ));

    return (
      <main
        className={`search-main flex-rw wrap j-ct gap-1 space-bt p-lr-1 ${
          toggle
            ? themeMode.lightTheme.lightThemeBg
            : themeMode.darkTheme.darkThemeBg
        }`}
      >
        <section className="search-cx">{searchCountry}</section>

        <div className="cancel">
          <span className="hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </main>
    );
  } else
    return (
      <div
        className={`flex-rw wrap j-ct gap-1 space-bt p-lr-1 ${
          toggle
            ? themeMode.lightTheme.lightThemeBg
            : themeMode.darkTheme.darkThemeBg
        }`}
      >
        {listCountry}
      </div>
    );
}

export default Display;
