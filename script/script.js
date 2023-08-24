let bank = [
  {
      name: "Mebel Shikko",
      budget: 50000,
      tax: 15,
      expensesPerYear: [
        {
              title: 'rent',
              total: 7000,
        },
        {
          title: 'others',
          total: 7000
        },
        {
          title: 'ads',
          total: 3000
        }
      ]
  },
  {
      name: "ruxshona beaty salon",
      budget: 30000,
      tax: 12,
      expensesPerYear: [
          {
              title: 'rent',
              total: 6000
          },
          {
              title: 'others',
              total: 7000
          },
          {
              title: 'ads',
              total: 2000
          },
      ]
  },
  {
      name: "emin nosfrush",
      budget: 5000,
      tax: 0,
      expensesPerYear: [
          {
              title: 'rent',
              total: 300
          }
      ]
  },
  {
      name: "akva mashennik",
      budget: 80000,
      tax: 15,
      expensesPerYear: [
          {
              title: 'rent',
              total: 3000
          }
      ]
  }
]

let bigTax = {taxSum: 0}

let bestComp = []
let ntBestComp = []


for (let item of bank) {
  item.taxSum = item.tax * (item.budget / 12) / 100

  if(item.taxSum > bigTax.taxSum) {
    bigTax = item

  }
  
  const wastes = item.expensesPerYear.reduce((a, b) => a + b.total, 0) / 12
  
  item.percRate = Math.round((wastes + item.taxSum) * 100 / (item.budget / 12)) + '%'
  
  let total = (item.budget / 12) - (wastes + item.taxSum)
  
  if (total > 0) {
    bestComp.push(item)
  } else {
    ntBestComp.push(item)
  }
}

console.log(bigTax);
console.log(...bestComp);
console.log(ntBestComp);

