import uniqolor from 'uniqolor'

export const getBackgroundGradient = (seed: string) => {
  const bgAccent = uniqolor(seed, {
    saturation: [30, 35],
    lightness: [60, 70],
  }).color

  const bgAccentLight = uniqolor(seed, {
    saturation: [30, 35],
    lightness: [80, 90],
  }).color

  const bgAccentUltraLight = uniqolor(seed, {
    saturation: [30, 35],
    lightness: [95, 96],
  }).color

  return [bgAccent, bgAccentLight, bgAccentUltraLight]
}
