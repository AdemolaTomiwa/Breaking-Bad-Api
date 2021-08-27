import React from 'react';

const Image = ({ image }) => {
   return (
      <div className='card'>
         <img className='img' src={image.img} alt='' />
         <div className='card-body'>
            <h4>
               <strong>Name: </strong>
               {image.name}
            </h4>
            <h4>
               <strong>Nickname:</strong>
               {image.nickname}
            </h4>
            <h4>
               <strong>Portrayed:</strong>
               {image.portrayed}
            </h4>
            <h4>
               <strong>Status:</strong>
               {image.status}
            </h4>
            <h4>
               <strong>Birthday:</strong>
               {image.birthday}
            </h4>
         </div>
      </div>
   );
};

export default Image;
