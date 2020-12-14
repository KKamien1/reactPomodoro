import React from 'react';

export default function ProgressBar({ className, trackRemaining = false, procent = 10 }) {
  const padding = trackRemaining ? 'paddingLeft' : 'paddingRight';

  return (<div className={"ProgressBar " + className} style={{ [padding]: `${100 - procent}%` }} ></div>)
}