import React, {useState} from 'react'
import {Fab} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import { inventario } from '../data/inventario'

function QRscanner() {


   

    const [qrscan, setQrscan] = useState('Sin resultados');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    const iterator = inventario.keys();
    var key = '0'

    for (const keyFind of iterator) {
        if (inventario[keyFind]['# INVENTARIO'] === qrscan){
            key = keyFind
        }
    }

    console.log(key)


    return (
      <>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>

            <div className='qr-resultados'>
                <h3>{qrscan}</h3>
                <p># INVENTARIO: {qrscan}</p>
                <p>TIPO DE EQUIPO: {inventario[key]['TIPO DE EQUIPO']}</p>
                <p>Marca: {inventario[key]['Marca']}</p>
                <p>Modelo: {inventario[key]['Modelo']}</p>
                <p>N° Serie: {inventario[key]['N� Serie']}</p>
                <button className='qr-button'>Registrar Movimiento</button>
            </div>
            

      </>
    );
  }
  
  export default QRscanner;