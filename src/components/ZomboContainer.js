import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ZomboContainer(props) {
    const classes = useStyles();
    const [zombiesContained, setZombiesContained] = useState(Math.round(Math.random() * 10));

    function moveToTruck() {
        if (zombiesContained > 0) {
            props.moveToTruck();
            setZombiesContained(zombiesContained - 1);
        }
    }

    function storeZombie() {
        if (props.zombiesInTruck > 0) {
            props.storeZombie();
            setZombiesContained(zombiesContained + 1);
        }
    }

    return (
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {props.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            Zombies contained here: {zombiesContained}
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                variant="contained" 
                onClick={moveToTruck}
                className={classes.button}
            >
                Move To Truck
            </Button>
            <Button 
                variant="contained" 
                onClick={storeZombie}
                className={classes.button}
            >                Store Zombie
            </Button>
        </CardActions>
        </Card>
    );
}