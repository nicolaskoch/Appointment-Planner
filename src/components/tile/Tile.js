import React from 'react'

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) =>
        index === 0 ? (
          <p key={index} className="tile-title">
            {value}
          </p>
        ) : (
          <p key={index} className="tile">
            {value}
          </p>
        )
      )}
    </div>
  )
}
