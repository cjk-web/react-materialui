import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
        backgroundColor: 'rgb(243, 243, 243)',
        padding: 32,
        marginTop: 8,
    },
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Typography variant="subheading" align="left">
                footer
            </Typography>
        </footer>
    );
}

Footer.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);