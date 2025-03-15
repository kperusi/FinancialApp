import React, { useState, useEffect } from "react";
import PdfGenerator from "../pdf/PdfGenerator";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import "./reportstyle/reportstyles.css";
import { useNavigate } from "react-router-dom";
import MyDocument from "../pdf/MyDocument";
import PdfGenerator2 from "../pdf/PdfGenerator2";

export default function Report() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpenses, setTotalExpenses] = useState();
  const [totalBalance, setTotalBalance] = useState();
  const [loginUserDetail, setLoginUserDetail] = useState();
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    desc: "Monthly Financial Report Presented to the Executive Members of Ebenezer Baptist Church, Enerhen",
    month: "",
    name: "",
    //  new Date(Date.now()).toLocaleDateString("en-US", { month: "long" }),
  });
  const [incomeByMonth, setIncomeByMonth] = useState([]);
  const [expensesByMonth, setExpensesByMonth] = useState([]);
  const [electricalExpenses, setElectricalExpenses] = useState([]);
  const [soundExpenses, setSoundExpenses] = useState([]);
  const [buildingExpenses, setBuildingExpenses] = useState([]);
  const [counterExpenses, setCounterExpenses] = useState([]);
  const [mediaExpenses, setMediaExpenses] = useState([]);
  const [publicityExpenses, setPublicityExpenses] = useState([]);
  const [musicExpenses, setMusicExpenses] = useState([]);
  const [transportExpenses, setTransportExpenses] = useState([]);
  const [sanitationExpenses, setSanitationExpenses] = useState([]);
  const [salary,setSalary] = useState([]);
  const [cooperative,setCooperative]=useState([])
  const [generatorExpenses, setGeneratorExpenses] = useState([]);
  const [dues, setDues] = useState([]);
  const [assocationalDues, setAssocationalDues] = useState([]);
  const [conferenceDues, setConferenceDues] = useState([]);
  const [conventionDues, setConventionDues] = useState([]);
  const [otherExpenses, setOtherExpenses] = useState([]);
  const [finance_stewardships, setFinance_stewardships] = useState([]);
  const [social_warfare, setSocial_warfare] = useState([]);
  const [decorationExpenses, setDecorationExpenses] = useState([]);
  const [healthExpenses, setHealthExpenses] = useState([]);
  const [departmentExpenses, setDepartmentExpenses] = useState([]);
  const [totalIncomeByMonth, setTotalIncomeByMont]=useState()

  const [monthError, setMonthError] = useState("");
  const [nameError, setNameError] = useState("");
  const [display, setDisplay] = useState("hide");
  const navigate = useNavigate();
  const [numberItems, setNumberItems] = useState(0);
  const [chunks, setChunks] = useState([]);

  let allExpenses = [];
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
      const date = new Date(item.date)
      const month=date.toLocaleDateString("en-US", {
        month: "long",
      })
     
      return month === form.month;
    });
    setIncomeByMonth(thisMonthIncome);

    const thisMonthExpenses = expenses?.filter(function (item) {
      const date = new Date(item.date)
      const month=date.toLocaleDateString("en-US", {
        month: "long",
      })
     
      return month === form.month;
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
    setForm({ ...form, name: user?.displayName });
  }, [form.month]);

  const handlePreviewReport = () => {
    if (form.month === "") {
      setMonthError("Please select month");

      return;
    }

    if (form.name === "") {
      setForm({ ...form, name: user?.displayName });
    }

    const filterExpensesByName = (name) =>
      expensesByMonth?.filter((item) => item?.expensesCategory === name);
    setElectricalExpenses(filterExpensesByName("Electrical Department"));
    setBuildingExpenses(filterExpensesByName("Building Committee")); //
    setCounterExpenses(filterExpensesByName("Counter Committee")); //
    setMediaExpenses(filterExpensesByName("Media Department")); //
    setPublicityExpenses(filterExpensesByName("Publicity Committee")); //
    setMusicExpenses(filterExpensesByName("Music Department")); //
    setTransportExpenses(filterExpensesByName("Transport Committee")); //
    setSanitationExpenses(filterExpensesByName("Sanitation Committee")); //
    setSoundExpenses(filterExpensesByName("Sound Department")); //
    setHealthExpenses(filterExpensesByName("Health Department")); //
    setFinance_stewardships(
      filterExpensesByName("Finance/Stewardships Committee")
    ); //
    setSocial_warfare(filterExpensesByName("Social/Warfare Committee")); //
    setAssocationalDues(filterExpensesByName("Associational Dues"));
    setDecorationExpenses(filterExpensesByName("Decoration Committee")); //
    setGeneratorExpenses(filterExpensesByName("Generator Department")); //
   setSalary(filterExpensesByName("Salary Payment")); //
   setCooperative(filterExpensesByName('Cooperative Payment'))
   setOtherExpenses(filterExpensesByName('Others'))


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

  useEffect(() => {
    let itemCount = 0;
    allExpenses.push({
      presentedBy: form.name,
      heading: form.desc,
      month: form.month,
      items: [],
    });

    if (incomeByMonth.length > 0) {
      allExpenses.push({ heading: "", name: "Income", items: incomeByMonth });
      itemCount += incomeByMonth.length;
    }

    // console.log(mediaExpenses);
    if (electricalExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Electrical Expenses",
        items: electricalExpenses,
      });
      itemCount += electricalExpenses.length;
    }

    if (transportExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Transportation Expenses",
        items: transportExpenses,
      });
      itemCount += transportExpenses.length;
    }

    if (mediaExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Media Expenses",
        items: mediaExpenses,
      });
      itemCount += mediaExpenses.length;
    }
    if (soundExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Sound Expenses",
        items: soundExpenses,
      });
      itemCount += soundExpenses.length;
    }
    if (counterExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Counter Expenses",
        items: counterExpenses,
      });
      itemCount += counterExpenses.length;
    }
    if (healthExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Health Expenses",
        items: healthExpenses,
      });
      itemCount += healthExpenses.length;
    }
    if (buildingExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Building Expenses",
        items: buildingExpenses,
      });
      itemCount += buildingExpenses.length;
    }
    if (publicityExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Publicity Expenses",
        items: publicityExpenses,
      });
      itemCount += publicityExpenses.length;
    }
    if (assocationalDues.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Associational Dues Paid",
        items: assocationalDues,
      });
      itemCount += assocationalDues.length;
    }
    if (conferenceDues.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Conference Dues Paid",
        items: conferenceDues,
      });
      itemCount += conferenceDues.length;
    }
    if (conventionDues.length !== 0) {
      allExpenses.push({
        heading: "",
        name:"conventionDues Dues Paid",
        items: conventionDues,
      });
      itemCount += conventionDues.length;
    }
    if (salary.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Salaries Payments",
        items: salary,
      });
      itemCount += salary.length;
    }
    if (cooperative.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Cooperative Payment",
        items: cooperative,
      });
      itemCount += cooperative.length;
    }
    if (decorationExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Decoration Expenses",
        items: decorationExpenses,
      });
      itemCount += decorationExpenses.length;
    }
    if (generatorExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Generator Expenses",
        items: generatorExpenses,
      });
      itemCount += generatorExpenses.length;
    }
    if (decorationExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Decoration Expenses",
        items: decorationExpenses,
      });
      itemCount += decorationExpenses.length;
    }
    if (musicExpenses.length !== 0) {
      allExpenses.push({
        heading: "",
        name: "Music Expenses",
        items: musicExpenses,
      });
      itemCount += musicExpenses.length;
    }

    allExpenses.push({
      name: "summary",
      items: [
        { desc: "Income", amount: totalIncome },
        { desc: "Expenses", amount: totalExpenses },
        { desc: "Total Balance", amount: totalBalance },
      ],
    });
    itemCount += 3;
    setDepartmentExpenses(allExpenses);
    setNumberItems(itemCount);
  }, [publicityExpenses]);

  useEffect(() => {
    const itemsPerPage = 6;
    const userChunks = [];
    for (let i = 0; i < numberItems; i += itemsPerPage) {
      userChunks.push(departmentExpenses.slice(i, i + itemsPerPage));
    }
    setChunks(userChunks);
  }, [departmentExpenses]);

  console.log(incomeByMonth);

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
            placeholder="Presented by"
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
            name="desc"
            placeholder="Enter Title"
            value={form.desc}
            onInput={(e) => {
              handleSetForm(e);
            }}
          ></textarea>
        </div>
      </form>

      <section className={`${display} pdf-preview-cx`}>
        {/* <PdfGenerator2
          incomes={incomeByMonth}
          form={form}
          departmentExpenses={departmentExpenses}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          totalBalance={totalBalance}
          setDisplay={setDisplay}
          handleSetDisplay={handleSetDisplay}
          numberItems={numberItems}
        /> */}

        {/* <PdfGenerator
          incomes={incomeByMonth}
          form={form}
          expenses={expensesByMonth}
          electricalExpenses={electricalExpenses}
          buildingExpenses={buildingExpenses}
          counterExpenses={counterExpenses}
          mediaExpenses={mediaExpenses}
          publicityExpenses={publicityExpenses}
          musicExpenses={musicExpenses}
          transportExpenses={transportExpenses}
          sanitationExpenses={sanitationExpenses}
          soundExpenses={soundExpenses}
          healthExpenses={healthExpenses}
          finance_stewardships={finance_stewardships}
          decorationExpenses={decorationExpenses}
          generatorExpenses={generatorExpenses}
          dues={dues}
          departmentExpenses={departmentExpenses}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          totalBalance={totalBalance}
          setDisplay={setDisplay}
        /> */}
      </section>

      <section className={`${display} pdf-preview-cx`}>
        <MyDocument
          incomes={incomeByMonth}
          form={form}
          departmentExpenses={departmentExpenses}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          totalBalance={totalBalance}
          setDisplay={setDisplay}
          handleSetDisplay={handleSetDisplay}
          numberItems={numberItems}
          chunks={chunks}
        />

        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
          <PDFDownloadLink
            className="pdf-download-btn"
            document={
              <MyDocument
                incomes={incomeByMonth}
                form={form}
                departmentExpenses={departmentExpenses}
                totalIncome={totalIncome}
                totalExpenses={totalExpenses}
                totalBalance={totalBalance}
                setDisplay={setDisplay}
                handleSetDisplay={handleSetDisplay}
                numberItems={numberItems}
                chunks={chunks}
              />
            }
            fileName={`ebc financial report ${form.month}`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "loading" : "Download Pdf"
            }
          </PDFDownloadLink>
          <button onClick={handleSetDisplay} className="pdf-download-back-btn">
            Back
          </button>
        </div>
      </section>

      <button onClick={handlePreviewReport} className="pdf-preview-btn">
        Preview
      </button>
    </main>
  );
}
