//BMI formula:
//BMI = x KG / (y M * y M)
//x=bodyweight in KG
//y=height in m

//John Doe | M | BMI: 24 | Normal Weight
//Mary Anne | F | BMI: 30 | Obese
const Patient1 = {
  name: "John Doe",
  gender: "M",
  height: 1.86,
  weight: 85,
};
const Patient2 = {
  name: "Mary Anne",
  gender: "F",
  height: 1.7,
  weight: 92,
};

function bmi(weight, height) {
  let bmi = Math.floor(weight / height ** 2);
  if (bmi < 18.5) {
    return bmi + " " + "It falls within the underweight range.";
  } else if (bmi < 25) {
    return bmi + " " + "It falls within the normal.";
  } else if (bmi < 30) {
    return bmi + " " + "It falls within the overweight range.";
  } else {
    return bmi + " " + "It falls within the obese range.";
  }
}
console.log(
  Patient1.name,
  "|",
  Patient1.gender,
  "|",
  bmi(Patient1.weight, Patient1.height)
);
console.log(
  Patient2.name,
  "|",
  Patient2.gender,
  "|",
  bmi(Patient2.weight, Patient2.height)
);
