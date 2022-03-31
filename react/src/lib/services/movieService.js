import client from '../client'

const movieFields = 
'title'


export const getMovie = async () => {
    const data = await client.fetch(`*[_type == "author"]{${authorFields}}`);
    return data;
}