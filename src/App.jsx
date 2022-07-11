import { useState } from 'react'
import Result from './Components/Result/Result'
import Search from './Components/Search/Search'

function App() {
  const [diserts, setDiserts] = useState([])

  const onSearch = (data) => {
    setDiserts(data)
  }
  
const showResult = diserts.length > 0;

  return (
    <div>
      <Search onSearch={onSearch} />
      {showResult && <Result diserts={diserts} />}
    </div>
  )
}

export default App
