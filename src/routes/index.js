import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character'
import Error404 from '../pages/error404';


const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
};

const router = async () => {
  const header = nul || document.getElementById('header');
  const content = nul || document.getElementById('content');

  header.innerHTML = await Header()
}

export default router;