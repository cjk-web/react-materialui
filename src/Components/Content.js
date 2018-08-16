import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MenuButton from './MenuButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  card2: {
    
  },
  card3: {
    display: 'flex',
  },
  media: {
    minHeight: 160,
    padding: 16,
    //paddingTop: '56%',
    backgroundSize: '100%',
  },
  media2: {
    backgroundSize: '25%',
    paddingTop: '100%',
  },
  cover: {
    height: 250,
    width: 250,
    padding: 8,
    backgroundSize: '90%',
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    background: '#F5F5F5',
    color: 'rgb(117, 117, 117)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className="page-content">
        <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={8}>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={window.location.origin + "/images/landscape1.jpeg"}
                      title="This is where the logo should go"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        <Link to="/Article">This is a title.</Link>
                    </Typography>
                    <Typography component="p">
                        This is a paragraph. It has words and stuff that you can read. 
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card2}>
                    <CardContent>
                    <CardMedia
                      className={classes.media2}
                      image={window.location.origin + "/images/logo-mini.svg"}
                      title="This is an image"
                    />
                    </CardContent>
                    <CardActions className={classes.actions}>
                    <Typography color="inherit">a card</Typography>
                    <MenuButton />
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.card3}>
                    <CardMedia
                      className={classes.cover}
                      image={window.location.origin + "/images/landscape2.jpeg"}
                      title="This is an image"
                    />
                    <div className={classes.details}>
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      <Link to="/Article">Here is another title.</Link>
                    </Typography>
                    <Typography component="p">
                        Here are some more words to read. 
                    </Typography>
                    </CardContent>
                    </div>
                </Card>
            </Grid>
        </Grid>
        </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);