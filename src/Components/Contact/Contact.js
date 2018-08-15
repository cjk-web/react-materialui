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
    paddingBottom: 16,
  },
  blurb: {
    paddingTop: 16,
  },
  form: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 16,
  },
  name: {
    paddingTop: 20,
    marginBottom: 20,
  },
  message: {
    paddingTop: 20,
    marginBottom: 20,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="page-content">
        <Paper className={classes.root}>
            <Typography variant="headline" component="h3" className={classes.title}>Contact Us</Typography>

            <Typography component="p" className={classes.blurb}>Have a question or suggestion? Let us know here and we'll get back to you as soon as we can.</Typography>

            <div className={classes.form}>
                <Input fullWidth
                    className={classes.name}
                    placeholder="Name"
                    inputProps={{
                    'aria-label': 'Name',
                    }}
                />
                <TextField fullWidth
                    multiline="true" rows="5"
                    className={classes.message}
                    placeholder="Message"
                    inputProps={{
                    'aria-label': 'Message',
                    }}
                />
            </div>
        </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);