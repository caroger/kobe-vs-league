# Kobe vs. League

## Background

Kobe vs. League is an interactive data visualization tool to showcase Kobe Bryant's career stats against each of the NBA teams he has played against.

## Fucntionality & MVP

With Kobe vs. League, users will be able to:

- [ ] Select a team by clicking on the team logo displayed on the map to enter detailed view
- [ ] Detailed view for each team comprised of
  - [ ] Kobe's career stats against this team
  - [ ] Kobe's career shot chart against this team 
    - [ ] Users can hover over the poitns in the shot chart to see detailed information about that shot (Time, distance, gametime, make/miss)
- [ ] The design of the general theme would draw inspiration from the NBA video game series 2K

## Wireframes

![wire frame](https://github.com/caroger/kobe-vs-team/blob/main/img/KobevsLeague.svg)

## Architecture and Technologies

- `JavaScript` with `D3 ` for DOM manipulation and data visualization
- `Python` 
  - `nba_api` for obtaining data
  - `Pandas` for data manipulation and pre-processing
- `HTML/CSS` for layout and styling

## Implementation Timeline

**Day1: ** Obtain and process necessary data, set up necessay Node modules and created a working github page to display a static Kobe Bryant image

**Day2:**  Create a functional and interactive USA map with NBA logos mapped to correct locations. On hover, each logo should display some summary status

**Day 3:** Work on the detailed view for each team - shot chart 

**Day 4:**  Work on the detailed view for each team - summary stats



**Bonus features**

- [ ] Kobe vs Other Player
- [ ] Search

