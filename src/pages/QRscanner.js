import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from "react-router-dom"
import QrScan from 'react-qr-reader'
import { inventario } from '../data/inventario'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import FormDialogQRMovimiento from '../components/FormDialogQRMovimiento'

var inventarioManual = "____"

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

    //qr manual

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        inventarioManual = document.getElementById('codigoQRManual').value.toUpperCase()
    };


    var result = ""
    if (qrscan === "Sin resultados") { result = inventarioManual } else { result = qrscan }


    
    // Busqueda en inventario

    const iterator = inventario.keys();
    var key = '0'

    for (const keyFind of iterator) {
        if (inventario[keyFind]['# INVENTARIO'] === result) {
            key = keyFind
        }
    }

    // Reload

    const handleReload = () => {
        window.location.reload(false)
    }


    return (
        <div className='page'>
            <div className='qr-sup-bottons'>
                <Link to="/">
                    <Fab color="primary">
                        <ArrowBackIosIcon />
                    </Fab>
                </Link>
                <div>
                    <Fab color="primary">
                        <ReplayIcon onClick={handleReload} />
                    </Fab>
                </div>

            </div>

            <QrScan
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ height: 320, width: 320 }}
            />
            <div className='qr-resultados'>
                <div>
                    <Button className="button" variant="outlined" onClick={handleClickOpen} style={{ marginBottom: 15 }}>
                        Ingreso de código Manual
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Ingreso manual</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Ingresar el código que se encuentra junto al QR.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="codigoQRManual"
                                label="Código"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button onClick={handleSubmit}>Aceptar</Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <p># INVENTARIO: {result}
                </p>
                <p>TIPO DE EQUIPO: {inventario[key]['TIPO DE EQUIPO']}</p>
                <p>Marca: {inventario[key]['Marca']}</p>
                <p>Modelo: {inventario[key]['Modelo']}</p>
                <p>N° Serie: {inventario[key]['N� Serie']}</p>
                <FormDialogQRMovimiento className="button" />
            </div>
        </div>
    );
}
