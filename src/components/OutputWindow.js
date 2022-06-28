import { CardHeader } from '@mui/material'
import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import {Buffer} from 'buffer';

export default function OutputWindow({outputMessage}) {
  return (
    <Card>
        <CardHeader>
            Output
        </CardHeader>
        <CardContent>
        {outputMessage?.status?.id == 3?(Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null
            ? `${Buffer.from(outputMessage.stdout, 'base64').toString('utf8')}`
            : null:"Error"}

        </CardContent>
    </Card>
  )
}
