import { useState } from "react";
import Artical from "./components/Article";
import articals from './constants/articals';
import styles from './app.module.scss';
import SelectField from "./ui/SelectField";

const App = () => {
  const [sortBy, setSortBy] = useState('');
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>Articals</h1>
        <SelectField value={sortBy} onChange={e => setSortBy(e.target.value)} title="Sort by: ">
          <option value=''>Defaults</option>
          <option value='upvoted'>Most Upvoted</option>
          <option value='recent'>Most Recent</option>
        </SelectField>
      </header>

      <section className={styles.articals_wrapper}>
        {articals.map((artical, index) => <Artical {...artical} key={index} />)}
      </section>
    </div>
  )
}

export default App;