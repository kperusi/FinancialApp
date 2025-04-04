import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Form } from "react-router-dom";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    flexGrow: 1,
    gap: 20,
    fontSize:25,
    fontFamily: "Helvetica",
  },
  subSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize:20,
    
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap:4,
  },
  mainTitle: {
    display: "flex",
    flexDirection: "column",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 1.2,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
    marginBottom: 5,
    marginTop: 20,
    fontSize: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 1.2,
    textAlign:'center',
    fontWeight:900,
  },
  backBtn:{

  },
});

const MyDocument = ({
 
  chunks,
}) => (
  <Document>
  
    {/* <View style={styles.backBtn}> <span
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
      </span></View> */}
    {chunks.map((chunk) => (
      <Page size="A4" style={styles.page}>
        <View>
          {chunk?.map((each, i) => (
            <View key={i} style={styles.section}>
              <Text style={styles.heading}>{each.heading}</Text>
              {each.presentedBy && (
                <Text style={styles.heading}>
                  Presented By: {each.presentedBy}
                </Text>
              )}
              {each.month && (
                <Text style={styles.heading}>
                  For the Month of {each.month}{" "}
                  {new Date(Date.now()).getFullYear()}
                </Text>
              )}

              {each.name && <Text style={styles.subTitle}>{each.name}</Text>}

              {each?.items.map((each, i) => (
                <View key={i} style={styles.subSection}>
                 
                  <Text> {each.incomeSource || each.desc}</Text>
                  <Text>{each.amount}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
       
      </Page>
    ))}
  </Document>
);

export default MyDocument;
