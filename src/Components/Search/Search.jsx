import React, { useState } from 'react'
import './Search.css'
import { getDiserts } from '../../Api/api'

export default function Search(props) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const search = async (e) => {
    e.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)
    const diserts = await getDiserts(value)
    const sDiserts = diserts.sort((a, b) => a.year - b.year)
    props.onSearch(sDiserts)
    setLoading(false)
  }

  return (
    <div className="content">
      <div className="control">
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Введите текст"
            onChange={onChange}
            value={value}
          />
          <button type="submit"></button>
        </form>
      </div>
      {loading && (
        <div className="loading">
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa fa-spinner fa-spin"></i>Сбор данных...
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
