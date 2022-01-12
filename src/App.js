import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
};

export default App;
