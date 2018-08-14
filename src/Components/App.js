import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class extends Component {
    render() {
        return <Fragment>
            <Header />

            <Content />

            <Footer />
        </Fragment>
    }
}