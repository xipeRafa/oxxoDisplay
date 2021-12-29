import React from "react";
import { Document, Page, Text, View} from "@react-pdf/renderer";

const DocuPDF = ({ poema }) => {

      let tienda = poema.map(el => el?.tienda)

  return (
    <Document>
      <Page
        size="A4"
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
          }}>








          <Text style={{ color: "#000", fontSize: "12px" }}> 
            {tienda}
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
