import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialogQRManual() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="button" variant="outlined" onClick={handleClickOpen} style={{marginBottom: 15}}>
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
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
