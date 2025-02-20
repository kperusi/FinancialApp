import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  topSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  mainTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    // marginBottom: 20,
    // textAlign: "center",
  },
  subTitle:{
display:'flex',
justifyContent:'space-between',
borderBottom: '1px solid',
  },
});

const MyDocument = ({
  incomes,
  form,
  expenses,
  electricalExpenses,
  counterExpenses,
  buildingExpenses,
  mediaExpenses,
  soundExpenses,
  transportExpenses,
  publicityExpenses,
  musicExpenses,
  sanitationExpenses,
  healthExpenses,
  finance_stewardships,
  decorationExpenses,
  generatorExpenses,
  dues,
  departmentExpenses,
  totalIncome,
  totalExpenses,
  totalBalance,
  setDisplay,
  // buildingExpenses,
  handleSetDisplay,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
   

      <View style={styles.mainTitle}>
        <Text>{form?.title}</Text>
      </View>

      <View style={styles.topSection}>
        <Text style={styles.title}>Income</Text>
        <View style={styles.subTitle}>
          <Text>Description</Text>
          <Text>Amount (N)</Text>
        </View>

        {incomes?.map((item) => (
          <View key={item.id} style={styles.section}>
            <Text>{item.incomeSource}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.topSection}>
        <Text style={styles.title}>Electrical Expenses</Text>
        <View style={styles.subTitle}>
          <Text>Description</Text>

          <Text>Amount (N)</Text>
        </View>

        {electricalExpenses?.map((item) => (
          <View key={item?.id} style={styles.section}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text style={styles.title}>Building  Expenses</Text>
        <View style={styles.subTitle}>
          <Text>Description</Text>

          <Text>Amount (N)</Text>
        </View>
        {buildingExpenses?.map((item) => (
          <View key={item?.id} style={styles.section}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text style={{ fontSize: "1.4em" }}>Counter Expenses</Text>
        {counterExpenses?.map((item) => (
          <View key={item?.id} style={styles.section}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>
      {mediaExpenses.length > 0 && (
        <View>
          <Text style={{ fontSize: "1.4em" }}>Media Expenses</Text>
          <View style={styles.subTitle}>
          <Text>Description</Text>
          <Text>Amount (N)</Text>
        </View>
          {mediaExpenses?.map((item) => (
            <View key={item?.id} style={styles.section}>
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>
      )}

      {soundExpenses.length > 0 && (
        <View>
          <Text style={{ fontSize: "1.4em" }}>Sound Expenses</Text>
          <View style={styles.subTitle}>
          <Text>Description</Text>
          <Text>Amount (N)</Text>
        </View>
          {soundExpenses?.map((item) => (
            <View key={item?.id} style={styles.section}>
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>
      )}

      {transportExpenses.length > 0 && (
        <View>
          <Text style={{ fontSize: "1.4em" }}>Transportation Expenses</Text>
          <View style={styles.subTitle}>
          <Text>Description</Text>

          <Text>Amount (N)</Text>
        </View>
          {transportExpenses?.map((item) => (
            <View key={item?.id} style={styles.section}>
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default MyDocument;
