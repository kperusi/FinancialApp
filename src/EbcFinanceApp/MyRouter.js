import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./homepage/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Content from "./dashboard/Dashboard";
import "../Styles/main.css";
import Page from "./pages/Page";
import Dashboard from "./dashboard/Dashboard";
import Income from "./income/Income";
import Expenses from "./expenses/Expenses";
import TransactionLayout from "./transaction/TransactionLayout";
import AddIncome from "./transaction/AddIncome";
import AddExpenses from "./transaction/AddExpenses";
import SingleIncome from "./singleincome/SingleIncome";
import Report from "./report/Report";
export default function MyRouter() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebcfinance-register" element={<Register />} />
        <Route path="/ebcfinance-login" element={<Login />} />
        <Route path="/ebcfinance/views" element={<Page />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
        <Route
          path="/ebcfinance/addtransactions"
          element={<TransactionLayout />}
        >
          <Route index element={<AddIncome />} />
          <Route path="addincome" element={<AddIncome />} />
          <Route path="addexpenses" element={<AddExpenses />} />
        </Route>
        <Route path='/ebcfinance/income/:id' element={<SingleIncome/>}/>
        <Route path='/ebcfinance/editingincome/:id' element={<AddIncome/>}/>
        <Route path='/ebcfinance/expense/:id' element={<SingleIncome/>}/>
        <Route path='/ebcfinance/editingexpense/:id' element={<AddExpenses/>}/>
        <Route path='/ebcfinance/generatereport' element={<Report/>}/>
      </Routes>
    </div>
  );
}
