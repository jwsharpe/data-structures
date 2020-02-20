function sinkIsland(map, i, j, h, w) {
  const stack = [];
  for (i; i < h; i++) {
    for (j; j < w; j++) {}
  }
}
function numIslands(map) {
  const h = map.length;
  const w = map[0].length;
  let counter = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === 1) {
        sinkIsland(map, i, j, h, w);
        counter++;
      }
    }
  }
  console.log(counter);
}

(function() {})();

const map = [
  [1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];
numIslands(map);
