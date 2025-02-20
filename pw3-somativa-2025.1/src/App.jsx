import './App.css'
import BookCard from './components/BookCard'
import bookCover from './assets/fundacao.jpg'

function App() {

  return (
    <>
      <div>

        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard 
        title='Fundação' 
        author='Isaac Asimov'
        image={bookCover}/>

        {/* <BookCard 
        title='Androides sonham com ovelhas elétricas' 
        author='Philip K. Dick'
        image='imagem do livro aqui'/>

        <BookCard 
        title='Metrópolis' 
        
        author='Thea Von Harbou'
        image='imagem do livro aqui'/>

        <BookCard 
        title='É assim que se perde a guerra do tempo' 
        author='Max Gladstone, Amal El-Mohtar'
        image='imagem do livro aqui'/> */}

      </div>
    </>
  )
}

export default App