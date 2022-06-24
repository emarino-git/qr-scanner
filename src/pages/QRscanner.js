import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from "react-router-dom"
import QrScan from 'react-qr-reader'
import { inventario } from '../data/inventario'
// import FormDialog from '../components/FormDialog'

export default function QRscanner() {

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
        if (inventario[keyFind]['# INVENTARIO'] === qrscan) {
            key = keyFind
        }
    }


    return (
        <div className='page'>
            <Link to="/">
                <Fab color="primary">
                    <ArrowBack />
                </Fab>
            </Link>
            <div style={{ marginTop: 30 }}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>

            <div className='qr-resultados'>
                <br></br>
                <br></br>
                {/* <Formdialog /> */}
                {/* <button className='qr-button' onChange={} >Ingresar código Manual</button> */}
                <p># INVENTARIO: {qrscan}</p>
                <p>TIPO DE EQUIPO: {inventario[key]['TIPO DE EQUIPO']}</p>
                <p>Marca: {inventario[key]['Marca']}</p>
                <p>Modelo: {inventario[key]['Modelo']}</p>
                <p>N° Serie: {inventario[key]['N� Serie']}</p>
                <button className='qr-button' id='registrar-movimiento' >
                    Registrar Movimiento
                </button>
            </div>
        </div>
    );
}
