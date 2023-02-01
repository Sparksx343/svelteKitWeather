const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea258607a0msh381abbb0c9ee007p1e1887jsn7e6523e1c211',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export const GET = () => {
    return new Response(JSON.stringify({message: 'Hey soy el server y front al mismo tiempo'}), {status: 200})
}