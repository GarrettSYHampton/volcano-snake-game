import './style.css'

// VSG-1 scaffold placeholder: draws a blank canvas with no game logic yet.
// Snake movement, food, and collisions arrive in later tickets.

function getCanvas(): HTMLCanvasElement {
  const canvas = document.querySelector<HTMLCanvasElement>('#game')
  if (canvas === null) {
    throw new Error('Missing required <canvas id="game"> element')
  }
  return canvas
}

function drawPlaceholder(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext('2d')
  if (ctx === null) {
    throw new Error('2D canvas context is not available')
  }

  ctx.fillStyle = '#1a0f0a'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = '#ff6b35'
  ctx.lineWidth = 2
  ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2)

  ctx.fillStyle = '#ffb347'
  ctx.font = '20px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('Volcano Snake', canvas.width / 2, canvas.height / 2 - 14)
  ctx.font = '14px system-ui, sans-serif'
  ctx.fillStyle = '#c9a27a'
  ctx.fillText('Game coming soon', canvas.width / 2, canvas.height / 2 + 14)
}

drawPlaceholder(getCanvas())
