import React, { useState, useEffect } from "react";
import PdfGenerator from "../pdf/PdfGenerator";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import "./reportstyle/reportstyles.css";
import { useNavigate } from "react-router-dom";
import MyDocument from "../pdf/MyDocument";

export default function Report() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpenses, setTotalExpenses] = useState();
  const [totalBalance, setTotalBalance] = useState();
  const [loginUserDetail, setLoginUserDetail] = useState();
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [user,setUser]=useState({});
  const [form, setForm] = useState({
    title:
      "Third Quarter Financial Report Presented to the Executive Members of Ebenezer Baptist Church, Enerhen",
    month: "",
    name:user?.displayName
    //  new Date(Date.now()).toLocaleDateString("en-US", { month: "long" }),
  });
  const [incomeByMonth, setIncomeByMonth] = useState([]);
  const [expensesByMonth, setExpensesByMonth] = useState([]);
  const [electricalExpenses, setElectricalExpenses] = useState([]);
  const [GeneratorExpenses, setGeneratorExpenses] = useState([]);
  const [soundExpenses, setSoundExpenses] = useState([]);
  const [buildingExpenses, setBuildingExpenses] = useState([]);
  const [counterExpenses, setCounterExpenses] = useState([]);
  const [mediaExpenses, setMediaExpenses] = useState([]);
  const [publicityExpenses, setPublicityExpenses] = useState([]);
  const [musicExpenses, setMusicExpenses] = useState([]);
  const [transportExpenses, setTransportExpenses] = useState([]);
  const [sanitationExpenses, setSanitationExpenses] = useState([]);
  const [departmentExpenses, setDepartmentExpenses] = useState([{}]);
 
  const [monthError, setMonthError] = useState("");
  const [nameError, setNameError] = useState('')
  const [display, setDisplay] = useState("hide");
  const navigate = useNavigate();

  const handleSetForm = (e) => {
    // e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "month") {
      setMonthError("");
    }
    if (e.target.name === "name") {
      setNameError("");
    }
  };

  useEffect(() => {
    const storedIncome = JSON.parse(localStorage.getItem("incomes")) || [];
    const storedExpense = JSON.parse(localStorage.getItem("expenses")) || [];
    const storedUser =
    JSON.parse(localStorage.getItem("ebcfinance-user")) || null;
  
    setIncomes(storedIncome);
    setExpenses(storedExpense);
    setUser(storedUser);

    

    const thisMonthIncome = incomes.filter(function (item) {
      return item.month === form.month;
    });
    setIncomeByMonth(thisMonthIncome);

    const thisMonthExpenses = expenses?.filter(function (item) {
      return item.month === form.month;
    });
    setExpensesByMonth(thisMonthExpenses);

    const totalExpenses = storedExpense.reduce(
      (sum, each) => sum + (each?.amount || 0),
      0
    );
    const totalIncome = storedIncome.reduce(
      (sum, each) => sum + (each?.amount || 0),
      0
    );
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    setTotalBalance(totalIncome - totalExpenses);
  }, [form.month]);

  const handlePreviewReport = () => {
    if (form.month === "" || form.name === "")  {
      setMonthError("Please select month");
      setNameError("Please Enter Your Name");
      return;
    }

   
    const filterExpensesByName = (name) =>
      expensesByMonth?.filter((item) => item?.expensesCategory === name);
    setElectricalExpenses(filterExpensesByName("Electrical Department"));
    setBuildingExpenses(filterExpensesByName("Building Committee")); //
    setCounterExpenses(filterExpensesByName("Counter Committee")); //

    setDepartmentExpenses({
      electricalExp: filterExpensesByName("Electrical Department"),
      buildingExpenses: filterExpensesByName("Building Committee"),
    });

    if (display === "hide") {
      setDisplay("show");
    } else {
      setDisplay("hide");
    }
  };
  const handleSetDisplay = () => {
    if (display === "hide") {
      setDisplay("show");
    } else if (display === "show") {
      setDisplay("hide");
    }
  };
  console.log(user);

  console.log(departmentExpenses);
  // console.log(display);
  return (
    <main className="main-report">
      <div style={{ display: "flex", gap: "50px", padding: "5px 10px" }}>
        <span
          onClick={() => {
            navigate("/ebcfinance/views");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#white"
          >
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
          </svg>
        </span>
        <h3>Report settings</h3>
      </div>

      <form>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <label htmlFor="month">Select Month</label>

          <select
            name="month"
            onChange={(e) => handleSetForm(e)}
            value={form.month}
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <p style={{ color: "red" }}>{monthError}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            name="name"
            placeholder="Presented by:Name"
            value={form.name}
            onInput={(e) => {
              handleSetForm(e);
            }}
          ></input>
           <p style={{ color: "red" }}>{nameError}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title">Enter Title</label>
          <textarea
            name="title"
            placeholder="Enter Title"
            value={form.title}
            onInput={(e) => {
              handleSetForm(e);
            }}
          ></textarea>
        </div>

   
      </form>

      <section className={`${display} pdf-preview-cx`}>
        <PdfGenerator
          incomes={incomeByMonth}
          form={form}
          expenses={expensesByMonth}
          electricalExpenses={electricalExpenses}
          buildingExpenses={buildingExpenses}
          counterExpenses={counterExpenses}
          setDisplay={setDisplay}
        />
        {/* <PDFViewer width='100%' height='100%'>
          <MyDocument
            counterExpenses={counterExpenses}
            buildingExpenses={buildingExpenses}
            electricalExpenses={electricalExpenses}
            income={incomeByMonth}
            form={form}
            setDisplay={setDisplay}
            handleSetDisplay={handleSetDisplay}
          />
        </PDFViewer> */}    
      </section>

      <button onClick={handlePreviewReport} className="pdf-preview-btn">
        Preview
      </button>
    
    </main>
  );
}
