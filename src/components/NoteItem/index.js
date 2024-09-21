// Write your code here
const NoteItem = props => {
  const {details} = props
  const {title, notes} = details
  return (
    <li>
      <h1>{title}</h1>
      <p>{notes}</p>
    </li>
  )
}

export default NoteItem
