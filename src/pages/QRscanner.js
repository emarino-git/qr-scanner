import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom"
import QrScan from 'react-qr-reader'
import { inventario } from '../data/inventario'
import FormDialogQRManual from '../components/FormDialogQRManual'
import FormDialogQRMovimiento from '../components/FormDialogQRMovimiento'

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
                    <ArrowBackIosIcon />
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
                <FormDialogQRManual />
                {/* <button className='qr-button' onChange={} >Ingresar código Manual</button> */}
                <p># INVENTARIO: {qrscan}</p>
                <p>TIPO DE EQUIPO: {inventario[key]['TIPO DE EQUIPO']}</p>
                <p>Marca: {inventario[key]['Marca']}</p>
                <p>Modelo: {inventario[key]['Modelo']}</p>
                <p>N° Serie: {inventario[key]['N� Serie']}</p>
                <FormDialogQRMovimiento />
            </div>
        </div>
    );
}
