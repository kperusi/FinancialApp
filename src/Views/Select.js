import React from "react";
import { useSelector } from "react-redux";
import {
  getSelectQuery,
  selectToggleHandler,
  setSelectValue,
} from "../Store/dataSlice";
import { useDispatch } from "react-redux";

function Select() {
  const selectData = useSelector((state) => state.data.selectData);
  const toggle = useSelector((state) => state.data.toggle);
  const selecttoggle = useSelector((state) => state.data.selectToggle);
  const themeMode = useSelector((state) => state.data.themeMode);
  const selectValue = useSelector((state) => state.data.selectValue);
  const dispatch = useDispatch();

  // console.log(selectValue);
  console.log(selecttoggle);

  return (
    <main style={{ display: "flex", alignItems:'center', }}>
      <section
        className={`label p-1 flex-rw hover  ${
          toggle
            ? themeMode.lightTheme.lightThemeElement
            : themeMode.darkTheme.darkThemeElement
        }`}
        onClick={() => {
          dispatch(selectToggleHandler('open'));
        }}
      >
        <p style={{ minWidth: "100px" }}> {selectValue}</p>
      </section>
      <section>
        <span className="hover" onClick={() => dispatch(selectToggleHandler())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-3 h-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </section>

      <section>
        <span className="hover" onClick={() => dispatch(getSelectQuery('Filter by Region'))}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
        </span>
      </section>

      <section
        className={` ${selecttoggle} select p-1 p-lr-2 flex-col m-t-1  ${
          toggle
            ? themeMode.lightTheme.lightThemeElement
            : themeMode.darkTheme.darkThemeElement
        }`}
      >
        <button
          className="hover"
          value="Africa"
          onClick={(e) => {
            dispatch(getSelectQuery(e.target.value));
            
          }}
        >
          African
        </button>
        <button
          className="hover"
          value="Americas"
          onClick={(e) => {
            dispatch(getSelectQuery(e.target.value));
          }}
        >
          America
        </button>
        <button
          className="hover"
          value="Asia"
          onClick={(e) => {
            dispatch(getSelectQuery(e.target.value));
          }}
        >
          Asia
        </button>
        <button
          className="hover"
          value="Europe"
          onClick={(e) => {
            dispatch(getSelectQuery(e.target.value));
          }}
        >
          Europe
        </button>
        <button
          className="hover"
          value="Oceania"
          onClick={(e) => {
            dispatch(getSelectQuery(e.target.value));
          }}
        >
          Oceania
        </button>
      </section>
    </main>
  );
}

export default Select;
