import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Main = ({ exercise,
    category,
    onSelect,
    exerciseSelect:
    { id,
        title = 'welcome!',
        description = 'Please select an exercise from the list'
    } }) => {

    return (
        <Grid container spacing={2}>

            <Grid item sm>
                <Paper style={style.Paper}>
                    {exercise.map(([group, exercise]) => !category || category === group ?
                        <Fragment> <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
                            {group}
                            <List component="ul" >
                                {exercise.map(({ id, title }) =>
                                    <ListItem button>
                                        <ListItemText
                                            primary={title}
                                            onClick={() => onSelect(id)} />

                                    </ListItem>
                                )}
                            </List>
                        </Typography> </Fragment> : null

                    )}
                </Paper>

            </Grid>
            <Grid item sm >
                <Paper style={style.Paper}>

                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </Paper>
            </Grid>

        </Grid >
    )
}

const style = {
    Paper: {
        padding: 20,
        height: 400,
        marginTop: 30,
        marginBottom: 10,
        overflowY: 'auto'
    }
}
export default Main