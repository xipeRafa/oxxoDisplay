import React from "react";
import { Document, Page, Text, View} from "@react-pdf/renderer";

const DocuPDF = ({ poema }) => {

      let tienda = poema.filter(el => el !== undefined).map(el => el?.tienda)
      let asesor = poema.filter(el => el !== undefined).map(el => el?.asesor)
      let precio = poema.filter(el => el !== undefined).map(el => el?.precio)

      let t = poema.reduce((acc, curr) => acc + curr?.precio, 0)

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
            display: "flex"
          }}>






<Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
{' '}{' '} Asesor {' '}{' '}{' '} Precio {' '}{' '}{' '} tienda
          </Text>

       {poema.map((el, i)=>(
        <Text key={i} style={{fontSize: "10px",borderBottom:'1px solid black',padding:'8px'}}>
            {asesor[i]} {' '}{precio[i]} {' '}{tienda[i]}
          </Text>
       ))}
          

          <Text style={{ color: "#000", fontSize: "12px"}}>Total:{' '} ${ t}</Text>
         
         












        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
