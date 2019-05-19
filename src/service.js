const apiKey = 'e5693481ef000bfdd855a0f21ad39631'

// quando tenho somente um argumento como parametro, nao necessito usar parenteses
export const getApi = query => {
    return fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
    .then(results => {
        return results.json();
    }).then(response => response.results)
}