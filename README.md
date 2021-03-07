# Memory-Game

### 2 pages:

- landing page
- game page

## landing page

- welcome
- option btn

## game page - fix the board

- create grid
- randomize the pictures
- add class
  ​
  ​
- the game
  - state object: - how many cards are open - sucsess - failing
    ​
  - event listner: - add 1 to state.how many cards are open - fliping the card
    ​ - how many cards are open? - if state.how many cards are open === 2: - round timer - when starts: disable btns - when ends: able btns - check if cards classes are equle: - if so: - remove the cards - updte sucsses - check if sucsses === 6 : if so, game-end(win) - else - flip them - update failing - if state.how many cards are open === 1: do nothing
    ​
  - game timer - start on load - when ends, check if sucsses = 6: - if so: game-end(win) - else: game-end(game-over)
    ​
- game-end(winOrGameOver){
  - show msg overlay
  - show btn: if usr click it: - destroy the board - call initializing
    ​
