const createAutoComplete = ({
    root: document.querySelector('.autocomplete'),
    renderOption(object) {
        return `
        <img src="${object.thumbnailUrl}" />
        ${object.title}
    `;
    },
    onOptionSelect(object) {
        onMovieSelect(object);
    },
    inputValue(object) {
        return object.title;
    },
    async fetchData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
        if (response.data.error) {
            return [];
        }
        return response.data;
    }
 });


const onMovieSelect = object => {
    this.object = object;
    document.querySelector('#summary').innerHTML = movieTemplate(object)};

const movieTemplate = (movieDetail) => {
    return `
    <article class="media">
    <figure class="media-left">
    <p class="image">
    <img src="${movieDetail.url}" />
    </p>
    </figure>
    <div class="media-content">
    <div class="content">
    <h1>${movieDetail.title}</h1>
    <h4>${movieDetail.id}</h4>
    <img src="${movieDetail.thumbnailUrl}" width="50px"/>
    </div>
    </div>
    </article>
    `;
}