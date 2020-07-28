import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const Footer = ({ muscles, onSelect, category }) => {
    const classes = useStyles();

    const index = category ? muscles.findIndex(group => group === category) + 1 : 0

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Paper className={classes.root}>
            <Tabs
                value={index}
                onChange={(e, index) => { onSelect(index === 0 ? '' : muscles[index - 1]) }}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label='All' />
                {muscles.map(muscle => <Tab label={muscle} />)}


            </Tabs>
        </Paper>
    )
}
export default Footer;