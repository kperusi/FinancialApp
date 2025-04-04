import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    countryData: [],
    mainData: [],
    themeMode: {
      lightTheme: {
        sun: "sun",
        lightThemeBg: "light-mode-bg",
        lightThemeText: "light-mode-text",
        lightThemeInput: "light-mode-input",
        lightThemeElement: "light-mode-element",
      },
      darkTheme: {
        moon: "moons",
        darkThemeBg: "dark-mode-bg",
        darkThemeText: "dark-mode-text",
        darkThemeInput: "dark-mode-input",
        darkThemeElement: "dark-mode-element",
      },
    },
    balanceForward:[{
      year:'2024',
      amount:1069563.1
    }],
    month:[{}],

    toggle: false,

    selectToggle: "close",
    search: false,
    searchQuery: "",
    searchData: [],
    selectValue: "Filter by Region",
    selectData: [],
    loading: false,
  },

  reducers: {
    setCountryData2: (state, action) => {
      state.countryData = action.payload;
      state.mainData = state.countryData;
    },

    toggleChangeHandler: (state) => {
     
      if (state.toggle === true) {
        state.toggle = false;
      } else if (state.toggle === false) {
        state.toggle = true;
      }

      localStorage.setItem("toggle", JSON.stringify(state.toggle));
    },

    selectToggleHandler: (state,action) => {
      state.selectToggle= action.payload
      // if (state.selectToggle === "close") {
      //   state.selectToggle = "open";
      // } else state.selectToggle = "close";
    },

    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;

      if (state.searchQuery !== "") {
        state.searchData = state.mainData.filter((country) => {
          return country.name
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase());
        });
      }
    },

    getSelectQuery: (state, action) => {
      state.selectValue = action.payload;
      if (state.selectValue !== "Filter by Region") {
        state.selectData = state.countryData.filter((country) => {
          return country.region === state.selectValue;
        });
      }
      if(state.selectValue==='Filter by Region'){
        state.mainData=state.countryData
      }
      else {
        state.mainData = state.selectData;
      }
      state.selectToggle='close'
      console.log('yess')
    },
    setMouseEnter: (state) => {
      console.log("mouse enter");
      state.search = true;
    },

    setMouseLeave: (state) => {
      // state.search=false
      //             if(state.searchQuery !== ""){
      //                 state.searchData=state.countryData.filter((country)=>{
      //                     return country.name===state.searchQuery})
      //             }
      // console.log(state.searchData)
    },
    setSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const {
  setMouseEnter,
  setMouseLeave,
  setCountryData2,
  toggleChangeHandler,
  selectToggleHandler,
  getSearchQuery,
  setSelectValue,
  getSelectQuery,
} = dataSlice.actions;

export default dataSlice.reducer;
