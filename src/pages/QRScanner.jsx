import React, { Component } from 'react';
import QrScanner from 'react-qr-scanner';
import Head from "../components/Head";
import Footer from "../components/Footer";
import styled from "styled-components";


class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'environment',
      startScan: false,
      scannedUrl: '',
    };
  }

  handleScan = async (result) => {
    if (result && result.text) {
      this.setState({ startScan: false, scannedUrl: result.text });
    }
  };

  handleError = (error) => {
    console.error('Error while scanning QR code:', error);
  };

  

  render() {
    const { selected, startScan, scannedUrl } = this.state;

    const previewStyle = {
      textAlign: 'center',
      padding : '10%',
    };

    return (
      
      <div>
         <Head />
      <div style={previewStyle}>
        <h1>Scan QR Code</h1>
        
        <div style={{ margin: '20px 0' }}>
          <button onClick={() => this.setState({ scannedUrl: '' })}>Reset</button>
        </div>
        <button onClick={() => this.setState({ startScan: !startScan })}>
          {startScan ? 'Stop Scan' : 'Start Scan'}
        </button>
        {startScan && (
          <>
            <select onChange={(e) => this.setState({ selected: e.target.value })}>
              <option value={'environment'}>Back Camera</option>
              <option value={'user'}>Front Camera</option>
            </select>
            <QrScanner
              facingMode={selected}
              delay={1000}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '300px' }}
            />
          </>
        )}

        <div style={{ margin: '20px 0' }}>
          <label>Scanned URL:</label>
          <input type="text" value={scannedUrl} readOnly />
        </div>

      </div>
      <footer />
        
        
      </div>
    );
  }
}

export default QRScanner;
