# Kobe vs. League
[![Product Name Screen Shot][product-screenshot]](https://caroger.github.io/kobe-vs-league/)
[Go to Live Site](https://caroger.github.io/kobe-vs-league/)

## Instructions

This project was built to interactively display Kobe Braynt's basketball career achievements/stats against each of his opponent teams in the NBA.

- Click on the team logos on the map to display Kobe's game stats on a table format on the right
- Click on the the table to toggle the stats display in three views
  1. **Highlights** :Kobe's best performing game in each of the major stats categores (i.e. highest poitns scored, most rebounds, most 3 points made, and etc.)
  2. **Total** : Kobe's accumalative stats in each of the major game stats categories
  3. **Average** : Kobe's average stats in each of the major game stats categories

## Interesting Observations

Kobe had losing records against only three teams in the NBA
  1. San Antonio Spurs (25 - 36)
  2. Portland Trail Blazers (30 - 32)
  3. Miami Heat (16 - 17)

Kobe had dominant records against three other NBA teams in the state of California
  1. Los Angels Clippers (47 - 22)
  2. Golden State Warriors (51 - 16)
  3. Sacramento Kings (42 - 22)

## Technology Used

- **Python**
    - data retreiving ([nba_api](https://github.com/swar/nba_api))
    - data cleaning and aggregation ([pandas](https://github.com/pandas-dev/pandas))
- **Javascript**
  - data rendering ([d3.js](https://github.com/d3/d3/blob/master/API.md))
  - DOM manipulation
- **HTML5, CSS3**

## Technical Challenges

### Async Data Retrieval
The data loading methods in d3.js are promise based. It was a challenge to make all data (geo  location for rendering the map, team logo, and stats table) available to the final rendering method (composed of several modulized rendering methods for base map, team logos, and table) together.

I created a dedicated data loading function to merge all three data sources into a returned Javascript object for plotting.

```js
import { json } from "d3";

export const loadMapData = () => {
  let geoData;
  let arenaData;
  let gameData;
  return Promise.all([
    json("./assets/data/gz_2010_us_040_00_20m.json"),
    json("./assets/data/arenas.geojson"),
    json("./assets/data/game_stats.json"),
  ]).then(([d1, d2, d3]) => {
    geoData = d1.features.filter(
      // do not draw Alaska and Hawaii on map
      (d) => !["Alaska", "Hawaii"].includes(d.properties.NAME)
    );
    arenaData = d2.features;
    gameData = d3;
    return { geoData, arenaData, gameData };
  });
};

```
### Lambda Function to Locate the Best Performing Game

It was a challenge to go through over 1,300 game logs to find Kobe's best performing game in each of the stats category per team.

I created a custom helper function to be passed into the Pandas DataFrame as a lambda function achieve the result in a DRY fashion.

```Python
    # Helper function
    def find_best_game(df, team, col="PTS"):
        sub_df = df[df['OPPONENT']==team]
        max_index = sub_df[col].idxmax()
        max_row = df.iloc[[max_index]]
        return f"{max_row[col].item()} on {max_row['GAME_DATE'].item()}"

    # Call the helper function as lambda function to create the "most points" and "most rebounds" column in the df
    highlight_df['Most Points'] = highlight_df.apply(lambda x: find_best_game(df_kobe_games_all, x.name), axis=1)
    highlight_df['Most Rebounds'] = highlight_df.apply(lambda x: find_best_game(df_kobe_games_all, x.name, "REB"), axis=1)
```

## Next Steps
 - Display Kobe's career shot chart against each opponent in a modal

[product-screenshot]: /dist/assets/meta/demo.gif

