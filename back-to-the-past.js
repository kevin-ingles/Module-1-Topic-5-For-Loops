function main(money, year) {
    var newMoney = 0;
    var age = 18;
    for (i = 1800; i <= year; i++) {
        if (i % 2 == 0) {
            money -= 12000;
            age++;
        } else {
            money -= 12000 + (age * 50);
            age++;
        }
    }
    if (money > 0) {
        console.log("Yes! He will live a carefree life and will have " + money.toFixed(2) + " dollars left.");
    } else if (money <= 0) {
        newMoney = money * -1;
        console.log("He will need " + newMoney.toFixed(2) + " dollars to survive.");
    }
}
main(50000, 1802);