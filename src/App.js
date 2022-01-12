import Header from './components/Header';
import Card from './components/Card';
import data from './data';

const App = () => {
  const cards = data.map((item, index) => {
    return <Card key={index} {...item} />;
  });
  return (
    <>
      <Header />
      <main className='container'>{cards}</main>
    </>
  );
};

export default App;
