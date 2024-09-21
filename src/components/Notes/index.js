// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {Heading} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNotes(event.target.value)
  const onAddNotes = event => {
    event.preventDefault()
    if (notes !== '' && title !== '') {
      const newNotes = {
        id: uuidv4(),
        title,
        notes,
      }
      setTitle('')
      setNotes('')
      setNotesList(prevNoteList => {
        return [...prevNoteList, newNotes]
      })
    }
  }

  const returnEmptyView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <h1>No Notes Yet</h1>
      <p>Notes you add will appear here</p>
    </div>
  )

  return (
    <div>
      <Heading>Notes</Heading>
      <form onSubmit={onAddNotes}>
        <input
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <textarea
          onChange={onChangeNotes}
          placeholder="Take a Note..."
          value={notes}
        >
          {/* {notes} */}
        </textarea>
        <button type="submit">Add</button>
      </form>
      {notesList.length === 0 ? (
        <>{returnEmptyView()}</>
      ) : (
        <ul>
          {notesList.map(each => (
            <NoteItem key={each.id} details={each} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Notes
