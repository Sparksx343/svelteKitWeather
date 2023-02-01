const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea258607a0msh381abbb0c9ee007p1e1887jsn7e6523e1c211',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export const GET = (evt: string) => {
    return new Response(JSON.stringify({message: evt}), {status: 200})
}