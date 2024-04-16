export const IdGenerator = (length = 6) => {
  const str = "askldnoqhi12h3io12iIIONJOINNBJIBIUBOU123132";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += str[Math.floor(Math.random() * str.length)];
  }
  return id;
};
