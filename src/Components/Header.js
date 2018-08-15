import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    list: {
        width: 250,
      },
      logo: {
        height: 45,
      },
  };
  
  class MenuAppBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
    };
  
    handleChange = (event, checked) => {
      this.setState({ auth: checked });
    };
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
  
    render() {
      const { classes } = this.props;
      const { auth } = this.state;

      const sideList = (
        <div className={classes.list}>
          <List>
              <div>
                <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItem>
            </div>
          </List>
        </div>
      );
  
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
              </Drawer>
              <img className={classes.logo} src={window.location.origin + "/images/logo.svg"} alt="logo" />
              {auth && (
                <div>
                  
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
  
  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuAppBar);