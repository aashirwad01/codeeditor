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
            Memory:{" "}
            <strong>
                {outputMessage?.memory}
            </strong>
        </p>
        <p>
            Time:{" "}
            <strong>
                {outputMessage?.time}
            </strong>
        </p>


    </div>
  )
}
