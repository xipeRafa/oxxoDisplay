import React, { useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { AuctionCard } from "./AuctionCard";
import { ProgressBar } from "./ProgressBar";
import { FilterContext } from "../../context/FilterContext";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Filters from "./Filters";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocuPDF from "./DocuPDF";

import "./picker.css";
import es from "date-fns/locale/es";
import Select from '../filters/Select';

registerLocale("es", es);

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { DB } = useContext(FilterContext);

  let admin = currentUser ? currentUser.email : false;

  let DBD;

    DBD = DB.sort((o1, o2) =>
      o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
    );
 

  /* ===================================== filter Date ==================== */
  const dateFocus = () => {
    setArr([]);
  };

  const [today2, setToday2] = useState();

  const [fecha, setFecha] = useState();
  const [arr, setArr] = useState([]);

  let l = arr.filter((el) => el).length;


  const onDate = (fecha) => {
    setFecha(fecha);

    let today = fecha?.getTime();
    let tomorrow = today + 86400000;

    let today2 = new Date(today).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });

    setToday2(today2);

    let ss = DB;

    let a = ss.map((el, i) => {
      if (el.duration > today && el.duration < tomorrow) {
        return el;
      }
    });
    setArr(a);
  };

  /* ===================================== filter Date END==================== */

  /* ===================================== filter Mail ==================== */

  const [mail, setMail] = useState();


  const handleMail = (e) => {
    setMail(e.target.value);
   /*  setArrRadio([]); */
  };


  const [n, setN] = useState();

  useEffect(() => {

    let sss = arr
      .filter((el) => el !== undefined)
      .map((el) => el.tienda === mail && el);

    setN(sss);
  }, [mail])

   
  

  /* ===================================== filter Mail END==================== */

  /* ===================================== Radio Filter ==================== */
  const [radio, setRadio] = useState();
  const [arrRadio, setArrRadio] = useState([]);

  const handlerRadio = (v) => {
    setRadio(v);
    setArrRadio([]);
    const toRadio = n?.filter((el) => el !== false);
    let r = toRadio;

    if (radio === "uno") {
      r = toRadio.filter((el) => el.distrito !== 'uno');
      setArrRadio(r);
    } else {
      r = toRadio.filter((el) => el.distrito !== 'dos');
      setArrRadio(r);
    }
  };
  /* ===================================== Radio Filter END ==================== */

  /* ===================================== Clientes Filter ==================== */

  let db = n
    ?.sort((o1, o2) => o1.duration - o2.duration) //last to near
    .sort((o1, o2) =>
      o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
    );

  const [oxxo, setoxxo] = useState(true);
  const [otro, setotro] = useState(true);
  const [pagoEnEfectivo, setPagoEnEfectivo] = useState(true);

  const handleoxxo = (e) => {
    setoxxo(!oxxo);
    oxxo
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handleotro = (e) => {
    setotro(!otro);
    otro
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handleEfectivo = (e) => {
    setPagoEnEfectivo(!pagoEnEfectivo);
    pagoEnEfectivo
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const [arrFilter, setArrFilter] = useState([]);

  function removeItemFromArr(arrFilter, item) {
    let index = arrFilter.indexOf(item);
    if (index > -1) {
      arrFilter.splice(index, 1);
    }
  }

  useEffect(() => {
    for (let index = 0; index < arrFilter.length; index++) {
      const element = db.filter((el) => el.categorie !== arrFilter[index]);
      db = element;
    }
    setArrRadio(db);
  }, [arrFilter, oxxo, otro, pagoEnEfectivo]);

  /* ===================================== Clientes Filter END ==================== */


  /* ===================================== last 24 hours ==================== */
 /*  let lastWeek  = Date.now()-86400000 * 7  */
  let lastDay = Date.now() - 86400000;
  let lastHour = Date.now() - 3600000;
  let lastMinute = Date.now() - 60000;

  const [min, setMin] = useState();

  const [f, setF] = useState(1);

  const handlerInputM = (e) => {
    setF(e.target.value);
  };

  let r = 60000 * f;

  const t2 = DBD.filter((el) => el !== undefined).filter((el) => el.completed === false)

  useEffect(() => {

    let personasMap2 = t2.filter((el) => el.duration > lastMinute - r).map((item) => {
      return [item.email, item];
    });
    let personasMapArr2 = new Map(personasMap2);

    let unicos2 = [...personasMapArr2.values()];
    setMin(unicos2);
  }, [f]);

  const handlerMinute = () => {

    let personasMap2 = t2.filter((el) => el.duration > lastMinute - r).map((item) => {
      return [item.email, item];
    });
    let personasMapArr2 = new Map(personasMap2);

    let unicos2 = [...personasMapArr2.values()];
    setMin(unicos2);
    setD([]);
    setH([]);
  };

  const [d, setD] = useState();

  const handlerDay = () => {

    let personasMap = t2.filter((el) => el.duration > lastDay).map((item) => {
      return [item.email, item];
    });
    let personasMapArr = new Map(personasMap); // Pares de clave y valor

    let unicos = [...personasMapArr.values()]; // Conversión a un array
    setD(unicos);
    setMin([]);
    setH([]);
  };

  const [h, setH] = useState();

  const [hr, setHr] = useState(1);

  const handlerInputH = (e) => {
    setHr(e.target.value);
  };

  let rr = 3600000 * hr;

  useEffect(() => {

    let personasMap1 = t2.filter((el) => el.duration > lastHour - rr).map((item) => {
      return [item.email, item];
    });
    let personasMapArr1 = new Map(personasMap1); // Pares de clave y valor

    let unicos1 = [...personasMapArr1.values()]; // Conversión a un array
    setH(unicos1);
  }, [hr]);

  const handlerHour = () => {

    let personasMap1 = t2.filter((el) => el.duration > lastHour).map((item) => {
      return [item.email, item];
    });
    let personasMapArr1 = new Map(personasMap1); // Pares de clave y valor

    let unicos1 = [...personasMapArr1.values()]; // Conversión a un array
    setH(unicos1);
    setMin([]);
    setD([]);
  };

  /* ===================================== last 24 hours END ==================== */

  let arr2

  if (n?.length > 0) {
    arr2 = n.filter((el) => el !== false);
  }else{
    arr2 = arr
  }

  return (
    <div className="container-fluid">
      {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

      <div
        style={{ zIndex: "9999999" }}
        className="text-center w-50 position-fixed top-10 start-50 translate-middle"
      >
        {globalMsg && <Alert variant="danger">{globalMsg}</Alert>}
      </div>
      {admin && (
        <div className="row bg-secondary pb-3">
          <div className={arr.length> 0 ? "text-white bg-primary mb-3 p-2 blue" : "d-none"} >
            <span style={{ marginLeft: "20px" }}>
              <span className="p-1">{l}</span> Viajes {today2}  {' '}
              <span className="p-1 bg-dark mx-2" > 
              Total: ${arr?.filter((el) => el !== undefined)
                            .reduce((acc, curr) => acc + curr?.precio, 0).toFixed(2)}
              </span>
              <PDFDownloadLink
                document={<DocuPDF poema={arr.filter((el) => el !== undefined)} />}
                fileName="week.pdf"
              >
              <button style={{border:'none', backgroundColor:'transparent',color:'darkred'}}>PDF</button>
              </PDFDownloadLink>
            </span>

            <span className={n?.length > 0 ? "mx-5" : "d-none"} >
              {mail}{' '}
              <span className="bg-dark p-1 " >  
              Total:{' '}{''}${n?.filter((el) => el !== false)
                                  .reduce((acc, curr) => acc + curr?.precio, 0).toFixed(2)}
             
              </span>
              {' '}por{' '}{arr2?.length} Viajes
            </span>
          </div>
          <div className="col-1"></div>
          <div
            className={n?.length > 0 ? "d-none" : "col-md-3 text-center mb-4 me-5"}
          >
            <DatePicker
              selected={fecha}
              onChange={onDate}
              /* onFocus={dateFocus} */
              locale="es"
              className="pickers mb-3 form-control mt-2 w-100 bg-secondary"
              dateFormat="dd 'de' MMMM 'de' yyyy"
            />
          </div>
          <div
            className={arr?.length > 0 ? "col-md-1 fs-2 row-back" : "d-none"}
            onClick={() => location.reload()}
          >
            🔙
          </div> 



          {/* <div className="col-md-3 text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleMail}
                value={mail}
                className={arr.length > 0 ? "w-100 form-control mt-2" : "d-none"}
                style={{ width: "0" }}
                placeholder="Buscar por Tienda"
              />
            </form>
          </div> */}

          <div className="col-md-3 text-center">
            <select className={arr.length> 0 ? "w-100 form-control mt-2" : "d-none"} 
                    onChange={handleMail} >

                <option>Selecciona Una Tienda Distrito 1</option>
                <option value="Altares II-50AUF">Altares II-50AUF</option> 
                <option value="Apolo-50OAP">Apolo-50OAP</option> 
                <option value="Bachoco-50BCC">Bachoco-50BCC</option> 

                <option value="Balderrama-50OBD">Balderrama-50OBD</option> 
                <option value="Banus-509Q1">Banus-509Q1</option> 
                <option value="Basalto-50YFF">Basalto-50YFF</option> 

                <option value="Bosco-50U8C">Bosco-50U8C</option> 
                <option value="Bugambilias-50BUB">Bugambilias-50BUB</option> 
                <option value="BugambiliasII-50BWU">BugambiliasII-50BWU</option> 

                <option value="Canarios-50OTE">Canarios-50OTE</option> 
                <option value="Castanas-50LYW">Castanas-50LYW</option> 
                <option value="Choyal-50GBE">Choyal-50GBE</option> 

                <option value="Colinas-50KLN">Colinas-50KLN</option> 
                <option value="Cordobes-50CDK">Cordobes-50CDK</option> 
                <option value="Cumbres-50HCB">Cumbres-50HCB</option> 

                <option value="Del Cedro-50EIE">Del Cedro-50EIE</option> 
                <option value="Del Sol-50DPU">Del Sol-50DPU</option> 
                <option value="Diego Rivera-50NFC">Diego Rivera-50NFC</option> 

                <option value="DIF-50XIF">DIF-50XIF</option> 
                <option value="Dunas-50DUN">Dunas-50DUN</option> 
                <option value="El Esplendor-50XR6">El Esplendor-50XR6</option> 

                <option value="El Tijerito-500M3">El Tijerito-500M3</option> 
                <option value="El Tronconal-50TWN">El Tronconal-50TWN</option> 
                <option value="El Mezquite-501RM">El Mezquite-501RM</option> 

                <option value="Expo-50EMR">Expo-50EMR</option> 
                <option value="Flamingo-50FEN">Flamingo-50FEN</option> 
                <option value="Gomez Morin-50MSH">Gomez Morin-50MSH</option> 

                <option value="Hacienda-50HOH">Hacienda-50HOH</option> 
                <option value="Himes-50ARS">Himes-50ARS</option> 
                <option value="Isabeles-50ILS">Isabeles-50ILS</option> 

                <option value="Jardines-50JIN">Jardines-50JIN</option> 
                <option value="Jesus Garcia-50IVF">Jesus Garcia-50IVF</option> 
                <option value="Kino II-50YUQ">Kino II-50YUQ</option> 

                <option value="La Coyotita-50CYY">La Coyotita-50CYY</option> 
                <option value="La Floresta-50OWO">La Floresta-50OWO</option> 
                <option value="La Salida-50Q07">La Salida-50Q07</option> 

                <option value="Las Huertas-50EVQ">Las Huertas-50EVQ</option> 
                <option value="Lazaro-501QF">Lazaro-501QF</option> 
                <option value="Libertad-50HLI">Libertad-50HLI</option> 

                <option value="Maxxi-50QAE">Maxxi-50QAE</option> 
                <option value="Mendoza-50MDZ">Mendoza-50MDZ</option> 
                <option value="Montecarlo-50JMC">Montecarlo-50JMC</option> 

                <option value="Morelos-50IHD">Morelos-50IHD</option> 
                <option value="Narvaez-50VEV">Narvaez-50VEV</option> 
                <option value="Novena-50DKV">Novena-50DKV</option> 

                <option value="Nueva Palmira-50S2X">Nueva Palmira-50S2X</option> 
                <option value="Nuevo Hermosillo-50ONH">Nuevo Hermosillo-50ONH</option> 
                <option value="oceguera-507tq">oceguera-507tq</option> 

                <option value="Olivares-50IVA">Olivares-50IVA</option> 
                <option value="Oriente-50OTY">Oriente-50OTY</option> 
                <option value="Papagos-50AL3">Papagos-50AL3</option> 

                <option value="Paseo Real-50N05">Paseo Real-50N05</option> 
                <option value="Perinorte-50QPI">Perinorte-50QPI</option> 
                <option value="Prados del Sol-50HPS">Prados del Sol-50HPS</option> 

                <option value="Progreso-50PGG">Progreso-50PGG</option> 
                <option value="Pueblitos-50EBL">Pueblitos-50EBL</option> 
                <option value="Real del Arco-50RAD">Real del Arco-50RAD</option> 

                <option value="Real del Carmen-50KOW">Real del Carmen-50KOW</option> 
                <option value="Republica-50UMR">Republica-50UMR</option> 
                <option value="Reyes-50HRY">Reyes-50HRY</option> 

                <option value="Rio-50YHZ">Rio-50YHZ</option> 
                <option value="Romanza-50QAJ">Romanza-50QAJ</option> 
                <option value="Sahuaro-50SAH">Sahuaro-50SAH</option> 

                <option value="San Francisco-50SOH">San Francisco-50SOH</option> 
                <option value="Santa Clara-50SKA">Santa Clara-50SKA</option> 
                <option value="Supremo-50XDH">Supremo-50XDH</option> 

                <option value="Topografos-50UWS">Topografos-50UWS</option> 
                <option value="Tops-50WOT">Tops-50WOT</option> 
                <option value="Valencia-50VLY">Valencia-50VLY</option> 

                <option value="Villa Verde-50VNU">Villa Verde-50VNU</option> 
                <option value="Vinedos-50QZZ">Vinedos-50QZZ</option> 
                <option value="Yunke-50hzy">Yunke-50hzy</option> 
            </select>

          </div>

          <div className="col-md-3 text-center">
            <select className={arr.length> 0 ? "w-100 form-control mt-2" : "d-none"} 
                    onChange={handleMail} >

                 <option>Selecciona Una Tienda de Distrito 2</option>

                <option value="14 De Abril-503FS">14 De Abril-503FS</option> 
                <option value="20 de Noviembre-50NOM">20 de Noviembre-50NOM</option> 
                <option value="Abastos-50ABK">Abastos-50ABK</option> 

                <option value="Adelina-5075V">Adelina-5075V</option> 
                <option value="Agualurca-50AWL">Agualurca-50AWL</option> 
                <option value="Alborada-50GVZ">Alborada-50GVZ</option> 

                <option value="Alegranza-50X6D">Alegranza-50X6D</option> 
                <option value="Bacadehuachi-50V0O">Bacadehuachi-50V0O</option> 
                <option value="Baviacora-50LYQ">Baviacora-50LYQ</option> 

                <option value="Belice-50BEJ">Belice-50BEJ</option> 
                <option value="Boulevard-50OBU">Boulevard-50OBU</option> 
                <option value="California-505QJ">California-505QJ</option> 

                <option value="Campestre-50VJT">Campestre-50VJT</option> 
                <option value="Casa Bonita-506I7">Casa Bonita-506I7</option> 
                <option value="Catedral-50JNC">Catedral-50JNC</option> 

                <option value="caturegli-50J25">caturegli-50J25</option> 
                <option value="Centenario-507HN">Centenario-507HN</option> 
                <option value="Central-50QQF">Central-50QQF</option> 

                <option value="Centro-50CVU">Centro-50CVU</option> 
                <option value="Chavez-50GIY">Chavez-50GIY</option> 
                <option value="Cien-50CNI">Cien-50CNI</option> 

                <option value="Cinco de Mayo-50HSM">Cinco de Mayo-50HSM</option> 
                <option value="Clinica 14-50DLC">Clinica 14-50DLC</option> 
                <option value="ClInica 37-50E5D">ClInica 37-50E5D</option> 

                <option value="Clinica 68-500N5">Clinica 68-500N5</option> 
                <option value="Coahuila-50HUC">Coahuila-50HUC</option> 
                <option value="Colosio-50YIP">Colosio-50YIP</option> 

                <option value="Condesa-50HOC">Condesa-50HOC</option> 
                <option value="Conquistadores-50COQ">Conquistadores-50COQ</option> 
                <option value="Constitucion-50DOM">Constitucion-50DOM</option> 

                <option value="Coras-50ZYF">Coras-50ZYF</option> 
                <option value="Country Club-50RPM">Country Club-50RPM</option> 
                <option value="Crit-50FYC">Crit-50FYC</option> 

                <option value="Cuauhtemoc-50CCE">Cuauhtemoc-50CCE</option> 
                <option value="De la Nacion-50DLB">De la Nacion-50DLB</option> 
                <option value="Del Prado-50HBB">Del Prado-50HBB</option> 

                <option value="Diez-50W9V">Diez-50W9V</option> 
                <option value="Doctor Noriega-50V1T">Doctor Noriega-50V1T</option> 
                <option value="Donato Guerra-50AIX">Donato Guerra-50AIX</option> 

                <option value="Ebanos-50UFA">Ebanos-50UFA</option> 
                <option value="El Puente-50LYZ">El Puente-50LYZ</option> 
                <option value="El Seri-50HQR">El Seri-50HQR</option> 

                <option value="El Triunfo-50EU4">El Triunfo-50EU4</option> 
                <option value="Estacion 26-50ESV">Estacion 26-50ESV</option> 
                <option value="Fresnos-502JH">Fresnos-502JH</option> 

                <option value="Gala-501P9">Gala-501P9</option> 
                <option value="Ganadera-50GDR">Ganadera-50GDR</option> 
                <option value="Garcia Morales-50004">Garcia Morales-50004</option> 

                <option value="Garcia-50YIW">Garcia-50YIW</option> 
                <option value="Garmendia-50QWQ">Garmendia-50QWQ</option> 
                <option value="Gomez Farias-50DDM">Gomez Farias-50DDM</option> 

                <option value="Guamuchil-508EN">Guamuchil-508EN</option> 
                <option value="Guerrero-50MMU">Guerrero-50MMU</option> 
                <option value="Haciendas del Sur-50IHP">Haciendas del Sur-50IHP</option> 

                <option value="Healy-50IVJ">Healy-50IVJ</option> 
                <option value="Hermosillo-50BIB">Hermosillo-50BIB</option> 
                <option value="Industrial-Industrial">Industrial-Industrial</option> 

                <option value="Infonavit-50FON">Infonavit-50FON</option> 
                <option value="Internacional-50ITE">Internacional-50ITE</option> 
                <option value="Israel-50LSR">Israel-50LSR</option> 

                <option value="jefatura-50p52">jefatura-50p52</option> 
                <option value="Jose Carmelo-50LXB">Jose Carmelo-50LXB</option> 
                <option value="Juarez-50UMU">Juarez-50UMU</option> 

                <option value="Justo Sierra-50ACK">Justo Sierra-50ACK</option> 
                <option value="La Caridad-50XNU">La Caridad-50XNU</option> 
                <option value="La Morrita-50EIW">La Morrita-50EIW</option> 

                <option value="Las Palmas-50HPM">Las Palmas-50HPM</option> 
                <option value="Las Quintas-50XJB">Las Quintas-50XJB</option> 
                <option value="Lauro Galvez-50YVR">Lauro Galvez-50YVR</option> 

                <option value="Lazaro Cardenas-50JWV">Lazaro Cardenas-50JWV</option> 
                <option value="Lazaro Mercado-50FLM">Lazaro Mercado-50FLM</option> 
                <option value="Loma Linda-50LOL">Loma Linda-50LOL</option> 

                <option value="Lomas del Sur-50HSL">Lomas del Sur-50HSL</option> 
                <option value="Lomas Pitic-50LPT">Lomas Pitic-50LPT</option> 
                <option value="Lopez Mateos-50SOD">Lopez Mateos-50SOD</option> 

                <option value="Los Arcos-50ARC">Los Arcos-50ARC</option> 
                <option value="Madero-50INY">Madero-50INY</option> 
                <option value="Madrid-50XND">Madrid-50XND</option> 

                <option value="Mallorca-50XJC">Mallorca-50XJC</option> 
                <option value="Manglar-50JAB">Manglar-50JAB</option> 
                <option value="Manzanares-50NZN">Manzanares-50NZN</option> 

                <option value="Mariachi-50HEM">Mariachi-50HEM</option> 
                <option value="Marquez-50MHG">Marquez-50MHG</option> 
                <option value="Marsella-50KMZ">Marsella-50KMZ</option> 

                <option value="Matamoros-50MWT">Matamoros-50MWT</option> 
                <option value="Mercedes-50HGC">Mercedes-50HGC</option> 
                <option value="Milenium-50AZW">Milenium-50AZW</option> 

                <option value="Mocorito-50XKI">Mocorito-50XKI</option> 
                <option value="Modelo-50MOD">Modelo-50MOD</option> 
                <option value="Monaco-500I8">Monaco-500I8</option> 

                <option value="Monterrey-50NWY">Monterrey-50NWY</option> 
                <option value="Monteverde-50OMV">Monteverde-50OMV</option> 
                <option value="Morelia-50LIA">Morelia-50LIA</option> 

                <option value="Nacori Grande-50JQY">Nacori Grande-50JQY</option> 
                <option value="Naranjos-50NJO">Naranjos-50NJO</option> 
                <option value="Navarrete-50NRR">Navarrete-50NRR</option> 

                <option value="Navojoa-50FJU">Navojoa-50FJU</option> 
                <option value="Nayarit-50NYT">Nayarit-50NYT</option> 
                <option value="Noroeste-50NRO">Noroeste-50NRO</option> 

                <option value="Nueva Esperanza-507ZG">Nueva Esperanza-507ZG</option> 
                <option value="Palacios-50JRJ">Palacios-50JRJ</option> 
                <option value="Palma Dorada-503R3">Palma Dorada-503R3</option> 

                <option value="Periferico-50HPR">Periferico-50HPR</option> 
                <option value="Perimetral-50PRL">Perimetral-50PRL</option> 
                <option value="Periodista-509S1">Periodista-509S1</option> 

                <option value="Perisur-50RPS">Perisur-50RPS</option> 
                <option value="Pina-50HPI">Pina-50HPI</option> 
                <option value="Pirul-504AU">Pirul-504AU</option> 

                <option value="Pitahaya Madura-50WL2">Pitahaya Madura-50WL2</option> 
                <option value="Pitic-50OPT">Pitic-50OPT</option> 
                <option value="Planetario-50DNQ">Planetario-50DNQ</option> 

                <option value="Pueblo Nuevo">Pueblo Nuevo</option> 
                <option value="Puerta del rey-50LRO">Puerta del rey-50LRO</option> 
                <option value="Puerta Real-50PUT">Puerta Real-50PUT</option> 

                <option value="Quinta Emilia-50IVQ">Quinta Emilia-50IVQ</option> 
                <option value="Quintas del Sol-50CYX">Quintas del Sol-50CYX</option> 
                <option value="Quiroga-50IDF">Quiroga-50IDF</option> 

                <option value="Real de Minas-50MDM">Real de Minas-50MDM</option> 
                <option value="Real-50RJP">Real-50RJP</option> 
                <option value="Rebeico-50LT1">Rebeico-50LT1</option> 

                <option value="Reforma-50REF">Reforma-50REF</option> 
                <option value="Revolucion-50VOL">Revolucion-50VOL</option> 
                <option value="Romero-50JRB">Romero-50JRB</option> 

                <option value="Ruba-50RBI">Ruba-50RBI</option> 
                <option value="Salazar-50AUD">Salazar-50AUD</option> 
                <option value="San Agustin-50YAB">San Agustin-50YAB</option> 

                <option value="San Angel-50SAA">San Angel-50SAA</option> 
                <option value="San Benito-50HSB">San Benito-50HSB</option> 
                <option value="san bernardino-50X9V">san bernardino-50X9V</option> 

                <option value="Seguro Social-50OXS">Seguro Social-50OXS</option> 
                <option value="Serna-50SEA">Serna-50SEA</option> 
                <option value="Solidaridad-50FSL">Solidaridad-50FSL</option> 

                <option value="Sonacer-50SQJ">Sonacer-50SQJ</option> 
                <option value="Sonora-50FYU">Sonora-50FYU</option> 
                <option value="Super Salcido-50FFV">Super Salcido-50FFV</option> 

                <option value="Super Tierra Nueva II-50BHR">
                  Super Tierra Nueva II-50BHR
                </option> 
                <option value="Tepoca-50NCG">Tepoca-50NCG</option> 
                <option value="Topahue-50TPU">Topahue-50TPU</option> 

                <option value="Transversal-50HTV">Transversal-50HTV</option> 
                <option value="Transversal-Monteverde-50OMV">
                  Transversal-Monteverde-50OMV
                </option> 
                <option value="Triana-50WSY">Triana-50WSY</option> 

                <option value="Universidad II-50USI">Universidad II-50USI</option> 
                <option value="Valentina-50AUM">Valentina-50AUM</option> 
                <option value="Valle de Lago-50VGK">Valle de Lago-50VGK</option> 

                <option value="Verbena-50AJV">Verbena-50AJV</option> 
                <option value="Vergel-50BYP">Vergel-50BYP</option> 
                <option value="Vertedor-50VDK">Vertedor-50VDK</option> 

                <option value="Villa Bonita-50KVB">Villa Bonita-50KVB</option> 
                <option value="Villa Dorada-50VDB">Villa Dorada-50VDB</option> 
                <option value="Villa Hermosa-50FXI">Villa Hermosa-50FXI</option> 

                <option value="Villa Quintero-50R5C">Villa Quintero-50R5C</option> 
                <option value="Villas del Sur-50VIW">Villas del Sur-50VIW</option> 
                <option value="Volcanes-50UTB">Volcanes-50UTB</option> 

                <option value="Y Griega-50GRI">Y Griega-50GRI</option> 
                <option value="Yanez-50BYY">Yanez-50BYY</option> 

            </select>

          </div>

          {/* <div className="col-1"></div>
           <div className={n?.length > 0 ? "col-md-3 mt-2 " : "d-none"}>
            <div
              className={arr?.length > 0 ? "w-75 fr" : "d-none"}
              onChange={(e) => handlerRadio(e.target.value)}
            >
              <input
                type="button"
                className="btn text-white btn-outline-dark"
                name="drone"
                value="Todos"
                onClick={() => setArrRadio([])}
              />

              <label className="btn text-white btn-outline-dark my-2">
                <input
                  type="radio"
                  value="uno"
                  name="drone"
                  className="d-none"
                />
                Distrito Uno
              </label>
              <label className="btn text-white btn-outline-dark">
                <input
                  type="radio"
                  value="dos"
                  name="drone"
                  className="d-none"
                />
                Distrito Dos
              </label>
            </div>
          </div>
          <div className={n?.length > 0 ? "col-md-3 mt-2" : "d-none"}>
            <div className="w-75 mt-0 " style={{ marginLeft: "12.5%" }}>
              <label className="text-white mb-4 mt-1">
                <input
                  type="checkbox"
                  className="m-1"
                  value="oxxo"
                  onChange={(e) => handleoxxo(e)}
                  checked={oxxo}
                />
                OXXO
              </label>
              <br />
              <label className="text-white mb-4">
                <input
                  type="checkbox"
                  className="m-1"
                  value="otro"
                  onChange={(e) => handleotro(e)}
                  checked={otro}
                />
                Otro
              </label>
              <br />
              <label className="text-white">
                <input
                  type="checkbox"
                  className="m-1 mb-4"
                  value="pago en efectivo"
                  onChange={(e) => handleEfectivo(e)}
                  checked={pagoEnEfectivo}
                />
                Pagos en Efectivo
              </label>
            </div>
          </div>  */}
        </div>
      )}

      {/* =================================================================================================================================================================================================================================== */}
      {currentUser && (
<div className="d-none">
      <div className="d-flex flex-row justify-content-evenly p-4">
        <input
          type="button"
          className={arr?.length > 0 ? "d-none" : "btn btn-primary"}
          value="Ultimo Minuto"
          onClick={handlerMinute}
        />

        <input
          type="button"
          className={arr?.length > 0 ? "d-none" : "btn btn-primary mx-1"}
          value="Ultima Hora"
          onClick={handlerHour}
        />

        <input
          type="button"
          className={arr?.length > 0 ? "d-none" : "btn btn-primary"}
          value="Ultimas 24 Hrs"
          onClick={handlerDay}
        />
      </div>

      <div
        className={
          arr?.length > 0 ? "d-none" : min?.length > 0 ? "p-1 mb-3" : "d-none"
        }
      >
        <h4 className="p-1 bg-secondary text-white">
          Taxistas con Viajes sin Completar desde el Ultimo Minuto +
          <input
            type="number"
            className="mx-5"
            onChange={handlerInputM}
            value={f}
          />
        </h4>

        {
          <div className="p-3 text-center mb-3">
            {min?.map((doc) => {
              return (
                <span className="border border-danger mx-2 p-2 bg-white">
                  {doc.email.slice(0, -10)}
                </span>
              );
            })}
          </div>
        }
      </div>

      <div
        className={
          arr?.length > 0 ? "d-none" : h?.length > 0 ? "p-1 mb-3" : "d-none"
        }
      >
        <h4 className="p-1 bg-secondary text-white">
          Taxistas con Viajes sin Completar de la Ultima Hora +
          <input
            type="number"
            className="mx-5"
            onChange={handlerInputH}
            value={hr}
          />
        </h4>

        {
          <div className="p-3 text-center mb-3">
            {h?.map((doc) => {
              return (
                <span className="border border-danger mx-2 p-2 bg-white">
                  {doc.email.slice(0, -10)}
                </span>
              );
            })}
          </div>
        }
      </div>

      <div
        className={
          arr?.length > 0 ? "d-none" : d?.length > 0 ? "p-1 mb-3" : "d-none"
        }
      >
        <h4 className="p-2 bg-secondary text-white">
          Taxistas con viajes sin Completar de las Ultimas 24 Horas
        </h4>

        {
          <div className="p-3 text-center mb-3">
            {d?.map((doc) => {
              return (
                <span className="border border-danger mx-2 p-2 bg-white">
                  {doc.email.slice(0, -10)}
                </span>
              );
            })}
          </div>
        }
      </div>
        </div>
      )}

      


      {DB && (
        <div className="pt-3">
          {currentUser && (
            <div className={arr.length > 0 ? "d-none" : "d-none"}>
              <Filters />
            </div>
          )}
          {arr2
            .filter((el) => el !== undefined)
            .map((doc) => {
              return (
                <AuctionCard
                  item={doc}
                  key={doc.id}
                />
              );
            })}
        </div>
      )}

  {/*     <h2 className="mt-2 px-3 mx-1">Pedidos de oxxo</h2>

      {arr4
            .filter((el) => el !== undefined)
            .map((doc) => {
              return (    
            <Oxxo item={doc}/> 
            );
          })}    */}  


    </div>
  );
};
