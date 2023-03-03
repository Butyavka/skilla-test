import { addZero } from './addZero'

function getMinutesWithSeconds(seconds: number) {
    if (seconds === 0) return 0

    const minutes = Math.floor(seconds / 60)
    const currentSeconds = Math.floor(seconds % 60)

    return `${addZero(minutes)}:${addZero(currentSeconds)}`
}

export {
    getMinutesWithSeconds
}