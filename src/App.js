import React, { Component } from 'react';
import Header from './components/layout/Header';
import ImageList from './components/images/ImageList';
import SearchInput from './components/SearchInput';
import './App.css';

class App extends Component {
   state = {
      images: [],
      isLoading: true,
      term: '',
      searchText: '',
   };

   componentDidMount() {
      fetch(`https://www.breakingbadapi.com/api/characters`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ images: data, isLoading: false });
         });
   }

   handleChange = (e) => {
      this.setState({ searchText: e.target.value });
   };

   render() {
      return (
         <div>
            <Header />

            <div className='container'>
               <SearchInput
                  searchText={this.state.searchText}
                  handleChange={this.handleChange}
               />
               <ImageList imageList={this.state.images} />
            </div>
         </div>
      );
   }
}

export default App;
