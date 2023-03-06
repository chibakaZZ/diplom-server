const generatePassword = (password, key) => {
  const upperPassword = password.toUpperCase;
  let words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let index = 0; index < upperPassword.length; index++) {
    console.log(upperPassword[index]);
  }

  console.log(result);
};

generatePassword("passs", 9);
