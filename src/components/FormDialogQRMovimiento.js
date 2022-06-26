import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function FormDialogQRMovimiento() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    
    navigate('/')
  };

  return (
    <div>
      <Button className="button" variant="contained" onClick={handleClickOpen} style={{marginTop: 15}} >
        Registrar Movimiento
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de movimiento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresar el destino del equipo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="codigoQRMovimiento"
            label="Destino"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="codigoQRMovimiento"
            label="Fecha"
            type="date"
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
  );
}
