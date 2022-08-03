import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <div className="App">
      <TextField
        label="title"
        fullWidth
        onChange={event => {
          setTitle(event.target.value)
        }}
      />
      <TextField
        label="content"
        style={{marginTop:10}}
        fullWidth
        onChange={event => {
          setContent(event.target.value)
        }}
      />
      <Button
        onClick={() => {
          fetch('http://localhost:8080/api/write', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content }),
          })
            // .then(res => res.json)
            .then(res => {
              alert('작성 완료')
              console.log(res.body)
            })
            .catch(err => {
              alert('작성 실패')
            })
        }}
      >
        Send
      </Button>
    </div>
  )
}

export default App
