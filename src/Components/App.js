import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Article from './Article/Article';
import Contact from './Contact/Contact';

export default class extends Component {
    state = {
        articles: []
    }

    async componentDidMount() {
        const articles = await (await fetch('http://localhost:3004/articles'))

        this.setState({ articles })
    }

    render() {
        return <BrowserRouter>
            <Fragment>
                <Header />

                <Route exact path="/" render={props => <Content />} />
                <Route exact path="/Article" render={props => <Article />} />
                <Route exact path="/Contact" render={props => <Contact />} />

                <Footer />
            </Fragment>
        </BrowserRouter>
    }
}