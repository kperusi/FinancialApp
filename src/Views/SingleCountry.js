import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Styles/btnstyle.css";
function SingleCountry() {
  const navigate = useNavigate();
  const param = useParams();
  const countrydata = useSelector((state) => state.data.countryData);
  const themeMode = useSelector((state) => state.data.themeMode);
  const toggle = useSelector((state) => state.data.toggle);

  const removeSpace = (value) => {
    return value.replace(/\s/g,"");
  };
// console.log(countrydata.name)
// countrydata.forEach(element => {
//   console.log(element.alpha3Code)
  
// });

console.log(param.name)
  const listItem = countrydata.map(
    (country, i) =>
      removeSpace(country.name) === param.name && (
        <main
          key={i}
          className={`flex-col ${
            toggle
              ? themeMode.lightTheme.lightThemeBg
              : themeMode.darkTheme.darkThemeBg
          }`}
          role="main"
        >
          <main className="flex-rw gap-1">
            <div className=" flex-rw a-ct j-ct w-8 h-8">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className=""
                width="400"
                height="300"
              />
            </div>

            <section className="flex-col m-l-a w-9">
              <h1 className="f-3">{country.name}</h1>

              <div className="flex-rw m-t-2">
                <div className="flex-col">
                  <div className="flex-rw gap-2">
                    <p>Native Name:</p>
                    <p className="f-w-4 f-f-light">{country.nativeName}</p>
                  </div>

                  <div className="flex-rw gap-2">
                    <p>Population:</p>
                    <p className="f-w-4 f-f-light">{country.population}</p>
                  </div>

                  <div className="flex-rw gap-2">
                    <p>Region:</p>
                    <p className="f-w-4 f-f-light">{country.region}</p>
                  </div>

                  <div className="flex-rw gap-2">
                    <p>Sub Region:</p>
                    <p className="f-w-4 f-f-light">{country.subregion}</p>
                  </div>

                  <div className="flex-rw gap-2">
                    <p>Capital:</p>
                    <p className="f-w-4 f-f-light">{country.capital}</p>
                  </div>
                </div>

                <div className="flex-col m-l-a">
                  <div className="flex-rw gap-2">
                    <p>Top Level Domain:</p>
                    <p className="f-w-4 f-f-light">{country.topLevelDomain}</p>
                  </div>

                  {country.currencies&&<div className="flex-rw gap-2">
                    <p>Currencies:</p>
                    <p className="f-w-4 f-f-light">
                      {country.currencies.map((each, index) => (
                        <span key={index}>{each.code}</span>
                      ))}
                    </p>
                  </div>}

                  <div className="flex-rw gap-2">
                    <p>Languages:</p>
                    {country.languages.map((each, index) => (
                      <p className="f-w-4 f-f-light" key={index}>{each.name}</p>
                    ))}
                  </div>
                </div>
              </div>

              
              {country.borders && <div className="flex-rw m-t-4 ">
                <p>Border Countries:</p>

                <div className="flex-rw gap-2 wrap m-l-1">
                  {country.borders.map((eachBorderName, i) => (
                    <button 
                    onClick={()=>{navigate(`/bordercountry/${eachBorderName}`)}}
                    className="border-btn hover" key={i}>{eachBorderName}</button>
                  ))}
                </div> 

                
              </div> }
              
            </section>
          </main>
        </main>
      )
  );

  return (
    <main
  
      className={`m-t-4 p-lr-1 h-max ${
        toggle
          ? themeMode.lightTheme.lightThemeBg
          : themeMode.darkTheme.darkThemeBg
      }`}
    >
      
      <button
        className="hover single-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-2 h-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </button>
      <section className=" m-t-4">{listItem} </section>
      <Outlet/>
    </main>
  );
}

export default SingleCountry;
