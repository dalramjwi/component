const a = (a, b, c) => {
  return {
    name: a,
    age: b,
    job: c,
  };
};
const b = a("ㅇㅇ", "ㅁㅁ", "ㄹㄹ");
console.log("first b :", b);
b.address = "dd";
console.log("second b : ", b);
