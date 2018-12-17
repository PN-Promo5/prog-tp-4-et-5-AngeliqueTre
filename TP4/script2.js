function ftest(nb1, nb2, nb3) {
  let moyenne = (nb1+nb2+nb3)/3 + (nb1+nb2+nb3)/3 + (nb1+nb2+nb3)/3+ (nb1+nb2+nb3)/3+(nb1+nb2+nb3)/3
  return (moyenne);
}

let weightChild1 = 24
let weightChild2 = 12
let weightChild3 = 32

let averageWeightChild = ftest(weightChild1, weightChild2, weightChild3);
console.log(averageWeightChild);
