import React, { useState } from 'react';
import './Generator.css';
import QRCode from 'qrcode';

function Generator() {
  const [name, setName] = useState(''); 
  const [date, setDate] = useState('');
  const [startPlace, setStartPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Define a fixed security code
  const securityCode = '123456789';

  const generateQrCode = async () => {
    try {
      // Include the fixed security code in the data
      const data = `${name}\nDate: ${date}\nStart Place: ${startPlace}\nDestination Place: ${destinationPlace}\nSecurity Code: ${securityCode}`;
      const response = await QRCode.toDataURL(data);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 className='title'> Generate QR Code</h2>
          <input type='text' placeholder="Enter the name" onChange={(e) => setName(e.target.value)}/>
          <input type='date' placeholder="Enter the date" onChange={(e) => setDate(e.target.value)}/>
          <input type='text' placeholder="Enter the start place" onChange={(e) => setStartPlace(e.target.value)}/>
          <input type='text' placeholder="Enter the destination place" onChange={(e) => setDestinationPlace(e.target.value)}/>
          
          <button onClick={() => generateQrCode()}>
            Generate QR Code
          </button>
          <br/>
          {imageUrl ? (
            <a href={imageUrl} download>
              <img src={imageUrl} alt='img' />
            </a>) : null}
        </div>
      </header>
    </div>
  );
}

export default Generator;
