const BASE_URL = "https://restcountries.eu/rest/v2/region"

async function getCountries(continent) {
    const res = await fetch(`${BASE_URL}/${continent}`)
    const data = await res.json()
    return data
}

export default getCountries
