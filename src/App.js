import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ZomboContainer from './components/ZomboContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();
  const [zombiesInTruck, setZombiesInTruck] = useState(25);

  function moveToTruck() {
    setZombiesInTruck(zombiesInTruck + 1);
  }

  function storeZombie() {
    if (zombiesInTruck > 0) {
      setZombiesInTruck(zombiesInTruck - 1);
    }
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h5" component="h2">
          Zombies In Truck: {zombiesInTruck}
        </Typography>
        <Grid item xs={2}>
          <ZomboContainer name={"Hospital"} zombiesInTruck={zombiesInTruck} moveToTruck={moveToTruck} storeZombie={storeZombie}/>
          <ZomboContainer name={"School"} zombiesInTruck={zombiesInTruck} moveToTruck={moveToTruck} storeZombie={storeZombie}/>
          <ZomboContainer name={"Warehouse"} zombiesInTruck={zombiesInTruck} moveToTruck={moveToTruck} storeZombie={storeZombie}/>
        </Grid>
      </Grid>
    </div>
  );
}