import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Input, TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  title: {
    textAlign: 'center',
    paddingBottom: 16,
  },
  content: {
    paddingTop: 16,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="page-content">
        <Paper className={classes.root}>
            <Typography variant="display3" className={classes.title}>This is an Article.</Typography>

            <Typography component="p" className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu risus sit amet risus vulputate elementum sit amet id velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa est, pulvinar in arcu sit amet, ultrices vehicula mauris. Curabitur accumsan arcu in nisi maximus, quis tempus quam consectetur. Nunc ac tellus ante. Nam scelerisque, mi in vehicula viverra, sem nisl semper ipsum, id pretium tellus sem nec risus. Praesent in bibendum ligula. Nunc commodo sed enim consequat interdum. Nam posuere ligula ac tortor cursus volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ligula ligula, dapibus eu est in, gravida vehicula nibh. In ultricies convallis nunc, non iaculis enim condimentum eu. Nulla feugiat, orci ut accumsan sodales, elit ipsum cursus lacus, condimentum euismod magna augue sit amet felis. Pellentesque id ultrices leo. Curabitur sagittis consectetur nibh, sed fringilla felis efficitur vel.
            </Typography>
        </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);