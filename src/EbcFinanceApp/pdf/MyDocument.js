import { Document, Page, View, Text,StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  }
});
const MyDocument = ({ income,setDisplay,form,
  expenses,
  electricalExpenses,
  counterExpenses,
  buildingExpenses,
handleSetDisplay
 }) => (


  <Document style={{display:'flex',flexDirection:'column',gap:'10px',}}>
    <Page size='A4' style={{display:'flex',flexDirection:'column',gap:'10px',width:'100%',padding:'20px'}}>
    <View style={{display:'flex',flexDirection:'column',}}
        onClick={() => {
          handleSetDisplay()
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
      </View>

      <View>
        <Text style={{alignItems:'center',textAlign:'center',fontSize:'1.4em', lineHeight:'1em'}}>{form?.title}</Text>
      </View>

      <View style={{display:'flex',flexDirection:'column',}}>
        <Text style={{fontSize:'1.4em'}}>Income</Text>

        {income?.map((item) => (
          <View key={item.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           
            <Text>{item.incomeSource}</Text>
            <Text>{item?.amount}</Text>
          </View>
        ))}
      </View>

      <View style={{display:'flex',flexDirection:'column'}} >
          <Text style={{fontSize:'1.4em'}}>Electrical Department Expenses</Text>
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <Text style={{ width: "60%" }}>Description</Text>
            <hr></hr>
            <Text>Amount (N)</Text>
          </View>
          <hr />
          {electricalExpenses?.map((item) => (
            <View key={item?.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>

        <View style={{display:'flex',flexDirection:'column'}}>
          <Text style={{fontSize:'1.4em'}}>Building Committee Expenses</Text>
          {buildingExpenses?.map((item) => (
            <View key={item?.id} style={{ display: "flex", justifyContent: "space-between" }} >
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>

        <View style={{display:'flex',flexDirection:'column'}}>
          <Text style={{fontSize:'1.4em'}}>Counter Committee Expenses</Text>
          {counterExpenses?.map((item) => (
            <View className="container" key={item?.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>{item?.desc}</Text>
              <Text>{item?.amount}</Text>
            </View>
          ))}
        </View>


    </Page>
  </Document>
);

export default MyDocument;
