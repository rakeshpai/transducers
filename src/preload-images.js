const extensionsToCache = ['.jpg', '.webp', '.gif', '.png'];

const shouldCache = path => extensionsToCache.some(e => path.endsWith(e));
const pathsToCache = paths => paths.filter(shouldCache);

const preload = path => {
  console.log(path);
  const x = new Image();
  x.src = path;
};

fetch('asset-manifest.json')
  .then(res => res.json())
  .then(Object.values)
  .then(pathsToCache)
  .then(paths => paths.forEach(preload));
