// import React, { Component } from 'react';

// class SearchInput extends Component {
//    render() {
//       return (
//          <div className='search'>
//             <input type='text' value={this.searchText} />
//          </div>
//       );
//    }
// }

// export default SearchInput;

import React from 'react';

const SearchInput = ({ searchText, handleChange }) => {
   return (
      <div className='search'>
         <input type='text' onChange={handleChange} value={searchText} />
      </div>
   );
};

export default SearchInput;
