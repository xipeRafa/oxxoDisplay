import React from "react";
import { Document, Page, Text, View} from "@react-pdf/renderer";

const DocuPDF = ({ poema }) => {

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}>








          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {poema.map(el => el.tienda)}
          </Text>


         {/* <Text>Por {poema.length > 0 ? 'true' : "..."}</Text>

          <Text style={{color: "gray", fontStyle: "italic", fontSize: "10px"}}>
            {lorem}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: "22px" }}>
            {poema.length > 0 ? 'true' : null}
          </Text> */}










        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
