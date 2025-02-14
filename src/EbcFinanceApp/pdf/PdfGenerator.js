import React, { useRef, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./pdfstyle.css";
import { useNavigate } from "react-router-dom";

export default function PdfGenerator({
  incomes,
  form,
  expenses,
  electricalExpenses,
  counterExpenses,
  buildingExpenses,
  setDisplay,
}) {
  const contentRef = useRef(); // Reference for the content to be captured
  const incomeRef = useRef(); // Reference for the income
  const currentDate = new Date("01/01/2025");
  const navigate = useNavigate();
  let currentMonthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
  });
  // console.log(currentMonthName);

  const generatePDF = async () => {
    const content = contentRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); // Create a new A4 PDF
    const imgWidth = 190; // Adjust for margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`Ebc Financial Report for ${form.month}-- page2`); // Download the PDF
  };

  const generateIncomeReport = async () => {
    const content = incomeRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); // Create a new A4 PDF
    const imgWidth = 190; // Adjust for margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`Ebc Financial Report for ${form.month} --page 1`);
  };
  //  console.log(incomes)

  const downloadPdf = () => {
    generatePDF();
    generateIncomeReport();
  };

  return (
    <main className="document">
      <span
        onClick={() => {
          setDisplay("hide");
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

      <div
        ref={contentRef}
        className=" main bg-white p-4 border rounded shadow-md"
      >
        <section
          ref={incomeRef}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div style={{display:'flex',
            flexDirection:'column',alignItems:'center',marginBottom:'10px'
          }}>
            <h2 className="document-title text-xl font-bold">{form.title}</h2>
            <h2 className="document-title">Presented by {form.name}</h2>
          </div>

          <section className="section-cx">
            <h2>Income</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ width: "60%" }}>Description</h3>
              <hr></hr>
              <h3>Amount (N)</h3>
            </div>
            <hr />
            {incomes?.map((income) => (
              <div key={income?.id} className="pdf-income-item">
                <h3>{income?.incomeSource}</h3>
                <p>{income?.amount}</p>
              </div>
            ))}
          </section>
        </section>
        {/* <h2 className="document-title text-xl font-bold">{form.title}</h2>
        <section className="section-cx">
          <h2>Income</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ width: "60%" }}>Description</h3>
            <hr></hr>
            <h3>Amount (N)</h3>
          </div>
          <hr />
          {incomes?.map((income) => (
            <div key={income?.id} className="pdf-income-item">
              <h3>{income?.incomeSource}</h3>
              <p>{income?.amount}</p>
            </div>
          ))}
        </section> */}

        <section className="section-cx">
          <h2>Electrical Department Expenses</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ width: "60%" }}>Description</h3>
            <hr></hr>
            <h3>Amount (N)</h3>
          </div>
          <hr />
          {electricalExpenses?.map((item) => (
            <div key={item?.id} className="pdf-income-item">
              <h3>{item?.desc}</h3>
              <p>{item?.amount}</p>
            </div>
          ))}
        </section>

        <section className="section-cx">
          <h2>Building Committee Expenses</h2>
          {buildingExpenses?.map((item) => (
            <div key={item?.id} className="pdf-income-item">
              <h3>{item?.desc}</h3>
              <p>{item?.amount}</p>
            </div>
          ))}
        </section>

        <section className="section-cx">
          <h2>Counter Committee Expenses</h2>
          {counterExpenses?.map((item) => (
            <div key={item?.id} className="pdf-income-item">
              <h3>{item?.desc}</h3>
              <p>{item?.amount}</p>
            </div>
          ))}
        </section>
      </div>

      <button onClick={downloadPdf} className="pdf-download-btn">
        Download PDF
      </button>
    </main>
  );
}
