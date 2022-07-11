import Row from './Row'

export default function Table(props) {
  return (
    <table className='table' border="1">
      <caption>Таблица поиска дисертаций</caption>
      <thead>
        <tr>
          <th>Название дисертации</th>
          <th>Автор</th>
          <th>Год</th>
        </tr>
      </thead>
      <tbody>
        {props.diserts?.map((disert) => (
          <Row
            key={disert.title + disert.author}
            title={disert.title}
            author={disert.author}
            year={disert.year}
          />
        ))}
      </tbody>
    </table>
  )
}
