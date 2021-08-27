// import React, { Component } from 'react';
// import Image from './Image';

// class ImageList extends Component {
//    render() {
//       return (
//          <div className='card-parent'>
//             {this.state.images.map((image) => (
//                <Image key={image.char_id} image={image} />
//             ))}
//          </div>
//       );
//    }
// }

// export default ImageList;

import React from 'react';
import Image from './Image';

const ImageList = ({ imageList }) => {
   return (
      <div className='card-parent'>
         {imageList.map((image) => (
            <Image key={image.char_id} image={image} />
         ))}
      </div>
   );
};

export default ImageList;

// import React, { Component } from 'react';
// import Image from './Image';
// import Spinner from '../layout/Spinner';

// class ImageList extends Component {
//    render() {
//       const { imageList } = this.props;
//       const { isLoading } = this.state;
//      return (
//         {
//            if
//         }
//      )
//    }
// }

// export default ImageList;
