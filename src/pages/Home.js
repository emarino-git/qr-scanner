import Button from '@mui/material/Button';
import Icon from '@mdi/react'
import {mdiQrcodeScan} from '@mdi/js';
import {Link} from "react-router-dom";

function Home() {

    return (
        <div>
            <h3>
                Escanear código QR
            </h3>
            <Link to="/qr_scanner">
                <Button variant="contained" size="large" color="primary">
                    <Icon style={
                            {padding: 10}
                        }
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"/>
                </Button>
            </Link>
        </div>
    );
}

export default Home;
