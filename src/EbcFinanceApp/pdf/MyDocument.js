import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column", 
    backgroundColor: "lightblue",
    // padding: 10,
    
  },
  topSection:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',

    // border: '1px solid black',

  },
  section: {
    display:'flex',
    flexDirection:'row',
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
    justifyContent:'space-between',
  
   
  },
  mainTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:'center',
    border:'solid'
  },
  title: {
    fontSize: 24,
    // marginBottom: 20,
    // textAlign: "center",
  },
});
const MyDocument = ({
  income,
  setDisplay,
  form,
  expenses,
  electricalExpenses,
  counterExpenses,
  buildingExpenses,
  handleSetDisplay,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View  style={styles.section}
        onClick={() => {
          handleSetDisplay()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="darkblue"
        >
          <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
        </svg>
      </View>

      <View style={styles.mainTitle}>
        <Text >{form?.title}</Text>
      </View>

      <View style={styles.topSection} >
        <Text style={styles.title}>Income</Text>

        {income?.map((item) => (
          <View key={item.id} style={styles.section}>
            <Text>{item.incomeSource}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.topSection}>
        <Text style={styles.title}>Electrical Department Expenses</Text>
        <View>
          <Text>Description</Text>
          {/* <hr></hr> */}
          <Text>Amount (N)</Text>
        </View>
        {/* <hr /> */}
        {electricalExpenses?.map((item) => (
          <View key={item?.id} style={styles.section}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text style={styles.title}>Building Committee Expenses</Text>
        {buildingExpenses?.map((item) => (
          <View key={item?.id} style={styles.section}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text style={{ fontSize: "1.4em" }}>Counter Committee Expenses</Text>
        {counterExpenses?.map((item) => (
          <View key={item?.id}>
            <Text>{item?.desc}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
