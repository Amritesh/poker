const state = {
  tournamentId: 0,
  game: 0,
  hand: 0,
  spinCount: 0,
  buyin: 0,
  sb: 0,
  pot: 0,
  sidepots: [],
  commonCards: [],
  players: [],
  db: 0,
  me: 0,
  callAmount: 0,
  minimumRaiseAmount: 0
}

const sidepot = {
  quote: 0,
  amount: 0
}

const card = {
  rank: 'A',
  type: 'S'
}

const player = {
  id: '',
  name: '',
  status: 'out',
  cards: [],
  chips: 0,
  chipsBet: 0
}

module.exports = {state, sidepot, card, player}