import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '40%',
    },
    input: {
        margin: '10px',
        width: '400px',
        display: 'Block',
    }
    ,btn: {
        marginLeft: '7%'
    }
}));

function LogIn() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.input} label="Email" variant="outlined" />
            <TextField id="outlined-basic" className={classes.input} label="Password" variant="outlined" />
            <Button variant="contained" color="primary" className={classes.btn}>
                Login
            </Button>
        </form>
    );
}

export default LogIn;