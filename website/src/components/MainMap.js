import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { geolocated } from "react-geolocated";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MainMap extends Component {
    
    static defaultProps = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 13,
        key: process.env.API_KEY
    };


    render() {
        return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBLVjN3Q4tXWcJigEjQbGNApp0oC6C_ows' }}
                    defaultCenter={this.props.center}
                    center = {{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={this.props.coords.latitude}
                        lng={this.props.coords.longitude}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
            ) : (
                <div>Getting the location data&hellip; </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(MainMap);