import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type MessageCardProps = {
  title: string
  content: string
  createdAt: Date
}

export default function MessageCard({ title, content, createdAt }: MessageCardProps) {
  return (
    <div style={{ margin: 10 }}>
      <Card>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </div>
  )
}
