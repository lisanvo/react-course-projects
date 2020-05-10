import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bcNHl6HzI2YBiyCuM_kXm65N33aOZbRiWBrpueNsgfw'
    }
});