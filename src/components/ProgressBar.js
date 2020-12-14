import React from 'react';
import classNames from 'classnames'

export default function ProgressBar({ className, trackRemaining = false, procent = 10, big = false }) {
  const padding = trackRemaining ? 'paddingLeft' : 'paddingRight';
  let classes = classNames(
    "progress",
    className,
    {
      "progress--big": big,
    }
  )

  return (<div className={classes} style={{ [padding]: `${100 - procent}%` }} ></div>)
}