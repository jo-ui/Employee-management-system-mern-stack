import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Employee from './components/showEmployee/showEmployee.js';
import Create from './components/createEmployee/createEmployee.js';
import './App.css';
import useStyles from './styles.js';

function App() {

    const classes = useStyles();
    return (

        <div className = "App">
            <Container maxWidth = "lg" >

                <AppBar className = { classes.appBar } position = "static" color = "inherit">
                    <Typography className = { classes.heading } variant = "h2" align = "center" > Employees Management System </Typography>
                </AppBar >
                <Grow in>
                    <Container>


                        <Grid container justifyContent = "space-between"alignItems = "stretch" >
                            <Grid item xs = { 12 } sm = { 7 } >
                                <AppBar className = { classes.appBar } position = "static" color = "inherit" >
                                    <Employee/>
                                </AppBar>
                            </Grid >
                            <Grid item xs = { 12 } sm = { 4 } >
                                <AppBar className = { classes.appBar } position = "static" color = "inherit" >
                                    <Create/>
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>

        </div>
    );
}

export default App;