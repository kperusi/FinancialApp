import { useSelector } from "react-redux";
import "../Styles/main.css";
import "../Styles/paddings.css";
import { useNavigate } from "react-router-dom";

function Countrycard({ flag, name, population, religion, capital }) {
  const toggle = useSelector((state) => state.data.toggle);
  const themeMode = useSelector((state) => state.data.themeMode);
  const navigate = useNavigate()

const removeSpace = (namex)=>{
  return namex.replace(/\s/g,"")
}
// console.log(name)

  return (
    <main
    onClick={()=>{navigate(`homepage/${removeSpace(name)}`)}}
      className={`flex-col w-7 h-8 b-rx-1 hover  ${
        toggle
          ? themeMode.lightTheme.lightThemeBg
          : themeMode.darkTheme.darkThemeBg
      }`}
    >
      <section className="flex-rw a-ct">
        <img src={flag} alt={`${name} flag`} width='250' height='150' />
      </section>
      <section
        className={`flex-col p-lr-2 p-b-1 p-t-1 ${
          toggle
            ? themeMode.lightTheme.lightThemeElement
            : themeMode.darkTheme.darkThemeElement
        }`}
      >
        <h2>{name}</h2>
        <div className="flex-rw f-1 gap-2">
          <p className="">Population:</p>
          <p className="details f-w-4 ">{population}</p>
        </div>

        <div className="flex-rw f-1 gap-2">
          <p>Region: </p>
          <p className="details  f-w-4">{religion}</p>
        </div>
        <div className="flex-rw f-1 gap-2 ">
          <p>Capital:</p>
          <p className="details f-w-4">{capital}</p>
        </div>
      </section>
    </main>
  );
}

export default Countrycard;
