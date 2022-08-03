import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MessageCard from '../../MessageCard/index'
import styles from './MainPage.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface MessageType {
  id: number
  title: string
  content: string
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

function MainPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState<Array<MessageType>>([])
  useEffect(() => {
    fetch('http://localhost:8080/api/msg', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        let data: Array<MessageType> = res
        setMessage([...data])
      })
  }, [])
  return (
    <div className={ cx('container')}>
      <TextField
        label="title"
        fullWidth
        margin="normal"
        onChange={event => {
          setTitle(event.target.value)
        }}
      />
      <TextField
        label="content"
        multiline
        margin="normal"
        fullWidth
        onChange={event => {
          setContent(event.target.value)
        }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          fetch('http://localhost:8080/api/write', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content }),
          })
            .then(res => res.json)
            .then(res => {
              alert('작성 완료')
              window.location.replace('/')
            })
            .catch(err => {
              alert('작성 실패')
            })
        }}
      >
        Send
      </Button>
      <hr />
      {message.map(item => (
        <MessageCard title={item.title} content={item.content} createdAt={item.createdAt} />
      ))}
    </div>
  )
}

export default MainPage
