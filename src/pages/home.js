import getData from '../utils/getData'

const Home = async () => {
  const characters = await getData();

  const view = `
  <div class="characters flex-container ">
  ${characters.results.map(
    character => `
    <article class="character-item>
    <a href="#/${character.id}/">
    <img class="image-responsive" src="${character.image}" alt="${character.name}">
    <a href="#/${character.id}/">
    <h2 class="character-link" href="#/${character.id}/">${character.name}</h2>
    </a>
    </a>
    </article>
    `
    ).join('')}
    </div>
  `
  return view
}

export default Home
