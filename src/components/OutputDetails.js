import React from 'react'

export default function OutputDetails({outputMessage}) {
  return (
    <div>
        <p>
            Status:{" "}
            <strong>
                {outputMessage?.status?.description}
            </strong>
        </p>
        <p>
            Status:{" "}
            <strong>
                {outputMessage?.memory}
            </strong>
        </p>
        <p>
            Status:{" "}
            <strong>
                {outputMessage?.time}
            </strong>
        </p>


    </div>
  )
}
