import React, { Component } from 'react';
import { loadMovies } from '../actions';
import { fetchMovieData } from '../utilz/apiCalls';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MoviesDisplay from './MoviesDisplay';
import SignUpForm from './SignUpForm';
import Header from './Header';


class App extends Component {
constructor(props) {
  super()
}

componentDidMount = async () => {
  const { handleFetch } = this.props;
  fetchMovieData()
  .then(data => data)
  .then(movies => handleFetch(movies))
}

  render() {
    const homeDisplay = (
      (this.props.movies.length) && 
      <MoviesDisplay />
    )
    return (
      <main className='app'>
        <Header />
        <Route exact path='/' render = {() => homeDisplay} />
        <Route exact path='/login' render = {() => <LoginForm />} />
        <Route exact path='/signup' render = {() => <SignUpForm />} />
      </main>
    );
  }
}

export const mapStateToProps = state => {
  return { movies:  state.movies }
}

export const mapDispatchToProps = dispatch => ({
  handleFetch: movies => dispatch(loadMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
