import React, { useState } from 'react'
import styles from './Form.module.css'
const Form = () => {
    const [address, setAddress] = useState(""); 
    const [location, setLocation] = useState("");
    const [configuration, setConfiguration] = useState("");
    const [amenities, setAmenities] = useState("");
    const [availability, setAvailability] = useState("");
    const [photos, setPhotos] = useState([]);
    const [rentPrice, setRentPrice] = useState(0);
    const [maintenancePrice, setMaintenancePrice] = useState(0);
    const [depositPrice, setDepositPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            address: address,
            location: location,
            configuration: configuration,
            amenities: amenities,
            availability: availability,
            photos: photos,
            rentPrice: rentPrice,
            maintenancePrice: maintenancePrice,
            depositPrice: depositPrice,
        };
        
        console.log(newEntry);
        
    }
    
  return (
    <div className={styles.head}>
        <h1 className={styles.detail}>Add Details</h1>
        <div className={styles.box}>
            <form className={styles.top} onSubmit={handleSubmit}>
            <div>
    <label htmlFor='Address' className={styles.Name}>Address:</label>
    <br/>
    <input
        className={styles.input}
        type='text'
        id="Address"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='location'>Geo location:</label>
    <br/>
    <input
        className={styles.input}
        type='text'
        id="location"
        value={location}
        placeholder="Enter Geo Location"
        onChange={(e) => setLocation(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='configuration'>Configuration:</label>
    <br/>
    <input
        className={styles.input}
        type='text'
        id="configuration"
        value={configuration}
        placeholder="Enter Configuration"
        onChange={(e) => setConfiguration(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='amenities'>Amenities:</label>
    <br/>
    <input
        className={styles.input}
        type='text'
        id="amenities"
        value={amenities}
        placeholder="Enter Amenities"
        onChange={(e) => setAmenities(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='availability'>Availability:</label>
    <br/>
    <input
        className={styles.input}
        type='text'
        id="availability"
        value={availability}
        placeholder="Enter Availability"
        onChange={(e) => setAvailability(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='photos'>Photos:</label>
    <br/>
    <input
        className={styles.input}
        type='file'
        id="photos"
        placeholder="Upload Photos"
        onChange={(e) => setPhotos(e.target.files)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='rentPrice'>Rent Price:</label>
    <br/>
    <input
        className={styles.input}
        type='number'
        id="rentPrice"
        placeholder="Enter Rent Price"
        value={rentPrice}
        onChange={(e) => setRentPrice(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='maintenancePrice'>Maintenance Price:</label>
    <br/>
    <input
        className={styles.input}
        type='number'
        id="maintenancePrice"
        placeholder="Enter Maintenance Price"
        value={maintenancePrice}
        onChange={(e) => setMaintenancePrice(e.target.value)}
        autoComplete='off'
    />
</div>

<div>
    <label htmlFor='depositPrice'>Deposit Price:</label>
    <br/>
    <input
        className={styles.input}
        type='number'
        id="depositPrice"
        placeholder="Enter Deposit Price"
        value={depositPrice}
        onChange={(e) => setDepositPrice(e.target.value)}
        autoComplete='off'
    />
</div>
                <button className={styles.btn1}>Submit</button>
            
            </form>
        </div>
    </div>
  )
}

export default Form;