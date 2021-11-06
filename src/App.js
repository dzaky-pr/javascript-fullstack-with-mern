import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import Manajemenbuku from './components/ManajemenBuku';
import { useState } from 'react';
function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: 'Laskar Pelangi', pengarang: 'Andrea Hirata', harga: 80000, stok: 7 },
    { _id: 2, judul: 'Bumi', pengarang: 'Tere Liye', harga: 85000, stok: 5 },
  ]);

  function storeData(inputBook) {
    console.log(inputBook);
    alert('Data Berhasil Ditambahkan');
  }

  function updateData(inputBook) {
    console.log(inputBook);
    alert('Data Berhasil Diupdate');
  }

  function deleteData(book) {
    console.log(book);
    alert('Data Berhasil Dihapus');
  }

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Beranda />
          </Route>

          <Route exact path="/manajemen-buku">
            <Manajemenbuku bookList={books} store={storeData} update={updateData} remove={deleteData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
