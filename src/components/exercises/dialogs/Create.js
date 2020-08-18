import React, { Fragment, useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Create = ({ muscles, onCreate }) => {

    const classes = useStyles();
    const [open, SetOpen] = useState(false)
    const [name, setName] = useState(muscles)

    const handleToggle = () => {
        SetOpen(!open)
    }

    const handleChange = (event) => {
        setName(event.target.value);
    };


    const handleSubmit = () => {
        onCreate(name)

        setName('')
    }

    return (

        <Fragment>
            <Fab aria-label="add" onClick={handleToggle}>
                <AddIcon />
            </Fab>
            <Dialog open={open} aria-labelledby="form-dialog-title" onClose={handleToggle}>
                <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        please fill out the form below
          </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            onChange={handleChange}
                        />
                        <br />

                        <TextField
                            id="standard-multiline-flexible"
                            label="Description"

                            multiline
                            rows={4}
                            onChange={handleChange}
                            variant="filled"
                        />
                        <br />

                        <FormControl className={classes.formControl} >
                            <InputLabel id="muscles">Muscles</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={name}
                                onChange={handleChange}
                            >
                                {muscles.map(muscle =>
                                    <MenuItem value={muscle}>{muscle}</MenuItem>
                                )}

                            </Select>
                        </FormControl>


                    </form>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        create
          </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}
export default Create