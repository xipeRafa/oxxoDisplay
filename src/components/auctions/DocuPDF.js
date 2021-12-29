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
{' '}{' '} Asesor {' '}{' '}{' '}{' '}{' '} Precio {' '}{' '}{' '} {' '}tienda
          </Text>

          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[0]} {' '}{precio[0]} {' '}{tienda[0]}
          </Text>
          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[1]} {' '}{precio[1]} {' '} {tienda[1]}
          </Text>
          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[2]}{' '}  {precio[2]} {' '} {tienda[2]}
          </Text>

          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[3]} {' '} {precio[3]}{' '} {tienda[3]}
          </Text>
          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[4]}{' '}  {precio[4]} {' '}{tienda[4]}
          </Text>
          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[5]} {' '} {precio[5]}{' '} {tienda[5]}
          </Text>
          <Text style={{ color: "#000", fontSize: "12px",borderBottom:'1px solid black',padding:'10px'}}>
            {asesor[6]} {' '} {precio[6]} {' '}{tienda[6]}
          </Text>

          <Text style={{ color: "#000", fontSize: "12px"}}>Total:{' '} ${ t}</Text>
         
         












        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
