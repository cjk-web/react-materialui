import React from 'react';
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
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  card2: {
    minWidth: 275,
  },
  card3: {
    display: 'flex',
  },
  media: {
    height: 0,
    paddingTop: '56%',
  },
  cover: {
    height: 250,
    width: 250,
    padding: 8,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    background: '#F5F5F5',
  },
  menu: {
    float: 'right',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
                    <CardContent>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/logo.svg"
                      title="This is where the logo should go"
                    />
                    <Typography gutterBottom variant="headline" component="h2">
                        This is a title.
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
                      className={classes.cover}
                      image="/static/images/logo-mini.svg"
                      title="This is an image"
                    />
                    </CardContent>
                    <CardActions className={classes.actions}>
                    <Button size="small">A Button</Button>
                    <MenuButton className={classes.menu} />
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.card3}>
                    <CardMedia
                      className={classes.cover}
                      image="/static/images/logo.svg"
                      title="This is an image"
                    />
                    <div className={classes.details}>
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Here is another title.
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