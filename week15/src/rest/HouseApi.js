const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HouseApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('there is an error fetching HOUSES_ENDPOINT')
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'applicationj/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('there is an error updating houses')
        }
    }
}

export const houseApi = new HouseApi();