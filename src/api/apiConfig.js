const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey: '054cdffe11e3f11cf1a71ef2ac21ca0f',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;