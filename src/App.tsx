import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import './App.scss';
import './i18n-next';

import { ScrollTop } from 'primereact/scrolltop';
import { Header } from './sections/Header';
import { Home } from './sections/Home';
import { Training } from './sections/Training';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Header />
      <Home />
      <Training />
      <About />
      <Contact />
      <ScrollTop className="scrollTopBackground" />
    </div>
  );
}

export default App;
